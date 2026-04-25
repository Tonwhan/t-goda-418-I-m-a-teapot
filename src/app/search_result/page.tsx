'use client';

import React from 'react';
import { ChevronRight } from 'lucide-react';
import { SearchHeaderBar } from '@/components/search-results/search-header-bar';
import { SearchSidebar } from '@/components/search-results/search-sidebar';
import { FlashDealsSection } from '@/components/search-results/flash-deals-section';
import { HotelResultsList } from '@/components/search-results/hotel-results-list';

export default function SearchResultPage() {
    return (
        <div className="bg-[#F5F7F9] font-sans antialiased text-gray-900">
            <SearchHeaderBar />
            <div className="max-w-[1280px] mx-auto px-6 py-8 flex gap-8">
                <SearchSidebar />
                <main className="flex-1">
                    <div className="flex items-center justify-between mb-6">
                        <h1 className="text-2xl text-gray-800">
                            245 properties in Bali
                        </h1>
                        <div className="flex items-center gap-3">
                            <span className="text-sm text-gray-500">Sort by:</span>
                            <div className="bg-white border border-gray-200 rounded-lg px-4 py-2 text-sm font-bold text-[#006CE4] flex items-center gap-4 cursor-pointer hover:border-blue-300">
                                Recommended
                                <ChevronRight className="w-4 h-4 rotate-90" />
                            </div>
                        </div>
                    </div>

                    <FlashDealsSection />
                    <HotelResultsList />
                </main>
            </div>
        </div>
    );
}
