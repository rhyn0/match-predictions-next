import { Header } from "@/components/header";
import { ThemeProvider } from "@/components/providers/theme";
import { TailwindIndicator } from "@/components/tailwind-indicator";
import { siteConfig } from "@/lib/config";
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import type React from "react";
// CSS
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const defaultUrl = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "http://localhost:3000";

export const metadata: Metadata = {
    title: siteConfig.metadata.title,
    description: siteConfig.metadata.description,
    metadataBase: new URL(defaultUrl),
    creator: "Ryan Ozawa",
};
export const viewport: Viewport = {
    themeColor: [
        { media: "(prefers-color-scheme: light)", color: "white" },
        { media: "(prefers-color-scheme: dark)", color: "black" },
    ],
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={inter.className}>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                >
                    <Header className="h-12 leading-[3rem]" />
                    {children}
                    <TailwindIndicator />
                </ThemeProvider>
            </body>
        </html>
    );
}
