'use client';

import React from 'react';
import { RoomHeader } from '@/components/room-details/room-header';
import { RoomGallery } from '@/components/room-details/room-gallery';
import { RoomOverview } from '@/components/room-details/room-overview';
import { RoomFacilities } from '@/components/room-details/room-facilities';
import { RoomNeighborhood } from '@/components/room-details/room-neighborhood';
import { RoomReviewSidebar } from '@/components/room-details/room-review-sidebar';
import { RoomAvailability } from '@/components/room-details/room-availability';
import { GuestReviews } from '@/components/room-details/guest-reviews';

export default function RoomDetailsPage() {
    return (
        <div className="bg-white font-sans antialiased text-gray-900">
            <div className="max-w-[1280px] mx-auto pt-[96px] pb-[64px] flex flex-col gap-6">
                <RoomHeader />
                <RoomGallery />
                <div className="px-6 grid grid-cols-12 gap-8 mt-4">
                    <div className="col-span-8">
                        <RoomOverview />
                        <RoomFacilities />
                        <RoomNeighborhood />
                    </div>
                    <div className="col-span-4">
                        <RoomReviewSidebar />
                    </div>
                </div>
                <div className="px-6">
                    <RoomAvailability />
                    <GuestReviews />
                </div>
            </div>
        </div>
    );
}
