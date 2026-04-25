import Image from "next/image";

export function MainFooter() {
    return (
        <footer className="w-full bg-[#F8FAFC] py-16 mt-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between gap-16">
                    {/* Left Column */}
                    <div className="max-w-md flex flex-col gap-6">
                        <div>
                            <h2 className="text-[20px] font-bold text-[#111827] mb-4">
                                T-Goda
                            </h2>
                            <p className="text-[#6B7280] text-[14px] leading-relaxed">
                                Making world travel accessible, affordable, and delightful for
                                everyone since 2024. Your journey starts here.
                            </p>
                        </div>
                        <p className="text-[#6B7280] text-[14px]">
                            © 2024 T-Goda Booking. All rights reserved.
                        </p>
                        <div className="flex gap-4">
                            <Image
                                src="/main-vectors/facebook.svg"
                                width={20}
                                height={20}
                                alt="Facebook"
                                priority
                            />
                            <Image
                                src="/main-vectors/ig.svg"
                                width={20}
                                height={20}
                                alt="Instagram"
                                priority
                            />
                            <Image
                                src="/main-vectors/twitter.svg"
                                width={20}
                                height={20}
                                alt="Twitter"
                                priority
                            />
                        </div>
                    </div>

                    {/* Right Columns */}
                    <div className="flex flex-wrap md:flex-nowrap gap-16 md:gap-24">
                        <div>
                            <h4 className="font-bold text-[#111827] mb-6 text-[14px]">
                                Company
                            </h4>
                            <ul className="space-y-4 text-[14px] text-[#6B7280]">
                                <li>
                                    <p>About Us</p>
                                </li>
                                <li>
                                    <p>Careers</p>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-bold text-[#111827] mb-6 text-[14px]">
                                Support
                            </h4>
                            <ul className="space-y-4 text-[14px] text-[#6B7280]">
                                <li>
                                    <p>Support</p>
                                </li>
                                <li>
                                    <p>Mobile App</p>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-bold text-[#111827] mb-6 text-[14px]">
                                Legal
                            </h4>
                            <ul className="space-y-4 text-[14px] text-[#6B7280]">
                                <li>
                                    <p>Privacy Policy</p>
                                </li>
                                <li>
                                    <p>Terms of Service</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
