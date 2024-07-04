"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type React from "react";

export default function NavigationBar() {
    const pathname = usePathname();
    return (
        <div className="mr-4 hidden md:flex">
            <nav className="flex items-center gap-2 text-sm lg:gap-4">
                <LinkHighlighting pathname={pathname} href="/dashboard">
                    Dashboard
                </LinkHighlighting>
                <LinkHighlighting pathname={pathname} href="/schedule">
                    Schedule
                </LinkHighlighting>
                <LinkHighlighting pathname={pathname} href="/scoreboard">
                    Scoreboard
                </LinkHighlighting>
            </nav>
        </div>
    );
}

interface LinkHighlightingProps {
    pathname: string | undefined;
    href: string | URL;
    className?: string;
    children: React.ReactNode;
}
function LinkHighlighting({
    pathname,
    href,
    className,
    children,
}: LinkHighlightingProps) {
    const isCurrentPath = pathname?.startsWith(href.toString());
    return (
        <Link
            href={href}
            className={cn(
                isCurrentPath ? "text-foreground" : "text-foreground/60",
                className,
            )}
        >
            {children}
        </Link>
    );
}
