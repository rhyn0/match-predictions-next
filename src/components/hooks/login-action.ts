"use server";

import { logger } from "@/lib/log";
import { createClient } from "@/lib/supabase/server";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export async function signIn(formData: FormData) {
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const supabase = createClient();

    const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
    });

    if (error) {
        return redirect("/login?message=Could not authenticate user");
    }

    return redirect("/protected");
}
export async function signUp(formData: FormData) {
    const origin = headers().get("origin");
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const supabase = createClient();

    const { error } = await supabase.auth.signUp({
        email,
        password,
        options: {
            emailRedirectTo: `${origin}/api/auth/callback`,
        },
    });

    if (error) {
        logger.error("Failed to signUp user - ", error);
        return redirect("/login?message=Could not authenticate user");
    }

    return redirect("/login?message=Check email to continue sign in process");
}
export async function signOut() {
    const supabase = createClient();
    await supabase.auth.signOut();
    return redirect("/login");
}
