import type {Metadata} from "next";
import {Geist, Geist_Mono, Plus_Jakarta_Sans} from "next/font/google";
import "./globals.css";
import {ClerkProvider} from "@clerk/nextjs";
import {MainNavbar} from "@/components/layout/main-navbar";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

const jakartaSans = Plus_Jakarta_Sans({
    subsets: ["latin"],
    variable: "--font-jakarta-sans",
});

export const metadata: Metadata = {
    title: "Web2046 : 418 I'm a teapot",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html
            lang="en"
            className={`${jakartaSans.className} h-full antialiased`}
        >
        <ClerkProvider>
            <body className="min-h-full flex flex-col">
            {children}
            </body>
        </ClerkProvider>
        </html>
    );
}
