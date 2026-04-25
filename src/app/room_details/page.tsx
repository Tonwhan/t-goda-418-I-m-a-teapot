'use client';

import React from 'react';
import {
    MapPin,
    Star,
    Share2,
    Heart,
    Waves,
    Sparkles,
    Wifi,
    Utensils,
    Car,
    Check,
    ChevronRight,
    Info,
    Clock,
    User,
    MoreHorizontal
} from 'lucide-react';
import { cn } from '@/lib/utils';
import Image from 'next/image';

// --- Shared Components ---

const RatingStars = ({ count, size = "w-3 h-3" }: { count: number; size?: string }) => (
    <div className="flex gap-0.5">
        {[...Array(5)].map((_, i) => (
            <Star
                key={i}
                className={cn(size, i < count ? "fill-[#FFB700] text-[#FFB700]" : "text-gray-200")}
            />
        ))}
    </div>
);

const Section = ({ title, children, className }: { title?: string; children: React.ReactNode; className?: string }) => (
    <section className={cn("py-8", className)}>
        {title && <h2 className="text-base font-black text-gray-900 mb-6 tracking-tight">{title}</h2>}
        {children}
    </section>
);

// --- Sub-components ---

const AmenityItem = ({ icon: Icon, label }: { icon: any; label: string }) => (
    <div className="flex items-center gap-3 text-gray-700">
        <div className="text-[#006CE4]">
            <Icon className="w-5 h-5" />
        </div>
        <span className="text-base font-medium">{label}</span>
    </div>
);

const ReviewCard = ({ rating, text, author, location }: any) => (
    <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col justify-between h-full hover:shadow-md transition-shadow">
        <div>
            <div className="flex justify-between items-center mb-4">
                <RatingStars count={rating} size="w-4 h-4" />
                <span className="text-base text-gray-400 font-medium">Oct 12, 2024</span>
            </div>
            <p className="text-gray-700 text-base leading-relaxed mb-6 italic">"{text}"</p>
        </div>
        <div className="flex items-center gap-3 pt-4 border-t border-gray-50">
            <div className="w-10 h-10 bg-gray-200 rounded-full animate-pulse" />
            <div>
                <h4 className="text-base font-black text-gray-900 leading-none mb-1">{author}</h4>
                <p className="text-base text-gray-400 font-medium">{location}</p>
            </div>
        </div>
    </div>
);

// --- Main Page ---

