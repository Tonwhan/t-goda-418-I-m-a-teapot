import React from 'react';
import { Section, ReviewCard } from '@/components/shared/ui-components';

export function GuestReviews() {
    return (
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
                    text="Absolutely phenomenal stay! The infinity pool looking over the Mediterranean is something out of a dream. The staff couldn't have been more accommodating."
                    author="Sarah Jenkins"
                    location="London, UK"
                />
                <ReviewCard
                    rating={4}
                    text="The spa facilities are world-class. My husband and I enjoyed the couples massage. The only minor issue was that dinner reservations fill up very quickly."
                    author="Marcus Thorne"
                    location="Sydney, Australia"
                />
                <ReviewCard
                    rating={5}
                    text="A true 5-star experience. From the complimentary airport transfer to the welcome drinks and pristine room cleanliness. We will absolutely be returning next summer."
                    author="Elena Rossi"
                    location="Milan, Italy"
                />
            </div>
        </Section>
    );
}
