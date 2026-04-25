import React from "react";
import {MainNavbar} from "@/components/layout/main-navbar";
import {MainFooter} from "@/components/layout/main-footer";

interface SearchResultLayoutProps {
    children: React.ReactNode;
}

export default function SearchResultLayout({children}: SearchResultLayoutProps) {
    return (
        <div className="flex flex-col min-h-screen">
            <MainNavbar/>
            <main className="flex-grow">
                {children}
            </main>
            <MainFooter/>
        </div>
    )
}
