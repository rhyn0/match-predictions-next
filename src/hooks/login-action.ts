"use server";
import { createClient } from "@/lib/supabase/server";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export interface loginOptions {
    successRedirect?: string;
    failureRedirect?: string;
}
export async function signIn(
    formData: FormData,
    {
        successRedirect = "/protected",
        failureRedirect = "/login?message=Could not authenticate user",
    }: loginOptions,
) {
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const supabase = createClient();

    const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
    });

    if (error) {
        return redirect(failureRedirect);
    }

    return redirect(successRedirect);
}
export async function signUp(
    formData: FormData,
    {
        successRedirect = "/login?message=Check email to continue sign in process",
        failureRedirect = "/login?message=Could not authenticate user",
    }: loginOptions,
) {
    const origin = headers().get("origin");
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const supabase = createClient();

    const { error } = await supabase.auth.signUp({
        email,
        password,
        options: {
            emailRedirectTo: `${origin}/auth/callback`,
        },
    });

    if (error) {
        return redirect(failureRedirect);
    }

    return redirect(successRedirect);
}
export async function signOut() {
    const supabase = createClient();
    await supabase.auth.signOut();
    return redirect("/login");
}
