import { Mail } from "lucide-react";

export function Newsletter() {
    return (
        <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-[#E7E8F1] rounded-3xl p-8 md:p-16 flex flex-col items-center text-center relative overflow-hidden">
                <Mail className="w-12 h-12 text-[#005CBD] mb-6" strokeWidth={2} />

                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 tracking-tight">
                    Get Travel Deals Directly
                </h2>
                <p className="text-gray-500 max-w-2xl mb-8 text-base md:text-lg">
                    Subscribe to our newsletter and get early access to hidden gems and
                    seasonal discounts. No spam, only adventure.
                </p>

                <div className="w-full max-w-2xl flex flex-col md:flex-row items-stretch justify-center gap-4">
                    <input
                        type="email"
                        placeholder="Your email address"
                        className="flex-1 w-full bg-white border border-[#A5B4FC] outline-none px-6 py-4 rounded-[12px] text-gray-700 placeholder-gray-400 focus:border-[#005CBD] focus:ring-1 focus:ring-[#005CBD]"
                    />
                    <button className="w-full md:w-auto bg-[#005CBD] hover:bg-[#004a99] text-white font-bold py-4 px-8 rounded-[12px] whitespace-nowrap">
                        Subscribe Now
                    </button>
                </div>

                <p className="text-[13px] text-gray-500 mt-6">
                    By subscribing, you agree to our Terms of Service and Privacy
                    Policy.
                </p>
            </div>
        </section>
    );
}
