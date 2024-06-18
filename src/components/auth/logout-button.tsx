"use client";
import { Button } from "@/components/ui/button";
import { signOut } from "@/hooks/login-action";

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
