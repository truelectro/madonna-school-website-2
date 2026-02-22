import type { Metadata, Viewport } from "next";
import "./globals.css";
import { LayoutWrapper } from "@/components/layout/LayoutWrapper";

export const metadata: Metadata = {
    title: "Madonna School | Excellence in Education",
    description: "A premium educational institution dedicated to nurturing future leaders.",
};

export const viewport: Viewport = {
    themeColor: "#051324",
    width: "device-width",
    initialScale: 1,
};


export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="scroll-smooth" suppressHydrationWarning>
            <body className="font-sans antialiased text-foreground bg-background" suppressHydrationWarning>
                <LayoutWrapper>
                    {children}
                </LayoutWrapper>
            </body>
        </html>
    );
}
