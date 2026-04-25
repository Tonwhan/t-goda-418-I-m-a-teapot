import React from 'react';
import Image from 'next/image';

export function RoomGallery() {
    return (
        <div className="px-6 flex flex-col gap-6">
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
                        alt="Balcony View"
                        fill
                        className="object-cover w-full h-full hover:scale-105 transition-transform duration-500"
                    />
                </div>

                {/* Small Image 2 (Bedroom) */}
                <div className="relative rounded-xl overflow-hidden group">
                    <Image
                        src="/room_detaills/right_top.png"
                        alt="Bedroom"
                        fill
                        className="object-cover w-full h-full hover:scale-105 transition-transform duration-500"
                    />
                </div>

                {/* Small Image 3 (Restaurant) */}
                <div className="relative rounded-xl overflow-hidden group">
                    <Image
                        src="/room_detaills/middle_bottom.png"
                        alt="Fine Dining"
                        fill
                        className="object-cover w-full h-full hover:scale-105 transition-transform duration-500"
                    />
                </div>

                {/* Small Image 4 (Spa/More with Overlay) */}
                <div className="relative rounded-xl overflow-hidden group cursor-pointer">
                    <Image
                        src="/room_detaills/right_bottom.png"
                        alt="Spa"
                        fill
                        className="object-cover w-full h-full hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                        <span className="text-white font-black text-base">+124 photos</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
