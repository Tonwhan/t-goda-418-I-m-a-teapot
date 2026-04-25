import React from 'react';
import { User, Check } from 'lucide-react';
import { Section } from '@/components/shared/ui-components';

export function RoomAvailability() {
    return (
        <Section title="Availability & Pricing" className="border-t border-gray-100 mt-8 pt-16">
            <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
                <table className="w-full border-collapse">
                    <thead>
                        <tr className="bg-[#F5F7F9] border-b border-gray-200">
                            <th className="px-6 py-4 text-left text-base font-black text-gray-400 uppercase tracking-widest">Room Type</th>
                            <th className="px-6 py-4 text-center text-base font-black text-gray-400 uppercase tracking-widest">Sleeps</th>
                            <th className="px-6 py-4 text-right text-base font-black text-gray-400 uppercase tracking-widest">Today's Price</th>
                            <th className="px-6 py-4 text-center text-base font-black text-gray-400 uppercase tracking-widest">Options</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                        {/* Room 1 */}
                        <tr className="hover:bg-gray-50 transition-colors">
                            <td className="px-6 py-8">
                                <div className="flex flex-col gap-2">
                                    <span className="bg-[#5C161F] text-white text-base font-black px-2 py-0.5 rounded-sm w-fit uppercase tracking-tighter">Limited Time Offer</span>
                                    <h4 className="text-base font-black text-gray-900">Presidential Sea Front Suite</h4>
                                    <p className="text-base text-gray-500 font-medium">1 King Bed • 110 m² • Sea view</p>
                                    <div className="flex items-center gap-2 mt-2">
                                        <Check className="w-4 h-4 text-green-600" strokeWidth={3} />
                                        <span className="text-base text-green-600 font-black">Free Airport Transfer</span>
                                    </div>
                                </div>
                            </td>
                            <td className="px-6 py-8">
                                <div className="flex justify-center gap-1 text-gray-400">
                                    <User className="w-4 h-4 fill-gray-400" />
                                    <User className="w-4 h-4 fill-gray-400" />
                                    <User className="w-4 h-4 fill-gray-400" />
                                    <User className="w-4 h-4 fill-gray-400" />
                                </div>
                            </td>
                            <td className="px-6 py-8 text-right">
                                <div className="flex flex-col items-end">
                                    <span className="text-base text-gray-400 line-through font-medium">$1,295</span>
                                    <span className="text-base font-black text-[#E41D57] leading-none mb-1">$862</span>
                                    <span className="text-base text-gray-400 font-bold uppercase tracking-widest">Including taxes</span>
                                </div>
                            </td>
                            <td className="px-6 py-8 text-center">
                                <button className="bg-[#006CE4] text-white px-8 py-2.5 rounded-lg font-black text-base uppercase tracking-widest shadow-lg shadow-blue-100 hover:bg-[#005bb8] transition-all transform active:scale-95">
                                    Select
                                </button>
                            </td>
                        </tr>

                        {/* Room 2 */}
                        <tr className="hover:bg-gray-50 transition-colors">
                            <td className="px-6 py-8">
                                <div className="flex flex-col gap-1">
                                    <h4 className="text-base font-black text-gray-900">Deluxe Garden View Room</h4>
                                    <p className="text-base text-gray-500 font-medium">1 Queen Bed • 45 m² • Garden view</p>
                                    <div className="flex items-center gap-2 mt-2">
                                        <Check className="w-4 h-4 text-green-600" strokeWidth={3} />
                                        <span className="text-base text-green-600 font-black">Breakfast Included</span>
                                    </div>
                                </div>
                            </td>
                            <td className="px-6 py-8">
                                <div className="flex justify-center gap-1 text-gray-400">
                                    <User className="w-4 h-4 fill-gray-400" />
                                    <User className="w-4 h-4 fill-gray-400" />
                                </div>
                            </td>
                            <td className="px-6 py-8 text-right">
                                <div className="flex flex-col items-end">
                                    <span className="text-base text-gray-400 line-through font-medium">$345</span>
                                    <span className="text-base font-black text-gray-900 leading-none mb-1">$264</span>
                                </div>
                            </td>
                            <td className="px-6 py-8 text-center">
                                <button className="bg-[#006CE4] text-white px-8 py-2.5 rounded-lg font-black text-base uppercase tracking-widest shadow-lg shadow-blue-100 hover:bg-[#005bb8] transition-all transform active:scale-95">
                                    Select
                                </button>
                            </td>
                        </tr>

                        {/* Room 3 */}
                        <tr className="hover:bg-gray-50 transition-colors">
                            <td className="px-6 py-8">
                                <div className="flex flex-col gap-1">
                                    <h4 className="text-base font-black text-gray-900">Junior Suite with Private Pool</h4>
                                    <p className="text-base text-gray-500 font-medium">1 King Bed • 65 m² • Private pool</p>
                                </div>
                            </td>
                            <td className="px-6 py-8">
                                <div className="flex justify-center gap-1 text-gray-400">
                                    <User className="w-4 h-4 fill-gray-400" />
                                    <User className="w-4 h-4 fill-gray-400" />
                                    <User className="w-4 h-4 fill-gray-400" />
                                    <div className="w-3 h-3 bg-gray-200 rounded-full self-center" />
                                </div>
                            </td>
                            <td className="px-6 py-8 text-right">
                                <div className="flex flex-col items-end">
                                    <span className="text-base text-gray-400 line-through font-medium">$676</span>
                                    <span className="text-base font-black text-gray-900 leading-none mb-1">$445</span>
                                </div>
                            </td>
                            <td className="px-6 py-8 text-center">
                                <button className="bg-[#006CE4] text-white px-8 py-2.5 rounded-lg font-black text-base uppercase tracking-widest shadow-lg shadow-blue-100 hover:bg-[#005bb8] transition-all transform active:scale-95">
                                    Select
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </Section>
    );
}
