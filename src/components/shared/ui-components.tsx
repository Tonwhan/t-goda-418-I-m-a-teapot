import React from 'react';
import { Star, Check } from 'lucide-react';
import { cn } from '@/lib/utils';
import Image from 'next/image';

export const RatingStars = ({ count, size = "w-3 h-3" }: { count: number; size?: string }) => (
    <div className="flex gap-0.5">
        {[...Array(5)].map((_, i) => (
            <Star
                key={i}
                className={cn(size, i < count ? "fill-[#FFB700] text-[#FFB700]" : "text-gray-200")}
            />
        ))}
    </div>
);

export const Section = ({ title, children, className }: { title?: string; children: React.ReactNode; className?: string }) => (
    <section className={cn("py-8", className)}>
        {title && <h2 className="text-base font-black text-gray-900 mb-6 tracking-tight">{title}</h2>}
        {children}
    </section>
);

export const AmenityItem = ({ icon: Icon, label }: { icon: any; label: string }) => (
    <div className="flex items-center gap-3 text-gray-700">
        <div className="text-[#006CE4]">
            <Icon className="w-5 h-5" />
        </div>
        <span className="text-base font-medium">{label}</span>
    </div>
);

export const ReviewCard = ({ rating, text, author, location }: any) => (
    <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col justify-between h-full hover:shadow-md transition-shadow">
        <div>
            <div className="flex justify-between items-center mb-4">
                <RatingStars count={rating} size="w-4 h-4" />
                <span className="text-base text-gray-400 font-medium">Oct 12, 2024</span>
            </div>
            <p className="text-gray-700 text-base leading-relaxed mb-6 italic">"{text}"</p>
        </div>
        <div className="flex items-center gap-3 pt-4 border-t border-gray-50">
            <div className="w-10 h-10 bg-gray-200 rounded-full animate-pulse" />
            <div>
                <h4 className="text-base font-black text-gray-900 leading-none mb-1">{author}</h4>
                <p className="text-base text-gray-400 font-medium">{location}</p>
            </div>
        </div>
    </div>
);

export const Badge = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <span className={cn("px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider", className)}>
    {children}
  </span>
);

export const Button = ({
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
        "px-4 py-2 rounded-md font-medium disabled:opacity-50", 
        variants[variant], 
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export const FilterSection = ({ title, children, className }: { title: string; children: React.ReactNode; className?: string }) => (
  <div className={cn("py-5 border-b border-gray-100 last:border-0", className)}>
    <h3 className="text-sm font-black text-gray-800 mb-4">{title}</h3>
    <div className="space-y-3.5">
      {children}
    </div>
  </div>
);

export const Checkbox = ({ label, count, checked }: { label: string; count?: string | number; checked?: boolean }) => (
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
  </label>
);
