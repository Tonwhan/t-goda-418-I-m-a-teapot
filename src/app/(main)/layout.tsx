import React from "react";
import {MainNavbar} from "@/components/layout/main-navbar";
interface MainLayoutProps {
    children: React.ReactNode;
}

export default function MainLayout({children}: MainLayoutProps) {
    return (
        <div className="flex flex-col items-center justify-center">
            <MainNavbar />
            <main className="flex  w-full max-w-4xl flex-col items-start justify-between py-4 px-6 ">
                {children}
            </main>
        </div>
    )
}