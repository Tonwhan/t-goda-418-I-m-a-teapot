'use client'
import {Show, SignInButton, SignUpButton, UserButton} from "@clerk/nextjs"

export function MainNavbar() {
    return (
        <nav className="flex justify-center border-b border-b-foreground/10 h-16.25 w-7xl px-6">
            <div className="w-full max-w-4xl flex justify-between items-center p-3 px-5 text-sm">
                <header className="flex justify-end items-center p-4 gap-4 h-16">
                    <Show when="signed-out">
                        <SignInButton/>
                        <SignUpButton>
                            <button
                                className="bg-[#005CBD] text-white rounded-[8px] font-medium text-sm sm:text-base h-9 sm:h-12 px-4 sm:px-5 py-8 sm:py-8 cursor-pointer w-[138.56px]">
                                Sign Up
                            </button>
                        </SignUpButton>
                    </Show>
                    <Show when="signed-in">
                        <UserButton/>
                    </Show>
                </header>
            </div>
        </nav>
    )
}