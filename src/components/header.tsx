"use client";
import Image from "next/image";
import Link from "next/link";

import { siteConfig } from "@/lib/config";
import { cn } from "@/lib/utils";
import { Icons } from "./icons";
import { ThemePicker } from "./theme-picker";
import { buttonVariants } from "./ui/button";

interface HeaderProps {
    className?: string;
}

export function Header({ className }: HeaderProps) {
    return (
        <header className={cn("bg-secondary align-middle", className)}>
            <div className="container flex">
                <div className="flex space-x-8 md:justify-start">
                    <div>
                        <Link href="/" scroll className="flex items-center space-x-2">
                            <Image
                                src="/img/logo.svg"
                                alt="Prediction Logo"
                                height={40}
                                width={40}
                                className=" dark:fill-white"
                                style={{}}
                            />
                            Prediction Groups
                        </Link>
                    </div>
                </div>
                <div className="flex flex-1 md:justify-end">
                    <nav className="flex items-center space-x-2">
                        <Link href={siteConfig.github.link}>
                            <div
                                className={cn(
                                    buttonVariants({ variant: "ghost" }),
                                    "mb-1 w-9 px-0 align-middle",
                                )}
                            >
                                <Icons.github className="size-5" />
                                <span className="sr-only">GitHub</span>
                            </div>
                        </Link>
                        <ThemePicker />
                    </nav>
                </div>
            </div>
        </header>
    );
}
