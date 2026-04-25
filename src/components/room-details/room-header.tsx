import React from 'react';
import { ChevronRight, MapPin, Share2, Heart } from 'lucide-react';
import Link from 'next/link';
import { RatingStars } from '@/components/shared/ui-components';

export function RoomHeader() {
    return (
        <div className="px-6 flex flex-col gap-6">
            {/* Breadcrumbs */}
            <nav className="flex items-center gap-2 text-base font-normal text-neutral-500 leading-6">
                <Link href="/" className="hover:text-[#006CE4] transition-colors">Home</Link>
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
    );
}
