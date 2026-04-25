import React from 'react';
import { Menu, Map as MapIcon, Star } from 'lucide-react';
import Image from 'next/image';
import { FilterSection, Checkbox } from '@/components/shared/ui-components';

export function SearchSidebar() {
    return (
        <aside className="w-72 flex-shrink-0 space-y-6">
          <div className="bg-white rounded-2xl border border-gray-200 p-7 shadow-sm">
            <div className="flex items-center mb-8">
              <h2 className="text-xl font-black flex items-center gap-3 text-gray-800">
                <Menu className="w-6 h-6 text-[#006CE4]" />
                Filters
              </h2>
            </div>

            <FilterSection title="Price Range" className="pt-0">
              <div className="space-y-3 pt-1">
                <div className="flex justify-between text-xs font-black text-gray-400 mb-1">
                  <span>$0</span>
                  <span>$1000+</span>
                </div>
                <div className="h-1.5 w-full bg-gray-100 rounded-full relative">
                </div>
              </div>
            </FilterSection>

            <FilterSection title="Property Type">
              <Checkbox label="Hotels" />
              <Checkbox label="Resorts" />
              <Checkbox label="Apartments" />
              <Checkbox label="Villas" />
            </FilterSection>

            <FilterSection title="Star Rating">
              <div className="space-y-3.5">
                <label className="flex items-center gap-3 group cursor-pointer w-full">
                  <div className="w-5 h-5 rounded border-2 border-gray-200 group-hover:border-[#006CE4] transition-all" />
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-[#FFB700] text-[#FFB700]" />)}
                  </div>
                </label>
                <label className="flex items-center gap-3 group cursor-pointer w-full">
                  <div className="w-5 h-5 rounded border-2 border-gray-200 group-hover:border-[#006CE4] transition-all" />
                  <div className="flex gap-0.5">
                    {[...Array(4)].map((_, i) => <Star key={i} className="w-4 h-4 fill-[#FFB700] text-[#FFB700]" />)}
                    <Star className="w-4 h-4 text-gray-200" />
                  </div>
                </label>
              </div>
            </FilterSection>

            <FilterSection title="Facilities">
              <Checkbox label="Free Wi-Fi" />
              <Checkbox label="Swimming Pool" />
              <Checkbox label="Fitness Center" />
              <Checkbox label="Spa" />
              <Checkbox label="Parking" />
              <Checkbox label="Pet Friendly" />
            </FilterSection>

            <FilterSection title="Review Score">
              <Checkbox label="Superb 9+" />
              <Checkbox label="Very Good 8+" />
              <Checkbox label="Good 7+" />
            </FilterSection>

            <FilterSection title="Neighborhood">
              <Checkbox label="Patong" />
              <Checkbox label="Karon" />
              <Checkbox label="Kata" />
              <Checkbox label="Kamala" />
            </FilterSection>

            <FilterSection title="Bed Type">
              <Checkbox label="Single" />
              <Checkbox label="Double" />
              <Checkbox label="King" />
            </FilterSection>
          </div>

          {/* Map Widget */}
          <div className="relative w-[256px] h-[160px] rounded-[12px] overflow-hidden border border-gray-200 shadow-sm bg-[#E8F1F8] group cursor-pointer">
            <Image
              src="/search-result/world.png"
              alt="Map View"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-white px-4 py-2 rounded-lg shadow-xl border border-gray-100 flex items-center gap-2 transform group-">
                <MapIcon className="w-5 h-5 text-[#006CE4]" />
                <span className="text-sm font-bold text-gray-800">View on Map</span>
              </div>
            </div>
          </div>
        </aside>
    );
}
