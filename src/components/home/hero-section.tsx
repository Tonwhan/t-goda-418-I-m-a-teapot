import Image from "next/image";
import { SearchBox } from "@/components/home/search-box";

export function HeroSection() {
    return (
        <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-4 md:mt-8">
            <div className="relative rounded-3xl overflow-hidden min-h-[500px] flex flex-col items-center justify-center p-6 text-center">
                {/* Background Image */}
                <div className="absolute inset-0 -z-10">
                    <Image
                        src="/comp-image/1.png"
                        alt="Tropical Paradise"
                        fill
                        className="object-cover"
                        priority
                    />
                    {/* Dark overlay for better text readability */}
                </div>

                <div className="max-w-3xl space-y-6 mt-8">
                    <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight drop-shadow-md">
                        Escape to Your Perfect Paradise
                    </h1>
                    <p className="text-lg md:text-xl text-white/90 drop-shadow">
                        Unlock exclusive prices on over 2 million properties and flights
                        across the globe.
                    </p>
                </div>

                {/* Search Box */}
                <SearchBox />
            </div>
        </section>
    );
}
