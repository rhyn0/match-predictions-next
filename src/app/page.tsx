import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Index() {
    return (
        <main>
            <div className="flex-1 w-full flex flex-col gap-20 items-center">
                <div className="w-full max-w-4xl flex justify-between items-center p-3 text-sm">
                    HomePage
                    <Button asChild variant="link">
                        <Link href="/dashboard">Dashboard</Link>
                    </Button>
                </div>
            </div>
        </main>
    );
}
