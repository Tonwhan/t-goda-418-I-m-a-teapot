import React from "react";
import {MainNavbar} from "@/components/layout/main-navbar";
interface AuthLayoutProps {
    children: React.ReactNode;
}

export default function AuthLayout({children}: AuthLayoutProps) {
    return (
        <div className="flex flex-col items-center justify-center w-full">
            <main className="flex w-full flex-col items-center justify-between">
                {children}
            </main>
        </div>
    )
}