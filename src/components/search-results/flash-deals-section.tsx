import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { MapPin } from 'lucide-react';
import { RatingStars } from '@/components/shared/ui-components';

const FlashDealItem = ({ title, stars, location, discount, price, originalPrice, image }: any) => (
  <div className="flex bg-white items-stretch group h-52">
    {/* Image Container - Flush to edges */}
    <Link href="/room_details" className="relative w-80 flex-shrink-0 overflow-hidden cursor-pointer">
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover group-hover:scale-105 transition-transform duration-500"
      />
      <div className="absolute top-4 left-4 bg-[#E41D57] text-white px-3 py-1.5 rounded shadow-lg text-[10px] font-black tracking-wider">
        {discount} OFF
      </div>
    </Link>

    {/* Info Section - Middle */}
    <div className="flex-1 flex flex-col justify-center px-8">
      <div className="flex items-center gap-3 mb-1.5">
        <h4 className="font-bold text-xl text-gray-800">{title}</h4>
        <RatingStars count={stars} />
      </div>
      <p className="text-sm text-gray-500 flex items-center gap-1.5">
        <MapPin className="w-4 h-4 text-[#006CE4]" />
        {location}
      </p>
    </div>

    {/* Price Section - Far Right */}
    <div className="flex flex-col items-end justify-center pr-8 gap-1 min-w-[160px]">
      {originalPrice && (
        <span className="text-sm text-gray-400 line-through leading-none">
          ${originalPrice}
        </span>
      )}
      <div className="flex items-baseline gap-1 text-[#E41D57]">
        <span className="text-4xl font-black">${price}</span>
        <span className="text-xs text-gray-400 font-normal">/night</span>
      </div>
      <Link href="/room_details" className="bg-[#E41D57] text-white text-xs font-bold px-6 py-2 rounded hover:bg-[#c2184a] transform shadow-md shadow-pink-100 transition-all flex items-center justify-center">
        Claim
      </Link>
    </div>
  </div>
);

export function FlashDealsSection() {
    return (
        <section className="bg-white rounded-2xl border-4 border-[#006CE4] mb-12 overflow-hidden shadow-xl shadow-blue-50/50">
            {/* Header Banner */}
            <div className="bg-[#FFF1F3] px-6 py-4 flex items-center justify-between border-b border-[#FFE4E8]">
              <div className="flex items-center gap-3">
                <Image src="/search-result/Icon.svg" alt="Flash Deal Icon" width={20} height={20} />
                <h2 className="text-xl font-black italic tracking-tight text-[#E41D57]">Flash Deals for You</h2>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">Ends in:</span>
                <div className="flex gap-1">
                  {['08', '45', '12'].map((time, i) => (
                    <React.Fragment key={i}>
                      <div className="bg-[#E41D57] text-white px-2.5 py-1.5 rounded font-black text-sm tabular-nums shadow-sm">
                        {time}
                      </div>
                      {i < 2 && <span className="text-[#E41D57] font-black py-1">:</span>}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>

            {/* Vertical List of Items */}
            <div className="flex flex-col divide-y divide-gray-100">
              <FlashDealItem
                title="Mandala Sky Luxury Villas"
                stars={5}
                location="Uluwatu, Bali • Cliff-top view"
                discount="60%"
                price="480"
                originalPrice="1,200"
                image="/search-result/Uluwatu luxury villa.png"
              />
              <FlashDealItem
                title="Emerald Jungle Retreat"
                stars={4}
                location="Ubud, Bali • Private Sanctuary"
                discount="45%"
                price="247"
                originalPrice="450"
                image="/search-result/Ubud jungle retreat.png"
              />
              <FlashDealItem
                title="Seminyak Shores Club"
                stars={5}
                location="Seminyak, Bali • Beachfront Bliss"
                discount="35%"
                price="442"
                originalPrice="680"
                image="/search-result/Seminyak beach club resort.png"
              />
            </div>
        </section>
    );
}
