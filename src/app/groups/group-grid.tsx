"use client";

import GroupCard from "@/components/group-card";
import type { UserGroup } from "@/types";

interface GridGroupProps {
    groups: UserGroup[];
}
export default function GridGroup({ groups }: GridGroupProps) {
    return (
        <div className="grid gap-4 grid-flow-row grid-cols-1 md:grid-cols-2 border-2 border-white">
            {groups.length > 0 ? (
                groups.map((g) => (
                    <GroupCard
                        key={g.id}
                        group={g}
                        className="flex flex-col space-y-1 justify-center mx-auto"
                    />
                ))
            ) : (
                <div className=" font-semibold">No groups yet</div>
            )}
            <NewGroupButton />
        </div>
    );
}

function NewGroupButton() {
    return null;
}
