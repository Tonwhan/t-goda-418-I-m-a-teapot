import React from "react";
import Image from "next/image";

interface AuthLayoutProps {
    children: React.ReactNode;
}

export default function AuthLayout({ children }: AuthLayoutProps) {
    return (
        <div className="flex min-h-screen w-full overflow-hidden bg-white">
            {/* Left side: Image and Branding */}
            <div className="relative hidden w-1/2 flex-col justify-between bg-zinc-900 p-12 text-white lg:flex">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/auth-bg.png"
                        alt="Luxury Hotel"
                        fill
                        className="object-cover opacity-80"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                
                <div className="relative z-10 flex items-center gap-2">
                    <span className="font-black text-4xl tracking-tighter text-white">T-Goda</span>
                </div>

                <div className="relative z-10 mt-auto">
                    <blockquote className="space-y-4">
                        <p className="text-2xl font-medium leading-relaxed italic opacity-90">
                            "Travel makes one modest. You see what a tiny place you occupy in the world."
                        </p>
                        <footer className="text-lg font-semibold">— Elevate Your Journey</footer>
                    </blockquote>
                </div>
            </div>

            {/* Right side: Auth Form */}
            <div className="flex w-full flex-col items-center justify-center lg:w-1/2 relative">
                {/* Decorative element */}
                <div className="absolute top-0 right-0 p-8">
                     <span className="text-gray-300 text-sm font-medium tracking-widest uppercase">Member Portal</span>
                </div>

                <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[480px] p-8">
                    <div className="flex flex-col space-y-2 text-center mb-4">
                        <div className="lg:hidden flex items-center justify-center gap-2 mb-6">
                             <span className="font-black text-3xl tracking-tighter text-[#2563EB]">T-Goda</span>
                        </div>
                        <h1 className="text-3xl font-bold tracking-tight text-gray-900">Your Paradise Awaits</h1>
                        <p className="text-[15px] text-gray-500 max-w-sm mx-auto">
                            Sign in to access secret prices and manage your bookings effortlessly.
                        </p>
                    </div>
                    
                    <div className="w-full flex flex-col items-center justify-center">
                        {children}
                    </div>

                    <p className="px-8 text-center text-[13px] text-gray-400 leading-relaxed">
                        By continuing, you agree to T-Goda's{" "}
                        <a href="#" className="underline underline-offset-4 hover:text-blue-600 transition-colors">Terms of Service</a>{" "}
                        and{" "}
                        <a href="#" className="underline underline-offset-4 hover:text-blue-600 transition-colors">Privacy Policy</a>.
                    </p>
                </div>
            </div>
        </div>
    );
}