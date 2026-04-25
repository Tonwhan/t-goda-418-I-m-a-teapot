import Image from "next/image";

export function PromoBanner() {
    return (
        <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
            <div className="bg-[#b91c49] rounded-[24px] overflow-hidden relative flex flex-col md:flex-row items-center">
                <div className="absolute top-1/2 left-[45%] transform -translate-y-[240px] pointer-events-none z-0">
                    <Image
                        src="/main-vectors/tag.svg"
                        alt="Promo Tag"
                        width={249.69}
                        height={250}
                        className="object-contain opacity-[20%]"
                        priority
                    />
                </div>

                <div className="py-12 px-8 md:px-16 flex-1 text-white z-10 space-y-4">
                    <h2 className="text-4xl md:text-[42px] font-bold leading-[1.1] tracking-tight">
                        Summer Sales: Up to <br className="hidden md:block" /> 40% Off!
                    </h2>
                    <p className="text-white/90  text-[15px] leading-relaxed mb-4">
                        Exclusive member deals on flights and luxury hotels for your next
                        summer getaway. Valid until Oct 31st.
                    </p>
                    <div className="flex flex-wrap gap-4 pt-2">
                        <button className="bg-white text-[#b91c49] font-bold py-3 px-6 rounded-[8px] hover:bg-gray-50 transition-colors shadow-sm">
                            Explore Deals
                        </button>
                        <button className="bg-transparent border-[1.5px] border-white text-white font-bold py-3 px-6 rounded-[8px] hover:bg-white/10 transition-colors">
                            Join Club T-Goda
                        </button>
                    </div>
                </div>

                <div className="hidden md:flex flex-1 relative items-center justify-end pr-8 md:pr-16 z-10 py-10">
                    <div className="relative overflow-hidden rounded-[16px]">
                        <Image
                            src="/comp-image/5.png"
                            alt="Promo Destination"
                            width={400}
                            height={400}
                            className="object-cover w-[360px] h-[360px] lg:w-[400px] lg:h-[400px]"
                            priority
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
