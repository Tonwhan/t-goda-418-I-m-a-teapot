import React from 'react';

export function RoomReviewSidebar() {
    return (
        <div className="pt-8">
            <div className="bg-[#F5F7F9] rounded-2xl p-8 border border-gray-100">
                <div className="flex items-center justify-between mb-8">
                    <div>
                        <h3 className="text-base font-black text-gray-900 leading-none mb-1">Excellent</h3>
                        <p className="text-base text-gray-500 font-medium">1,248 verified reviews</p>
                    </div>
                    <div className="bg-[#003580] text-white w-14 h-14 rounded-2xl flex items-center justify-center text-base font-black shadow-lg shadow-blue-100">
                        9.2
                    </div>
                </div>

                <div className="space-y-6">
                    {[
                        { label: "Cleanliness", score: 9.5 },
                        { label: "Service", score: 9.3 },
                        { label: "Location", score: 9.0 }
                    ].map((stat, i) => (
                        <div key={i}>
                            <div className="flex justify-between text-base font-bold text-gray-700 mb-2">
                                <span>{stat.label}</span>
                                <span>{stat.score}</span>
                            </div>
                            <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
                                <div
                                    className="h-full bg-[#006CE4] rounded-full"
                                    style={{ width: `${stat.score * 10}%` }}
                                />
                            </div>
                        </div>
                    ))}
                </div>

                <button className="w-full mt-8 bg-white border-2 border-[#006CE4] text-[#006CE4] py-3 rounded-lg font-black text-base uppercase tracking-widest hover:bg-blue-50 transition-colors">
                    Read All Reviews
                </button>
            </div>
        </div>
    );
}
