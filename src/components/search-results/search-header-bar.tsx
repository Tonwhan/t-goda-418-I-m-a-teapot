import React from 'react';
import { MapPin, Calendar, Users, Search } from 'lucide-react';
import { Button } from '@/components/shared/ui-components';

export function SearchHeaderBar() {
    return (
      <div className="bg-white border-b border-gray-200 py-4 shadow-sm top-0 z-50 mt-16">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="bg-[#f2f2f2] rounded-lg p-1.5 flex items-center gap-2 shadow-inner border border-gray-200">
            <div className="flex-1 flex items-center gap-3 bg-white rounded-md px-4 py-2.5 border border-gray-300">
              <MapPin className="w-5 h-5 text-gray-400" />
              <div className="flex flex-col">
                <span className="text-[10px] text-gray-400 uppercase font-bold leading-none mb-0.5">Destination</span>
                <input
                  type="text"
                  defaultValue="Bali, Indonesia"
                  className="text-sm font-bold text-gray-800 bg-transparent outline-none w-full"
                />
              </div>
            </div>

            <div className="flex-1 flex items-center gap-3 bg-white rounded-md px-4 py-2.5 border border-gray-300">
              <Calendar className="w-5 h-5 text-gray-400" />
              <div className="flex flex-col">
                <span className="text-[10px] text-gray-400 uppercase font-bold leading-none mb-0.5">Dates</span>
                <span className="text-sm font-bold text-gray-800">Oct 12 — Oct 19, 2024</span>
              </div>
            </div>

            <div className="flex-1 flex items-center gap-3 bg-white rounded-md px-4 py-2.5 border border-gray-300">
              <Users className="w-5 h-5 text-gray-400" />
              <div className="flex flex-col">
                <span className="text-[10px] text-gray-400 uppercase font-bold leading-none mb-0.5">Travelers</span>
                <span className="text-sm font-bold text-gray-800">2 Adults, 1 Room</span>
              </div>
            </div>

            <Button className="px-8 h-full py-3.5 rounded-md shadow-lg shadow-blue-200 flex items-center gap-2">
              <Search className="w-4 h-4" />
              Update Search
            </Button>
          </div>
        </div>
      </div>
    );
}
