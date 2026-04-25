import Image from "next/image";
import {SearchBox} from "@/components/home/search-box";
import {Tag, Mail} from "lucide-react";

export default function Home() {
    return (
        <div className="w-full flex flex-col gap-16 md:gap-24 h-[3110px] overflow-hidden">
            {/* Hero Section */}
            <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-4 md:mt-8">
                <div
                    className="relative rounded-3xl overflow-hidden min-h-[500px] flex flex-col items-center justify-center p-6 text-center">
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
                    <SearchBox/>
                </div>
            </section>

            {/* Features Section */}
            <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div
                        className="w-full bg-[#E9E9E9] p-6 rounded-[12px] flex flex-col items-center text-center gap-3">
                        <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center ">
                            <Tag className="w-6 h-6"/>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">
                                Best Price Guarantee
                            </h3>
                            <p className="text-gray-500 text-sm">
                                Find a lower price? We'll match it and give you a voucher for
                                your next trip.
                            </p>
                        </div>
                    </div>

                    <div
                        className="w-full bg-[#E9E9E9] p-6 rounded-[12px] flex flex-col items-center text-center gap-3">
                        <div className="w-14 h-14 bg-pink-100 rounded-full flex items-center justify-center">
                            <Image
                                src="main-vectors/support.svg"
                                width={24}
                                height={24}
                                alt="Headphones"
                            />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">
                                24/7 Global Support
                            </h3>
                            <p className="text-gray-500 text-sm">
                                Our world-class support team is here to help you anywhere,
                                anytime in 40+ languages.
                            </p>
                        </div>
                    </div>

                    <div
                        className="w-full bg-[#E9E9E9] p-6 rounded-[12px] flex flex-col items-center text-center gap-3">
                        <div className="w-14 h-14 bg-orange-100 rounded-full flex items-center justify-center ">
                            <Image
                                src="main-vectors/calendar.svg"
                                width={24}
                                height={24}
                                alt="Headphones"
                            />{" "}
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">
                                Flexible Booking
                            </h3>
                            <p className="text-gray-500 text-sm">
                                Life happens. Most of our properties offer free cancellation for
                                peace of mind.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Trending Destinations */}
            <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
                    <div>
                        <h2 className="text-3xl font-bold text-gray-900 mb-2">
                            Trending Destinations
                        </h2>
                        <p className="text-gray-500">
                            Handpicked favorites for your next adventure
                        </p>
                    </div>
                    <p className="text-blue-600 font-semibold hover:text-blue-700">
                        View all
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {/* Destination 1 */}
                    <div className="group cursor-pointer w-[282px] mx-auto">
                        <div className="relative w-[282px] h-[376px] rounded-[16px] overflow-hidden mb-4">
                            <Image
                                src="/comp-image/2.png"
                                alt="Bangkok"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900">
                            Bangkok, Thailand
                        </h3>
                        <p className="text-gray-500 text-sm mt-1">
                            Starting from{" "}
                            <span className="text-blue-600 font-bold">$120</span>
                        </p>
                    </div>

                    {/* Destination 2 */}
                    <div className="group cursor-pointer w-[282px] mx-auto">
                        <div className="relative w-[282px] h-[376px] rounded-[16px] overflow-hidden mb-4">
                            <Image
                                src="/comp-image/00.png"
                                alt="Tokyo"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900">Tokyo, Japan</h3>
                        <p className="text-gray-500 text-sm mt-1">
                            Starting from{" "}
                            <span className="text-blue-600 font-bold">$240</span>
                        </p>
                    </div>

                    {/* Destination 3 */}
                    <div className="group cursor-pointer w-[282px] mx-auto">
                        <div className="relative w-[282px] h-[376px] rounded-[16px] overflow-hidden mb-4">
                            <Image
                                src="/comp-image/3.png"
                                alt="Paris"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900">Paris, France</h3>
                        <p className="text-gray-500 text-sm mt-1">
                            Starting from{" "}
                            <span className="text-blue-600 font-bold">$180</span>
                        </p>
                    </div>

                    {/* Destination 4 */}
                    <div className="group cursor-pointer w-[282px] mx-auto">
                        <div className="relative w-[282px] h-[376px] rounded-[16px] overflow-hidden mb-4">
                            <Image
                                src="/comp-image/4.png"
                                alt="London"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900">London, UK</h3>
                        <p className="text-gray-500 text-sm mt-1">
                            Starting from{" "}
                            <span className="text-blue-600 font-bold">$210</span>
                        </p>
                    </div>
                </div>
            </section>

            {/* Promo Banner */}
            <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
                <div
                    className="bg-[#b91c49] rounded-[24px] overflow-hidden relative flex flex-col md:flex-row items-center">
                    {/* Background Tag Icon */}
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
                            Summer Sales: Up to <br className="hidden md:block"/> 40% Off!
                        </h2>
                        <p className="text-white/90  text-[15px] leading-relaxed mb-4">
                            Exclusive member deals on flights and luxury hotels for your next
                            summer getaway. Valid until Oct 31st.
                        </p>
                        <div className="flex flex-wrap gap-4 pt-2">
                            <button
                                className="bg-white text-[#b91c49] font-bold py-3 px-6 rounded-[8px] hover:bg-gray-50 transition-colors shadow-sm">
                                Explore Deals
                            </button>
                            <button
                                className="bg-transparent border-[1.5px] border-white text-white font-bold py-3 px-6 rounded-[8px] hover:bg-white/10 transition-colors">
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
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Newsletter */}
            <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div
                    className="bg-[#E7E8F1] rounded-3xl p-8 md:p-16 flex flex-col items-center text-center relative overflow-hidden">
                    <Mail className="w-12 h-12 text-[#005CBD] mb-6" strokeWidth={2}/>

                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 tracking-tight">
                        Get Travel Deals Directly
                    </h2>
                    <p className="text-gray-500 max-w-2xl mb-8 text-base md:text-lg">
                        Subscribe to our newsletter and get early access to hidden gems and
                        seasonal discounts. No spam, only adventure.
                    </p>

                    <div className="w-full max-w-2xl flex flex-col md:flex-row items-stretch justify-center gap-4">
                        <input
                            type="email"
                            placeholder="Your email address"
                            className="flex-1 w-full bg-white border border-[#A5B4FC] outline-none px-6 py-4 rounded-[12px] text-gray-700 placeholder-gray-400 focus:border-[#005CBD] focus:ring-1 focus:ring-[#005CBD]"
                        />
                        <button
                            className="w-full md:w-auto bg-[#005CBD] hover:bg-[#004a99] text-white font-bold py-4 px-8 rounded-[12px] whitespace-nowrap">
                            Subscribe Now
                        </button>
                    </div>

                    <p className="text-[13px] text-gray-500 mt-6">
                        By subscribing, you agree to our Terms of Service and Privacy
                        Policy.
                    </p>
                </div>
            </section>

            {/* Footer */}
            <footer className="w-full bg-[#F8FAFC] py-16 mt-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row justify-between gap-16">
                        {/* Left Column */}
                        <div className="max-w-md flex flex-col gap-6">
                            <div>
                                <h2 className="text-[20px] font-bold text-[#111827] mb-4">
                                    T-Goda
                                </h2>
                                <p className="text-[#6B7280] text-[14px] leading-relaxed">
                                    Making world travel accessible, affordable, and delightful for
                                    everyone since 2024. Your journey starts here.
                                </p>
                            </div>
                            <p className="text-[#6B7280] text-[14px]">
                                © 2024 T-Goda Booking. All rights reserved.
                            </p>
                            <div className="flex gap-4">
                                <Image
                                    src="/main-vectors/facebook.svg"
                                    width={20}
                                    height={20}
                                    alt="Facebook"
                                />
                                <Image
                                    src="/main-vectors/ig.svg"
                                    width={20}
                                    height={20}
                                    alt="Instagram"
                                />
                                <Image
                                    src="/main-vectors/twitter.svg"
                                    width={20}
                                    height={20}
                                    alt="Twitter"
                                />

                            </div>
                        </div>

                        {/* Right Columns */}
                        <div className="flex flex-wrap md:flex-nowrap gap-16 md:gap-24">
                            <div>
                                <h4 className="font-bold text-[#111827] mb-6 text-[14px]">
                                    Company
                                </h4>
                                <ul className="space-y-4 text-[14px] text-[#6B7280]">
                                    <li>
                                        <p
                                        >
                                            About Us
                                        </p>
                                    </li>
                                    <li>
                                        <p>
                                            Careers
                                        </p>
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <h4 className="font-bold text-[#111827] mb-6 text-[14px]">
                                    Support
                                </h4>
                                <ul className="space-y-4 text-[14px] text-[#6B7280]">
                                    <li>
                                        <p>
                                            Support
                                        </p>
                                    </li>
                                    <li>
                                        <p>
                                            Mobile App
                                        </p>
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <h4 className="font-bold text-[#111827] mb-6 text-[14px]">
                                    Legal
                                </h4>
                                <ul className="space-y-4 text-[14px] text-[#6B7280]">
                                    <li>
                                        <p
                                        >
                                            Privacy Policy
                                        </p>
                                    </li>
                                    <li>
                                        <p
                                        >
                                            Terms of Service
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}
