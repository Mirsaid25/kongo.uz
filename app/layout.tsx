import type { Metadata } from "next";
import { Philosopher } from "next/font/google";
import "./globals.css";

const philosopher = Philosopher({
    weight: ["400", "700"],
    subsets: ["latin"],
    display: "swap",
});

export const metadata: Metadata = {
    title: "KONGO",
    description: "Online Books Store",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={`${philosopher.className} bg-[#F5F5F5]`}>{children}</body>
        </html>
    );
}
