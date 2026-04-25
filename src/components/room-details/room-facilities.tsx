import React from 'react';
import { Waves, Sparkles, Wifi, Utensils, Car, Clock, ChevronRight } from 'lucide-react';
import { Section, AmenityItem } from '@/components/shared/ui-components';

export function RoomFacilities() {
    return (
        <Section title="Top Facilities">
            <div className="grid grid-cols-3 gap-6 mb-8">
                <AmenityItem icon={Waves} label="Infinity Pool" />
                <AmenityItem icon={Sparkles} label="World-class Spa" />
                <AmenityItem icon={Wifi} label="Ultra-fast Wi-Fi" />
                <AmenityItem icon={Utensils} label="5 Fine Dining Restaurants" />
                <AmenityItem icon={Car} label="Free Airport Transfer" />
                <AmenityItem icon={Clock} label="24-hour Concierge" />
            </div>
            <button className="text-[#006CE4] font-bold text-base hover:underline flex items-center gap-1">
                See all amenities <ChevronRight className="w-4 h-4" />
            </button>
        </Section>
    );
}
