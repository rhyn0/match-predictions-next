"use client";

import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Link from "next/link";

interface NavigationBarProps {
    className?: string;
}
function NavigationBar({ className }: NavigationBarProps) {
    return (
        <NavigationMenu>
            <NavigationMenuList>
                <NavigationMenuItem>
                    <Link href="/groups" passHref legacyBehavior>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            Groups
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <Link href="/predict" passHref legacyBehavior>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            Predict
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    );
}

export default NavigationBar;
