import React from 'react';
import { MapPin, Info, Clock } from 'lucide-react';
import { Section } from '@/components/shared/ui-components';
import Image from 'next/image';

export function RoomNeighborhood() {
    return (
        <Section title="Neighborhood">
            <div className="flex gap-8">
                {/* Map Widget */}
                <div className="w-[300px] h-[200px] bg-gray-100 rounded-xl relative overflow-hidden group cursor-pointer flex-shrink-0 border border-gray-200">
                    <Image
                        src="/room_detaills/Map.png"
                        alt="Map"
                        fill
                        className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors" />
                    <div className="absolute bottom-4 left-4 right-4 bg-white px-4 py-2 rounded-lg text-center font-bold text-sm shadow-md text-gray-900 group-hover:shadow-lg transform transition-all group-hover:-translate-y-1">
                        View on Map
                    </div>
                </div>

                {/* Locations */}
                <div className="flex-1">
                    <div className="space-y-6">
                        <div className="flex items-start gap-4">
                            <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center flex-shrink-0">
                                <Info className="w-5 h-5 text-[#006CE4]" />
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
            </div>
        </Section>
    );
}
