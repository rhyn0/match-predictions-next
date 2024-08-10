import { getUserGroups } from "@/components/hooks/actions/get-user-groups";
import { getUser } from "@/components/hooks/auth/server";
import { redirect } from "next/navigation";
import GridGroup from "./group-grid";

export default async function GroupsPage() {
    const user = await getUser();
    if (!user) {
        return redirect("/login");
    }

    const groups = await getUserGroups(user.id);

    return (
        <main>
            <h1 className="text-2xl justify-center text-center flex mx-auto">
                Welcome {user.email} to the groups page.
            </h1>
            <GridGroup groups={groups} />
        </main>
    );
}
