"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import Link from "next/link";

const destinations = [
  {
    id: 1,
    name: "Bangkok, Thailand",
    price: 120,
    image: "/comp-image/2.png",
  },
  {
    id: 2,
    name: "Tokyo, Japan",
    price: 240,
    image: "/comp-image/00.png",
  },
  {
    id: 3,
    name: "Paris, France",
    price: 180,
    image: "/comp-image/3.png",
  },
  {
    id: 4,
    name: "London, UK",
    price: 210,
    image: "/comp-image/4.png",
  },
];

export function TrendingDestinations() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Trending Destinations
          </h2>
          <p className="text-gray-500">
            Handpicked favorites for your next adventure
          </p>
        </div>
        <p className="text-blue-600 font-semibold hover:text-blue-700 cursor-pointer">
          View all
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {isLoading
          ? Array.from({ length: 4 }).map((_, index) => (
              <div key={index} className="w-[282px] mx-auto">
                <Skeleton className="w-[282px] h-[376px] rounded-[16px] mb-4" />
                <Skeleton className="h-6 w-3/4 mb-2" />
                <Skeleton className="h-4 w-1/2" />
              </div>
            ))
          : destinations.map((dest) => (
              <Link
                key={dest.id}
                href="/search_result"
                className="group cursor-pointer w-[282px] mx-auto block"
              >
                <div className="relative w-[282px] h-[376px] rounded-[16px] overflow-hidden mb-4">
                  <Image
                    src={dest.image}
                    alt={dest.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    priority
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                  {dest.name}
                </h3>
                <p className="text-gray-500 text-sm mt-1">
                  Starting from{" "}
                  <span className="text-blue-600 font-bold">${dest.price}</span>
                </p>
              </Link>
            ))}
      </div>
    </section>
  );
}
