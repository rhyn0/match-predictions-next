import { getUserPredictions } from "@/components/hooks/actions/get-user-predictions";
import { queryOptions } from "@tanstack/react-query";

export const predictionOptions = (userId: string) =>
    queryOptions({
        queryKey: ["predictions"],
        queryFn: async () => await getUserPredictions(userId),
    });
