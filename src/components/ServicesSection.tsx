import React from 'react';
import { ShieldCheck, Clock, Check, ArrowRight, ArrowLeft, Calendar, Award } from 'lucide-react';
import { StudioConfig, Language, ServiceItem } from '../types';
import { GlossSweep } from './GlossSweep';

interface ServicesSectionProps {
  config: StudioConfig;
  language: Language;
  onOpenBooking: (serviceId?: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  config,
  language,
  onOpenBooking,
}) => {
  const ArrowIcon = language === 'ar' ? ArrowLeft : ArrowRight;

  return (
    <section id="services" className="py-24 bg-[#0B0B0D] relative">
      {/* Decorative subtle background accents */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#24352C]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-1/4 w-96 h-96 bg-[#C6A664]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header - Editorial style */}
        <div className="max-w-3xl mb-20">
          <div className="flex items-center gap-2 text-[#C6A664] text-xs font-bold tracking-widest uppercase mb-3">
            <span className="w-8 h-px bg-[#C6A664]" />
            <span>{language === 'ar' ? 'منظومة الحماية والعناية الفائقة' : 'Atelier Disciplines & Services'}</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F3EFE7] tracking-tight leading-tight">
            {language === 'ar'
              ? 'خدمات معيارية مصممة للحفاظ على قيمة وجمالية سيارتك'
              : 'Precision Engineering for Surface Preservation'}
          </h2>
          <p className="text-[#B8B3AA] text-base sm:text-lg mt-4 font-normal">
            {language === 'ar'
              ? 'كل خدمة تنفذ وفق بروتوكولات معملية صارمة مع فحص رقمي للألواح واستخدام أرقى المواد المعتمدة عالمياً.'
              : 'Every procedure is executed under clean-room conditions with ultrasonic panel auditing and manufacturer-certified chemistry.'}
          </p>
        </div>

        {/* Alternating Services Layout */}
        <div className="space-y-28">
          {config.services.map((service, index) => {
            const isEven = index % 2 === 0;

            return (
              <div
                key={service.id}
                id={`service-${service.id}`}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center"
              >
                {/* Image Column */}
                <div
                  className={`lg:col-span-6 ${
                    isEven ? 'lg:order-1' : 'lg:order-2'
                  }`}
                >
                  <GlossSweep className="rounded-2xl border border-[#26262B] bg-[#141416] p-2 shadow-[0_20px_40px_rgba(0,0,0,0.6)]">
                    <div className="relative aspect-[16/10] overflow-hidden rounded-xl bg-[#1B1B1E]">
                      {/* Real Photography Replacement Comment */}
                      {/* {service.photoReplaceComment} */}
                      <img
                        src={service.imageUrl}
                        alt={service.imageAlt[language]}
                        loading="lazy"
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0D]/80 via-transparent to-transparent" />
                      
                      {/* Overlay badge with warranty */}
                      <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                        <span className="px-3 py-1.5 rounded-lg bg-[#141416]/90 border border-[#C6A664]/40 text-xs font-semibold text-[#DFCA95] backdrop-blur-md">
                          {service.warranty[language]}
                        </span>
                        <span className="px-2.5 py-1 rounded-md bg-[#0B0B0D]/80 text-[11px] font-mono text-[#B8B3AA] backdrop-blur-md">
                          {service.duration[language]}
                        </span>
                      </div>
                    </div>
                  </GlossSweep>
                </div>

                {/* Content Column */}
                <div
                  className={`lg:col-span-6 ${
                    isEven ? 'lg:order-2' : 'lg:order-1'
                  }`}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-mono font-bold text-[#C6A664]">
                      0{index + 1}
                    </span>
                    <span className="w-4 h-px bg-[#C6A664]/40" />
                    <span className="text-xs uppercase tracking-widest text-[#B8B3AA] font-semibold">
                      {service.tagline[language]}
                    </span>
                  </div>

                  <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#F3EFE7] mb-3">
                    {service.title[language]}
                  </h3>

                  {/* One-Line Craft Subtitle */}
                  <p className="text-sm sm:text-base text-[#DFCA95] font-medium leading-relaxed mb-4 italic">
                    "{service.craftSubtitle[language]}"
                  </p>

                  <p className="text-sm text-[#B8B3AA] leading-relaxed mb-6 font-normal">
                    {service.description[language]}
                  </p>

                  {/* Technical Specifications Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-8">
                    {service.specs.map((spec, sIdx) => (
                      <div
                        key={sIdx}
                        className="flex items-start gap-2 p-2.5 rounded-lg bg-[#1B1B1E] border border-[#26262B]"
                      >
                        <div className="w-4 h-4 rounded-full bg-[#24352C] text-[#DFCA95] flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-2.5 h-2.5" />
                        </div>
                        <span className="text-xs text-[#F3EFE7] font-medium leading-tight">
                          {spec[language]}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Service Footer Actions */}
                  <div className="flex flex-wrap items-center gap-4">
                    <button
                      onClick={() => onOpenBooking(service.id)}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#1B1B1E] hover:bg-[#26262B] border border-[#C6A664]/60 hover:border-[#C6A664] text-[#DFCA95] text-xs font-bold tracking-wider transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C6A664]"
                    >
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{language === 'ar' ? 'طلب تسعيرة لهذه الخدمة' : 'Request Quote for this Service'}</span>
                      <ArrowIcon className="w-3.5 h-3.5" />
                    </button>
                    
                    <span className="text-xs text-[#B8B3AA]">
                      <strong className="text-[#F3EFE7]">{language === 'ar' ? 'يوصى بها لـ: ' : 'Recommended: '}</strong>
                      {service.recommendedFor[language]}
                    </span>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
