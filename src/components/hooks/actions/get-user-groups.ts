"use server";

import { sleep } from "@/lib/sleep";
import type { UserGroup } from "@/types";

export async function getUserGroups(userId: string): Promise<UserGroup[]> {
    await sleep(5_000);
    return [
        {
            id: "10",
            owner: userId,
            members: [],
            name: "test group",
        },
    ];
}
