"use client";
import {Show, SignInButton, SignUpButton, UserButton} from "@clerk/nextjs";
import {useRouter, usePathname} from "next/navigation";

const navbarItems = [
    {label: "Hotels", path: "/"},
    {label: "Flights", path: "/flights"},
    {label: "Bundles", path: "/bundles"},
    {label: "Activities", path: "/activities"},
];

export function MainNavbar() {
    const router = useRouter();
    const pathname = usePathname();

    const handleNavigation = (path: string) => {
        if (!path) return;
        router.push(path);
    };
    return (
        <div className="sticky top-0 z-50 w-full bg-white shadow-sm">
            <nav className="flex justify-center h-[64px] w-full">
                <div
                    className="w-full max-w-[1280px] h-[64px] flex items-center px-6 text-sm border-b border-b-foreground/10">
                    <div className="flex items-center gap-8 flex-1">
            <span
                className="font-black text-[24px] text-[#2563EB] cursor-pointer"
                onClick={() => handleNavigation("/")}
            >
              T-Goda
            </span>
                        <nav>
                            <ul className="flex gap-6 text-sm font-semibold items-center">
                                {navbarItems.map((item, index) => {
                                    const isActive = pathname === item.path;
                                    return (
                                        <li
                                            key={index}
                                            className={`cursor-default border-b-2 ${
                                                isActive
                                                    ? "text-[#2563EB] border-[#2563EB] py-[6px]"
                                                    : "text-foreground/70 border-transparent py-[6px]"
                                            }`}
                                        >
                                            {item.label}
                                        </li>
                                    );
                                })}
                            </ul>
                        </nav>
                    </div>
                    <header className="flex justify-end items-center gap-4 h-16">
                        <Show when="signed-out">
                            <SignInButton>
                                <button className="cursor-pointer text-sm font-semibold text-[#475569]">
                                    Sign In
                                </button>
                            </SignInButton>
                            <SignUpButton>
                                <button
                                    className="bg-[#005CBD] text-white rounded-[8px] font-semibold text-sm sm:text-sm cursor-pointer w-[138.58px] h-[36px] whitespace-nowrap flex items-center justify-center px-4 py-2">
                                    Create Account
                                </button>
                            </SignUpButton>
                        </Show>
                        <Show when="signed-in">
                            <UserButton/>
                        </Show>
                    </header>
                </div>
            </nav>
        </div>
    );
}
