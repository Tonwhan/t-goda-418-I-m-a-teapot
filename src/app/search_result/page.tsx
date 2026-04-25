'use client';

import React from 'react';
import { 
  MapPin, 
  Calendar, 
  Users, 
  Search, 
  Wifi, 
  Waves, 
  Dumbbell, 
  Sparkles, 
  Car, 
  Dog, 
  Star, 
  ChevronRight, 
  ChevronLeft, 
  Info, 
  Map as MapIcon,
  Filter,
  Check
} from 'lucide-react';
import { cn } from '@/lib/utils';

// --- Components ---

const Badge = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <span className={cn("px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider", className)}>
    {children}
  </span>
);

const Button = ({ 
  children, 
  variant = 'primary', 
  className,
  ...props 
}: React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: 'primary' | 'outline' | 'ghost' | 'danger' }) => {
  const variants = {
    primary: "bg-[#006CE4] text-white hover:bg-[#005bb8]",
    outline: "border border-[#006CE4] text-[#006CE4] hover:bg-blue-50",
    ghost: "text-gray-600 hover:bg-gray-100",
    danger: "bg-[#E41D57] text-white hover:bg-[#c2184a]"
  };

  return (
    <button 
      className={cn(
        "px-4 py-2 rounded-md font-medium   disabled:opacity-50", 
        variants[variant], 
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

const FilterSection = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="py-4 border-b border-gray-100 last:border-0">
    <h3 className="text-sm font-bold text-gray-800 mb-3">{title}</h3>
    <div className="space-y-2.5">
      {children}
    </div>
  </div>
);

const Checkbox = ({ label, count, checked }: { label: string; count?: string | number; checked?: boolean }) => (
  <label className="flex items-center justify-between group cursor-pointer">
    <div className="flex items-center gap-3">
      <div className={cn(
        "w-4 h-4 rounded border flex items-center justify-center ",
        checked ? "bg-[#006CE4] border-[#006CE4]" : "border-gray-300 group-hover:border-gray-400"
      )}>
        {checked && <Check className="w-3 h-3 text-white" strokeWidth={3} />}
      </div>
      <span className="text-sm text-gray-600 group-hover:text-gray-900">{label}</span>
    </div>
    {count !== undefined && <span className="text-xs text-gray-400">{count}</span>}
  </label>
);

const RatingStars = ({ count }: { count: number }) => (
  <div className="flex gap-0.5">
    {[...Array(5)].map((_, i) => (
      <Star 
        key={i} 
        className={cn("w-3 h-3", i < count ? "fill-[#FFB700] text-[#FFB700]" : "text-gray-200")} 
      />
    ))}
  </div>
);

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
  badge
}: any) => (
  <div className="flex bg-white rounded-xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-md group mb-4">
    {/* Image Section */}
    <div className="relative w-72 h-full min-h-[220px]">
      <div className="w-full h-full bg-gray-200 animate-pulse" />
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
    </div>

    {/* Content Section */}
    <div className="flex-1 p-5 flex flex-col">
      <div className="flex justify-between items-start">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <h3 className="text-lg font-bold text-[#006CE4] group-hover:underline cursor-pointer">{title}</h3>
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

      <div className="mt-auto pt-4 flex justify-between items-end border-t border-gray-50">
        <div className="text-xs text-green-600 font-medium flex items-center gap-1">
          <Check className="w-3 h-3" />
          Free cancellation before Oct 10
        </div>
        <div className="flex flex-col items-end">
          {originalPrice && <span className="text-xs text-gray-400 line-through">${originalPrice}</span>}
          <div className="flex items-baseline gap-1">
            <span className="text-2xl font-bold text-gray-900">${price}</span>
            <span className="text-xs text-gray-500">/night</span>
          </div>
          <Button variant="danger" className="mt-2 px-6">Book Now</Button>
        </div>
      </div>
    </div>
  </div>
);

const FlashDealItem = ({ title, stars, location, discount, price, originalPrice }: any) => (
  <div className="flex bg-white items-center p-5 gap-6 group">
    {/* Image Container - Larger & Rectangular */}
    <div className="relative w-72 h-44 flex-shrink-0">
      <div className="w-full h-full bg-gray-200 animate-pulse rounded-lg shadow-sm" />
      <div className="absolute top-2 left-2 bg-[#E41D57] text-white px-2 py-1 rounded text-[10px] font-bold">
        {discount} OFF
      </div>
    </div>

    {/* Info Section - Middle */}
    <div className="flex-1 flex flex-col justify-center">
      <div className="flex items-center gap-2 mb-1">
        <h4 className="font-bold text-lg text-gray-800">{title}</h4>
        <RatingStars count={stars} />
      </div>
      <p className="text-xs text-gray-500 flex items-center gap-1">
        <MapPin className="w-3.5 h-3.5" />
        {location}
      </p>
    </div>

    {/* Price Section - Far Right */}
    <div className="flex flex-col items-end gap-1 min-w-[120px]">
      {originalPrice && (
        <span className="text-xs text-gray-400 line-through leading-none">
          ${originalPrice}
        </span>
      )}
      <div className="flex items-baseline gap-1 text-[#E41D57]">
        <span className="text-3xl font-black">${price}</span>
        <span className="text-xs text-gray-400 font-normal">/night</span>
      </div>
      <button className="bg-[#E41D57] text-white text-xs font-bold px-6 py-2 rounded hover:bg-[#c2184a] transform shadow-md shadow-pink-100">
        Claim
      </button>
    </div>
  </div>
);

// --- Main Page ---

export default function SearchResultPage() {
  return (
    <div className="min-h-screen bg-[#F5F7F9] font-sans antialiased text-gray-900">
      {/* Search Header Bar */}
      <div className="bg-white border-b border-gray-200 py-4 shadow-sm sticky top-0 z-50">
        <div className="max-w-[1440px] mx-auto px-6">
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

      <div className="max-w-[1440px] mx-auto px-6 py-8 flex gap-8">
        {/* Sidebar Filters */}
        <aside className="w-72 flex-shrink-0 space-y-6">
          <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-lg font-bold flex items-center gap-2">
                <Filter className="w-5 h-5" />
                Filters
              </h2>
            </div>
            
            <FilterSection title="Price Range">
              <div className="space-y-4 pt-2">
                <div className="h-1.5 w-full bg-gray-100 rounded-full relative">
                  <div className="absolute left-[10%] right-[30%] h-full bg-[#006CE4] rounded-full" />
                  <div className="absolute left-[10%] top-1/2 -translate-y-1/2 w-4 h-4 bg-white border-2 border-[#006CE4] rounded-full shadow-sm" />
                  <div className="absolute right-[30%] top-1/2 -translate-y-1/2 w-4 h-4 bg-white border-2 border-[#006CE4] rounded-full shadow-sm" />
                </div>
                <div className="flex justify-between text-xs font-bold text-gray-500">
                  <span>$0</span>
                  <span>$1000+</span>
                </div>
              </div>
            </FilterSection>

            <FilterSection title="Property Type">
              <Checkbox label="Hotels" count="124" checked />
              <Checkbox label="Resorts" count="45" />
              <Checkbox label="Apartments" count="62" />
              <Checkbox label="Villas" count="14" />
            </FilterSection>

            <FilterSection title="Star Rating">
              <Checkbox label="5 Stars" count="32" checked />
              <Checkbox label="4 Stars" count="89" checked />
              <Checkbox label="3 Stars" count="124" />
            </FilterSection>

            <FilterSection title="Facilities">
              <Checkbox label="Free Wi-Fi" count="210" checked />
              <Checkbox label="Swimming Pool" count="180" />
              <Checkbox label="Fitness Center" count="95" />
              <Checkbox label="Spa" count="42" />
              <Checkbox label="Parking" count="156" />
              <Checkbox label="Pet Friendly" count="24" />
            </FilterSection>

            <FilterSection title="Review Score">
              <Checkbox label="Superb 9+" count="15" />
              <Checkbox label="Very Good 8+" count="42" />
              <Checkbox label="Good 7+" count="89" />
            </FilterSection>
          </div>

          {/* Map Widget */}
          <div className="relative rounded-xl overflow-hidden border border-gray-200 shadow-sm aspect-square bg-gray-200 group cursor-pointer">
            <div className="absolute inset-0 bg-blue-100 bg-opacity-50">
              <div className="w-full h-full opacity-40 mix-blend-multiply bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-white px-4 py-2 rounded-lg shadow-xl border border-gray-100 flex items-center gap-2 transform group-">
                <MapIcon className="w-5 h-5 text-[#006CE4]" />
                <span className="text-sm font-bold text-gray-800">View on Map</span>
              </div>
            </div>
          </div>
        </aside>

        {/* Main Results */}
        <main className="flex-1">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl font-bold text-gray-800">
              245 properties in Bali
            </h1>
            <div className="flex items-center gap-3">
              <span className="text-sm text-gray-500">Sort by:</span>
              <div className="bg-white border border-gray-200 rounded-lg px-4 py-2 text-sm font-bold text-[#006CE4] flex items-center gap-4 cursor-pointer hover:border-blue-300">
                Recommended
                <ChevronRight className="w-4 h-4 rotate-90" />
              </div>
            </div>
          </div>

          {/* Flash Deals Section - Refined Layout */}
          <section className="bg-white rounded-2xl border-4 border-[#006CE4] mb-12 overflow-hidden shadow-xl shadow-blue-50/50">
            {/* Header Banner */}
            <div className="bg-[#FFF1F3] px-6 py-4 flex items-center justify-between border-b border-[#FFE4E8]">
              <div className="flex items-center gap-3">
                <div className="bg-[#E41D57] p-1.5 rounded-lg shadow-sm">
                  <Sparkles className="w-5 h-5 text-white fill-white" />
                </div>
                <h2 className="text-xl font-black italic tracking-tight text-[#E41D57]">Flash Deals for You</h2>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">Ends in:</span>
                <div className="flex gap-1">
                  {[ '08', '45', '12' ].map((time, i) => (
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
              />
              <FlashDealItem 
                title="Emerald Jungle Retreat" 
                stars={4} 
                location="Ubud, Bali • Private Sanctuary" 
                discount="45%" 
                price="247" 
                originalPrice="450"
              />
              <FlashDealItem 
                title="Seminyak Shores Club" 
                stars={5} 
                location="Seminyak, Bali • Beachfront Bliss" 
                discount="35%" 
                price="442" 
                originalPrice="680"
              />
            </div>
          </section>

          {/* Standard Results */}
          <section className="space-y-4">
            <HotelCard 
              title="The Azure Serenity Resort"
              stars={5}
              location="Ubud, Bali"
              distance="2.5 km from center"
              rating="8.9"
              ratingText="Excellent"
              reviews="1,240"
              price="284"
              originalPrice="520"
              isTopChoice
              features={[
                { icon: <Wifi className="w-3 h-3" />, label: 'Free Wi-Fi' },
                { icon: <Waves className="w-3 h-3" />, label: 'Pool' },
                { icon: <Sparkles className="w-3 h-3" />, label: 'Breakfast' }
              ]}
            />
            <HotelCard 
              title="Lumina Beach Villas"
              stars={4}
              location="Seminyak, Bali"
              distance="Beachfront"
              rating="9.2"
              ratingText="Exceptional"
              reviews="850"
              price="415"
              features={[
                { icon: <Sparkles className="w-3 h-3" />, label: 'Private Beach' },
                { icon: <Waves className="w-3 h-3" />, label: 'Spa' }
              ]}
            />
            <HotelCard 
              title="The Palms Sanctuary"
              stars={4}
              location="Nusa Dua, Bali"
              distance="0.8 km from beach"
              rating="8.4"
              ratingText="Great"
              reviews="2,100"
              price="189"
              badge="Limited Deal"
              features={[
                { icon: <Car className="w-3 h-3" />, label: 'Airport Shuttle' },
                { icon: <Dumbbell className="w-3 h-3" />, label: 'Gym' }
              ]}
            />
          </section>

          {/* Pagination */}
          <div className="mt-12 flex justify-center items-center gap-2">
            <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-gray-200 text-gray-400 hover:border-blue-300 hover:text-[#006CE4]">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-[#006CE4] text-white font-bold">1</button>
            <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-gray-200 text-gray-600 font-bold hover:bg-gray-50">2</button>
            <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-gray-200 text-gray-600 font-bold hover:bg-gray-50">3</button>
            <span className="px-2 text-gray-400">...</span>
            <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-gray-200 text-gray-600 font-bold hover:bg-gray-50">12</button>
            <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-gray-200 text-gray-400 hover:border-blue-300 hover:text-[#006CE4]">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </main>
      </div>
    </div>
  );
}
