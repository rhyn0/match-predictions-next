import { getUser } from "@/components/hooks/auth/server";
import { getQueryClient } from "@/lib/query-client";
import { HydrationBoundary, dehydrate } from "@tanstack/react-query";
import { redirect } from "next/navigation";
import Grid from "./prediction-grid";
import { predictionOptions } from "./prediction-options";

export default async function PredictionPage() {
    const user = await getUser();
    if (!user) {
        return redirect("/login");
    }
    const queryClient = getQueryClient();
    queryClient.prefetchQuery(predictionOptions(user.id));

    return (
        <main>
            <h1>This is the predict page</h1>
            <HydrationBoundary state={dehydrate(queryClient)}>
                <Grid user={user} />
            </HydrationBoundary>
        </main>
    );
}