export default function RoomDetailsPage() {
    return (
        <div className="min-h-screen bg-white font-sans antialiased text-gray-900">
            <div className="max-w-[1280px] mx-auto pt-[96px] pb-[64px] flex flex-col gap-6">
                <div className="px-6 flex flex-col gap-6">
                    {/* Breadcrumbs */}
                    <nav className="flex items-center gap-2 text-base font-normal text-neutral-500 leading-6">
                        <span>Home</span>
                        <ChevronRight className="w-4 h-4 text-neutral-400" />
                        <span>Greece</span>
                        <ChevronRight className="w-4 h-4 text-neutral-400" />
                        <span>Crete Hotels</span>
                        <ChevronRight className="w-4 h-4 text-neutral-400" />
                        <span className="text-black font-semibold">Grand Azure Resort & Spa</span>
                    </nav>

                    {/* 1. Page Header & Info (92px Height Row) */}
                    <div className="h-[92px] flex items-end justify-between border-b border-gray-100 pb-4">
                        <div className="flex flex-col justify-between h-full">
                            {/* Stars & Badge */}
                            <div className="flex items-center gap-2">
                                <RatingStars count={5} size="w-4 h-4" />
                                <span className="bg-[#005CBD] text-white text-base font-normal w-[80px] h-[28px] flex items-center justify-center rounded-[4px] leading-6">Resort</span>
                            </div>

                            {/* Title */}
                            <h1 className="text-base font-normal text-black leading-6">Grand Azure Resort & Spa, Elounda</h1>

                            {/* Location */}
                            <div className="flex items-center gap-2 text-base leading-none">
                                <MapPin className="w-4 h-4 text-[#006CE4] opacity-70" />
                                <span className="text-neutral-500 font-medium">Elounda Bay, Crete, 72053, Greece</span>
                                <button className="text-[#006CE4] font-bold hover:underline ml-1">Show on map</button>
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex items-center gap-3">
                            <button className="flex items-center gap-2 px-4 py-2.5 rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50 transition-all font-medium text-base">
                                <Share2 className="w-4 h-4" />
                                Share
                            </button>
                            <button className="flex items-center gap-2 px-4 py-2.5 rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50 transition-all font-medium text-base">
                                <Heart className="w-4 h-4" />
                                Save
                            </button>
                            <button className="bg-[#A31D44] text-white px-8 py-2.5 rounded-lg font-bold text-base hover:bg-[#8e193b] transition-all transform active:scale-95 shadow-md shadow-red-50">
                                Book Now
                            </button>
                        </div>
                    </div>
                </div>

                    {/* 2. Photo Gallery (1232px Content Width) */}
                    <div className="grid grid-cols-4 grid-rows-2 gap-4 h-[508px]">
                        {/* Big Image (Pool & Sea) */}
                        <div className="col-span-2 row-span-2 relative rounded-xl overflow-hidden group">
                        <Image
                            src="/room_detaills/left.png"
                            alt="Infinity Pool"
                            fill
                            className="object-cover w-full h-full hover:scale-105 transition-transform duration-500"
                        />
                    </div>

                    {/* Small Image 1 (Balcony Sunset) */}
                    <div className="relative rounded-xl overflow-hidden group">
                        <Image
                            src="/room_detaills/middle_top.png"
                            alt="Balcony Sunset"
                            fill
                            className="object-cover w-full h-full hover:scale-105 transition-transform duration-500"
                        />
                    </div>

                    {/* Small Image 2 (Large Pool) */}
                    <div className="relative rounded-xl overflow-hidden group">
                        <Image
                            src="/room_detaills/right_top.png"
                            alt="Large Pool Aerial"
                            fill
                            className="object-cover w-full h-full hover:scale-105 transition-transform duration-500"
                        />
                    </div>

                    {/* Small Image 3 (Patio Lounge) */}
                    <div className="relative rounded-xl overflow-hidden group">
                        <Image
                            src="/room_detaills/middle_bottom.png"
                            alt="Patio Lounge"
                            fill
                            className="object-cover w-full h-full hover:scale-105 transition-transform duration-500"
                        />
                    </div>

                    {/* Small Image 4 (Indoor Spa Pool + Overlay) */}
                    <div className="relative rounded-xl overflow-hidden group cursor-pointer">
                        <Image
                            src="/room_detaills/right_bottom.png"
                            alt="Indoor Spa Pool"
                            fill
                            className="object-cover w-full h-full hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                            <span className="text-white font-black text-base">+124 photos</span>
                        </div>
                    </div>
                </div>

                <div className="px-6">

                    {/* 3. Overview & Reviews Sidebar */}
                    <div className="grid grid-cols-12 gap-12 items-start">
                        {/* Left Column: Overview */}
                        <div className="col-span-8">
                            <Section title="Overview">
                                <p className="text-gray-600 leading-relaxed mb-8 text-base">
                                    Experience unparalleled luxury at the Grand Azure Resort & Spa, nestled on the pristine shores of Elounda
                                    Bay. This architectural masterpiece blends traditional Cretan charm with ultra-modern design, offering
                                    guests breathtaking panoramic views of the Mediterranean. Whether you're seeking a romantic getaway or
                                    a rejuvenation retreat, our world-class amenities and personalized service ensure a stay that transcends the
                                    ordinary.
                                </p>

                                <h3 className="text-lg font-black text-gray-900 mb-6 flex items-center gap-2">
                                    <Sparkles className="w-5 h-5 text-[#006CE4]" />
                                    Popular Amenities
                                </h3>
                                <div className="grid grid-cols-3 gap-y-6 gap-x-4 mb-6">
                                    <AmenityItem icon={Waves} label="3 Outdoor Pools" />
                                    <AmenityItem icon={Sparkles} label="Full-service Spa" />
                                    <AmenityItem icon={Wifi} label="Free Premium Wi-Fi" />
                                    <AmenityItem icon={Utensils} label="5 Fine-dining Restaurants" />
                                    <AmenityItem icon={Car} label="Free Airport Transfer" />
                                    <AmenityItem icon={Clock} label="24-hour Concierge" />
                                </div>
                                <button className="text-[#006CE4] font-bold text-base hover:underline flex items-center gap-1">
                                    See all amenities <ChevronRight className="w-4 h-4" />
                                </button>
                            </Section>

                            {/* 4. Map & Neighborhood */}
                            <Section title="Location" className="border-t border-gray-100">
                                <div className="grid grid-cols-2 gap-8 items-center">
                                    <div className="relative rounded-2xl overflow-hidden border border-gray-200 h-64 bg-[#E8F1F8] group">
                                        <div className="w-full h-full bg-gray-200 animate-pulse" />
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <div className="w-12 h-12 bg-[#006CE4] rounded-full border-4 border-white shadow-xl animate-bounce flex items-center justify-center text-white">
                                                <MapPin className="w-6 h-6" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="space-y-6">
                                        <div className="flex items-start gap-4">
                                            <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center flex-shrink-0">
                                                <Sparkles className="w-5 h-5 text-[#006CE4]" />
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-gray-900 mb-1">Near Spinalonga Island</h4>
                                                <p className="text-base text-gray-500">A short boat ride to the historic Venetian fortress and UNESCO world heritage site.</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-4">
                                            <div className="w-10 h-10 rounded-xl bg-green-50 flex items-center justify-center flex-shrink-0">
                                                <Clock className="w-5 h-5 text-green-600" />
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-gray-900 mb-1">15 min walk to city center</h4>
                                                <p className="text-base text-gray-500">Explore local tavernas and boutique shops in the heart of Elounda village.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Section>
                        </div>

                        {/* Right Column: Reviews Sidebar */}
                        <div className="col-span-4 top-32">
                            <div className="bg-[#F5F7F9] rounded-2xl p-8 border border-gray-100">
                                <div className="flex items-center justify-between mb-8">
                                    <div>
                                        <h3 className="text-base font-black text-gray-900 leading-none mb-1">Excellent</h3>
                                        <p className="text-base text-gray-500 font-medium">1,248 verified reviews</p>
                                    </div>
                                    <div className="bg-[#003580] text-white w-14 h-14 rounded-2xl flex items-center justify-center text-base font-black shadow-lg shadow-blue-100">
                                        9.2
                                    </div>
                                </div>

                                <div className="space-y-6">
                                    {[
                                        { label: "Cleanliness", score: 9.5 },
                                        { label: "Service", score: 9.3 },
                                        { label: "Location", score: 9.0 }
                                    ].map((stat, i) => (
                                        <div key={i}>
                                            <div className="flex justify-between text-base font-bold text-gray-700 mb-2">
                                                <span>{stat.label}</span>
                                                <span>{stat.score}</span>
                                            </div>
                                            <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
                                                <div
                                                    className="h-full bg-[#006CE4] rounded-full"
                                                    style={{ width: `${stat.score * 10}%` }}
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <button className="w-full mt-8 bg-white border-2 border-[#006CE4] text-[#006CE4] py-3 rounded-lg font-black text-base uppercase tracking-widest hover:bg-blue-50 transition-colors">
                                    Read All Reviews
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* 5. Select Your Room */}
                    <Section title="Select Your Room" className="mt-12 border-t border-gray-100 pt-16">
                        <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
                            <table className="w-full border-collapse">
                                <thead>
                                    <tr className="bg-[#F5F7F9] border-b border-gray-200">
                                        <th className="px-6 py-4 text-left text-base font-black text-gray-400 uppercase tracking-widest">Room Type</th>
                                        <th className="px-6 py-4 text-center text-base font-black text-gray-400 uppercase tracking-widest">Sleeps</th>
                                        <th className="px-6 py-4 text-right text-base font-black text-gray-400 uppercase tracking-widest">Today's Price</th>
                                        <th className="px-6 py-4 text-center text-base font-black text-gray-400 uppercase tracking-widest">Options</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100">
                                    {/* Row 1 */}
                                    <tr className="hover:bg-gray-50 transition-colors">
                                        <td className="px-6 py-8">
                                            <div className="flex flex-col gap-2">
                                                <span className="bg-[#5C161F] text-white text-base font-black px-2 py-0.5 rounded-sm w-fit uppercase tracking-tighter">Limited Time Offer</span>
                                                <h4 className="text-base font-black text-gray-900">Presidential Sea Front Suite</h4>
                                                <p className="text-base text-gray-500 font-medium">1 King Bed • 110 m² • Sea view</p>
                                                <div className="flex items-center gap-2 mt-2">
                                                    <Check className="w-4 h-4 text-green-600" strokeWidth={3} />
                                                    <span className="text-base text-green-600 font-black">Free Airport Transfer</span>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-8">
                                            <div className="flex justify-center gap-1 text-gray-400">
                                                <User className="w-4 h-4 fill-gray-400" />
                                                <User className="w-4 h-4 fill-gray-400" />
                                                <User className="w-4 h-4 fill-gray-400" />
                                                <User className="w-4 h-4 fill-gray-400" />
                                            </div>
                                        </td>
                                        <td className="px-6 py-8 text-right">
                                            <div className="flex flex-col items-end">
                                                <span className="text-base text-gray-400 line-through font-medium">$1,295</span>
                                                <span className="text-base font-black text-[#E41D57] leading-none mb-1">$862</span>
                                                <span className="text-base text-gray-400 font-bold uppercase tracking-widest">Including taxes</span>
                                            </div>
                                        </td>
                                        <td className="px-6 py-8 text-center">
                                            <button className="bg-[#006CE4] text-white px-8 py-2.5 rounded-lg font-black text-base uppercase tracking-widest shadow-lg shadow-blue-100 hover:bg-[#005bb8] transition-all transform active:scale-95">
                                                Select
                                            </button>
                                        </td>
                                    </tr>

                                    {/* Row 2 */}
                                    <tr className="hover:bg-gray-50 transition-colors">
                                        <td className="px-6 py-8">
                                            <div className="flex flex-col gap-1">
                                                <h4 className="text-base font-black text-gray-900">Deluxe Garden View Room</h4>
                                                <p className="text-base text-gray-500 font-medium">1 Queen Bed • 45 m² • Garden view</p>
                                                <div className="flex items-center gap-2 mt-2">
                                                    <Check className="w-4 h-4 text-green-600" strokeWidth={3} />
                                                    <span className="text-base text-green-600 font-black">Breakfast Included</span>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-8">
                                            <div className="flex justify-center gap-1 text-gray-400">
                                                <User className="w-4 h-4 fill-gray-400" />
                                                <User className="w-4 h-4 fill-gray-400" />
                                            </div>
                                        </td>
                                        <td className="px-6 py-8 text-right">
                                            <div className="flex flex-col items-end">
                                                <span className="text-base text-gray-400 line-through font-medium">$345</span>
                                                <span className="text-base font-black text-gray-900 leading-none mb-1">$264</span>
                                            </div>
                                        </td>
                                        <td className="px-6 py-8 text-center">
                                            <button className="bg-[#006CE4] text-white px-8 py-2.5 rounded-lg font-black text-base uppercase tracking-widest shadow-lg shadow-blue-100 hover:bg-[#005bb8] transition-all transform active:scale-95">
                                                Select
                                            </button>
                                        </td>
                                    </tr>

                                    {/* Row 3 */}
                                    <tr className="hover:bg-gray-50 transition-colors">
                                        <td className="px-6 py-8">
                                            <div className="flex flex-col gap-1">
                                                <h4 className="text-base font-black text-gray-900">Junior Suite with Private Pool</h4>
                                                <p className="text-base text-gray-500 font-medium">1 King Bed • 65 m² • Private pool</p>
                                            </div>
                                        </td>
                                        <td className="px-6 py-8">
                                            <div className="flex justify-center gap-1 text-gray-400">
                                                <User className="w-4 h-4 fill-gray-400" />
                                                <User className="w-4 h-4 fill-gray-400" />
                                                <User className="w-4 h-4 fill-gray-400" />
                                                <div className="w-3 h-3 bg-gray-200 rounded-full self-center" />
                                            </div>
                                        </td>
                                        <td className="px-6 py-8 text-right">
                                            <div className="flex flex-col items-end">
                                                <span className="text-base text-gray-400 line-through font-medium">$676</span>
                                                <span className="text-base font-black text-gray-900 leading-none mb-1">$445</span>
                                            </div>
                                        </td>
                                        <td className="px-6 py-8 text-center">
                                            <button className="bg-[#006CE4] text-white px-8 py-2.5 rounded-lg font-black text-base uppercase tracking-widest shadow-lg shadow-blue-100 hover:bg-[#005bb8] transition-all transform active:scale-95">
                                                Select
                                            </button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </Section>

                    {/* 6. Guest Reviews */}
                    <Section title="Guest Reviews" className="mt-8 border-t border-gray-100 pt-16">
                        <div className="flex justify-between items-center mb-8">
                            <div className="flex items-center gap-4">
                                <span className="bg-[#003580] text-white px-3 py-1 rounded-lg font-black text-base">9.2</span>
                                <span className="text-gray-900 font-black tracking-tight text-base">Superb (1,248 reviews)</span>
                            </div>
                            <button className="text-[#006CE4] font-bold text-base hover:underline">Read all 1,248 reviews</button>
                        </div>

                        <div className="grid grid-cols-3 gap-8">
                            <ReviewCard
                                rating={5}
                                text="The most incredible stay! The service was impeccable and the views of Spinalonga are breathtaking. Truly a world-class experience."
                                author="James Wilson"
                                location="London, UK"
                            />
                            <ReviewCard
                                rating={5}
                                text="The infinity pool is simply divine. We loved the private transfer service and the restaurants were all exceptional."
                                author="Elena Rossi"
                                location="Milan, Italy"
                            />
                            <ReviewCard
                                rating={4}
                                text="A perfect family getaway. The kids loved the pools and we appreciated the peace and quiet of our private villa area."
                                author="David Chen"
                                location="Singapore"
                            />
                        </div>
                    </Section>
                </div>
            </div>
        </div>
    );
}
