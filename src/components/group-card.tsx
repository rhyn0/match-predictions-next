"use client";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import type { UserGroup } from "@/types";

interface GroupCardProps {
    group: UserGroup;
    className?: string;
}
export default function GroupCard({ group, className }: GroupCardProps) {
    //     <span>Owner</span>
    //     <p>{g.owner}</p>
    //     <span>Name</span>
    //     <p>{g.name}</p>
    //     <span>Number of memebers</span>
    //     <p>{g.members.length}</p>
    return (
        <Card>
            <CardHeader>
                <CardTitle>Card Title</CardTitle>
                <CardDescription>Card Description</CardDescription>
            </CardHeader>
            <CardContent>
                <p>Card Content</p>
            </CardContent>
            <CardFooter>
                <p>Card Footer</p>
            </CardFooter>
        </Card>
    );
}
