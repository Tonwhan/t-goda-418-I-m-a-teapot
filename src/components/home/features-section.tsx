import Image from "next/image";
import { Tag } from "lucide-react";

export function FeaturesSection() {
    return (
        <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="w-full bg-[#E9E9E9] p-6 rounded-[12px] flex flex-col items-center text-center gap-3">
                    <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center ">
                        <Tag className="w-6 h-6" />
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">
                            Best Price Guarantee
                        </h3>
                        <p className="text-gray-500 text-sm">
                            Find a lower price? We'll match it and give you a voucher for
                            your next trip.
                        </p>
                    </div>
                </div>

                <div className="w-full bg-[#E9E9E9] p-6 rounded-[12px] flex flex-col items-center text-center gap-3">
                    <div className="w-14 h-14 bg-pink-100 rounded-full flex items-center justify-center">
                        <Image
                            src="/main-vectors/support.svg"
                            width={24}
                            height={24}
                            alt="Headphones"
                        />
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">
                            24/7 Global Support
                        </h3>
                        <p className="text-gray-500 text-sm">
                            Our world-class support team is here to help you anywhere,
                            anytime in 40+ languages.
                        </p>
                    </div>
                </div>

                <div className="w-full bg-[#E9E9E9] p-6 rounded-[12px] flex flex-col items-center text-center gap-3">
                    <div className="w-14 h-14 bg-orange-100 rounded-full flex items-center justify-center ">
                        <Image
                            src="/main-vectors/calendar.svg"
                            width={24}
                            height={24}
                            alt="Headphones"
                        />{" "}
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">
                            Flexible Booking
                        </h3>
                        <p className="text-gray-500 text-sm">
                            Life happens. Most of our properties offer free cancellation for
                            peace of mind.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
