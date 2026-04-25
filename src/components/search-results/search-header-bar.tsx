import React from 'react';
import { MapPin, Calendar, Users, Search } from 'lucide-react';
import { Button } from '@/components/shared/ui-components';

export function SearchHeaderBar() {
    return (
      <div className="max-w-[1280px] mx-auto w-full bg-white border-b border-[#C2C6D54D] pt-4 pb-4 px-6 shadow-[0px_1px_2px_0px_#0000000D] top-0 z-50 flex items-center">
        <div className="max-w-[1280px] mx-auto w-full">
          <div className="flex items-center gap-4">
            <div className="w-[625.85px] min-w-[280px] h-[57.59px] flex items-center gap-3 bg-[#ECEDF6] rounded-[12px] border border-[#C2C6D580] px-4 py-3 transition-all hover:bg-[#E2E8F0] cursor-pointer">
              <MapPin className="w-5 h-5 text-[#006CE4]" />
              <div className="flex flex-col">
                <span className="text-[11px] text-gray-500 font-medium leading-none mb-1">Destination</span>
                <input
                  type="text"
                  defaultValue="Bali, Indonesia"
                  className="text-sm font-bold text-gray-900 bg-transparent outline-none w-full placeholder-gray-400"
                />
              </div>
            </div>

            <div className="flex-1 h-[57.59px] flex items-center gap-3 bg-[#ECEDF6] rounded-[12px] border border-[#C2C6D580] px-4 py-3 transition-all hover:bg-[#E2E8F0] cursor-pointer">
              <Calendar className="w-5 h-5 text-[#006CE4]" />
              <div className="flex flex-col">
                <span className="text-[11px] text-gray-500 font-medium leading-none mb-1">Dates</span>
                <span className="text-sm font-bold text-gray-900 whitespace-nowrap">Oct 12 — Oct 19, 2024</span>
              </div>
            </div>

            <div className="flex-1 h-[57.59px] flex items-center gap-3 bg-[#ECEDF6] rounded-[12px] border border-[#C2C6D580] px-4 py-3 transition-all hover:bg-[#E2E8F0] cursor-pointer">
              <Users className="w-5 h-5 text-[#006CE4]" />
              <div className="flex flex-col">
                <span className="text-[11px] text-gray-500 font-medium leading-none mb-1">Travelers</span>
                <span className="text-sm font-bold text-gray-900 whitespace-nowrap">2 Adults, 1 Room</span>
              </div>
            </div>

            <Button className="px-10 h-[52px] rounded-xl shadow-lg shadow-blue-100 bg-[#006CE4] hover:bg-[#005bb2] text-white font-bold text-sm transition-all flex items-center justify-center shrink-0">
              Update Search
            </Button>
          </div>
        </div>
      </div>
    );
}
