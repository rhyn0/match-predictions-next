import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { getUser } from "@/hooks/auth/server";
import { User } from "lucide-react";
import Link from "next/link";
import React from "react";
import LogoutButton from "./auth/logout-button";
import { Button } from "./ui/button";

export default async function AuthDropdown() {
    const user = await getUser();
    return (
        <DropdownMenu>
            <DropdownMenuTrigger>
                <User />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                    {user ? (
                        <React.Fragment>
                            <DropdownMenuItem disabled>{user.email}</DropdownMenuItem>
                            <DropdownMenuItem>
                                <LogoutButton />
                            </DropdownMenuItem>
                        </React.Fragment>
                    ) : (
                        <DropdownMenuItem>
                            <Button asChild variant="link" className="flex w-full">
                                <Link href="/login">Login</Link>
                            </Button>
                        </DropdownMenuItem>
                    )}
                </DropdownMenuGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
