import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { MapPin, Star, Wifi, Waves, Dumbbell, Sparkles, Dog } from 'lucide-react';
import { Button, RatingStars } from '@/components/shared/ui-components';

const HotelCard = ({
  title,
  stars,
  location,
  distance,
  rating,
  ratingText,
  reviews,
  price,
  originalPrice,
  isTopChoice,
  features,
  badge,
  image
}: any) => (
  <div className="flex bg-white rounded-xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-md group mb-4">
    {/* Image Section */}
    <Link href="/room_details" className="relative w-64 flex-shrink-0 cursor-pointer overflow-hidden">
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover group-hover:scale-105 transition-transform duration-500"
      />
      {isTopChoice && (
        <div className="absolute top-3 left-3 flex items-center gap-1 bg-[#006CE4] text-white px-2 py-1 rounded-sm text-[10px] font-bold">
          <Star className="w-3 h-3 fill-white" />
          TOP CHOICE
        </div>
      )}
      {badge && (
        <div className="absolute top-3 left-3 bg-[#E41D57] text-white px-2 py-1 rounded-sm text-[10px] font-bold">
          {badge}
        </div>
      )}
    </Link>

    {/* Content Section */}
    <div className="flex-1 p-5 flex flex-col justify-between">
      <div>
        <div className="flex justify-between items-start">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <Link href="/room_details" className="text-lg font-bold text-[#006CE4] hover:underline cursor-pointer">{title}</Link>
              <RatingStars count={stars} />
            </div>
            <p className="text-sm text-gray-500 mb-2 flex items-center gap-1">
              <MapPin className="w-3 h-3" />
              {location} • <span className="text-[#006CE4]">{distance}</span>
            </p>
          </div>
          <div className="text-right">
            <div className="flex items-center gap-2 justify-end">
              <div className="flex flex-col items-end leading-none">
                <span className="font-bold text-gray-800">{ratingText}</span>
                <span className="text-xs text-gray-400">{reviews} reviews</span>
              </div>
              <div className="bg-[#003580] text-white w-9 h-9 flex items-center justify-center rounded-lg font-bold">
                {rating}
              </div>
            </div>
          </div>
        </div>

        <div className="flex gap-4 mt-2">
          {features.map((f: any, i: number) => (
            <div key={i} className="flex items-center gap-1.5 text-xs text-gray-600 bg-gray-50 px-2 py-1 rounded border border-gray-100">
              {f.icon}
              {f.label}
            </div>
          ))}
        </div>
      </div>

      <div className="pt-4 flex justify-between items-end border-t border-gray-50">
        <div className="text-xs text-green-600 font-medium flex items-center gap-1">
        </div>
        <div className="flex flex-col items-end">
          {originalPrice && <span className="text-xs text-gray-400 line-through">${originalPrice}</span>}
          <div className="flex items-baseline gap-1">
            <span className="text-2xl font-bold text-gray-900">${price}</span>
            <span className="text-xs text-gray-500">/night</span>
          </div>
          <Link href="/room_details">
            <Button variant="danger" className="mt-2 px-6">Book Now</Button>
          </Link>
        </div>
      </div>
    </div>
  </div>
);

export function HotelResultsList() {
    return (
        <section className="space-y-4">
            <HotelCard
              title="The Azure Serenity Resort"
              stars={5}
              location="Ubud, Bali"
              distance="2.5 km from center"
              rating="8.9"
              ratingText="Excellent"
              reviews="1,245"
              price="320"
              originalPrice="450"
              isTopChoice={true}
              image="/search-result/The Azure Serenity Resort.png"
              features={[
                { icon: <Wifi className="w-3 h-3" />, label: 'Free High-Speed Wi-Fi' },
                { icon: <Waves className="w-3 h-3" />, label: '3 Infinity Pools' },
                { icon: <Dumbbell className="w-3 h-3" />, label: '24/7 Fitness Center' }
              ]}
            />

            <HotelCard
              title="Lumina Beach Villas"
              stars={4}
              location="Seminyak, Bali"
              distance="500m from beach"
              rating="9.2"
              ratingText="Superb"
              reviews="856"
              price="185"
              badge="Limited Time Offer"
              image="/search-result/Lumina Beach Villas.png"
              features={[
                { icon: <Wifi className="w-3 h-3" />, label: 'Free Wi-Fi' },
                { icon: <Sparkles className="w-3 h-3" />, label: 'Wellness Spa' },
                { icon: <Dog className="w-3 h-3" />, label: 'Pet Friendly' }
              ]}
            />

            <HotelCard
              title="The Palms Sanctuary"
              stars={5}
              location="Canggu, Bali"
              distance="1.2 km from beach"
              rating="9.5"
              ratingText="Exceptional"
              reviews="642"
              price="295"
              image="/search-result/The Palms Sanctuary.png"
              features={[
                { icon: <Wifi className="w-3 h-3" />, label: 'Fiber Optic Wi-Fi' },
                { icon: <Waves className="w-3 h-3" />, label: 'Private Lagoon' },
                { icon: <Dumbbell className="w-3 h-3" />, label: 'Yoga Studio' }
              ]}
            />
        </section>
    );
}
