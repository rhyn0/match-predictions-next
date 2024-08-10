"use client";
import { signOut } from "@/components/hooks/login-action";
import { Button } from "@/components/ui/button";

export default function LogoutButton() {
    return (
        <Button
            variant="link"
            onMouseDown={async () => await signOut()}
            className="w-full flex"
        >
            Logout
        </Button>
    );
}
