import React from "react";
import {MainNavbar} from "@/components/layout/main-navbar";
import {MainFooter} from "@/components/layout/main-footer";

interface RoomDetailsLayoutProps {
    children: React.ReactNode;
}

export default function RoomDetailsLayout({children}: RoomDetailsLayoutProps) {
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
