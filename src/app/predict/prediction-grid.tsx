"use client";
import type { User } from "@supabase/supabase-js";
import { useSuspenseQuery } from "@tanstack/react-query";
import { predictionOptions } from "./prediction-options";

interface DisplayDataProps {
    user: User;
}

export default function DisplayData({ user }: DisplayDataProps) {
    const { data, isPending, status } = useSuspenseQuery(predictionOptions(user.id));

    return <div>{isPending ? `loading - ${status}` : JSON.stringify(data)}</div>;
}
