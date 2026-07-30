import type { Metadata, Viewport } from "next";
import { draftMode } from "next/headers";
import "./globals.css";
import { LayoutWrapper } from "@/components/layout/LayoutWrapper";
import VisualEditing from "@/components/admin/VisualEditing";

export const metadata: Metadata = {
    title: "Madonna School | Excellence in Education",
    description: "A premium educational institution dedicated to nurturing future leaders.",
};

export const viewport: Viewport = {
    themeColor: [
        { media: "(prefers-color-scheme: light)", color: "#051324" },
        { media: "(prefers-color-scheme: dark)", color: "#051324" },
    ],
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
};

export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const draft = await draftMode();

    return (
        <html lang="en" className="scroll-smooth" suppressHydrationWarning>
            <head>
                <meta name="apple-mobile-web-app-capable" content="yes" />
                <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
            </head>
            <body className="font-sans antialiased text-foreground bg-background" suppressHydrationWarning>
                <LayoutWrapper>
                    {children}
                </LayoutWrapper>
                {draft.isEnabled && <VisualEditing />}
            </body>
        </html>
    );
}
