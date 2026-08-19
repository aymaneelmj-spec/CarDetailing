import React, { useState, useEffect } from 'react';
import { ShieldCheck, MessageCircle, Calendar, Sparkles, Award, ArrowRight, ArrowLeft } from 'lucide-react';
import { StudioConfig, Language } from '../types';
import { GlossSweep } from './GlossSweep';
import { BeadRoll } from './BeadRoll';
import { vehicleImages } from '../assets/images';

interface HeroProps {
  config: StudioConfig;
  language: Language;
  onOpenBooking: (serviceId?: string, tierId?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({
  config,
  language,
  onOpenBooking,
}) => {
  const [vehiclesCount, setVehiclesCount] = useState(0);
  const [hoursCount, setHoursCount] = useState(0);

  useEffect(() => {
    // Elegant number counter animation
    const duration = 1600;
    const steps = 40;
    const interval = duration / steps;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      setVehiclesCount(Math.round(progress * config.stats.vehiclesProtected));
      setHoursCount(Math.round(progress * config.stats.paintCorrectionHours));

      if (step >= steps) {
        clearInterval(timer);
        setVehiclesCount(config.stats.vehiclesProtected);
        setHoursCount(config.stats.paintCorrectionHours);
      }
    }, interval);

    return () => clearInterval(timer);
  }, [config.stats.vehiclesProtected, config.stats.paintCorrectionHours]);

  const ArrowIcon = language === 'ar' ? ArrowLeft : ArrowRight;

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] lg:min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden bg-[#0B0B0D]"
    >
      {/* Background Macro Photography with Parallax & Dark Vignette */}
      {/* <!-- REPLACE: Ultra high-resolution macro shot of crystal ceramic coating reflection on gloss obsidian sports car fender --> */}
      <div className="absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
        <img 
          src={vehicleImages.heroMacro} 
          className="w-full h-full object-cover opacity-40 transform transition-transform duration-1000 ease-out scale-105"
          alt="" 
        />
      </div>

      {/* Atmospheric Overlays */}
      <div className="absolute inset-0 z-0 bg-gradient-to-t from-[#0B0B0D] via-[#0B0B0D]/75 to-[#0B0B0D]/40" />
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(198,166,100,0.15),transparent)]" />
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_50%_50%_at_80%_60%,rgba(36,53,44,0.3),transparent)]" />

      {/* Signature Water Bead Roll Animations in Background */}
      <BeadRoll className="top-1/4 right-[15%]" delay={0.5} />
      <BeadRoll className="top-1/3 left-[20%]" delay={2.5} />

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-4xl mx-auto text-center lg:text-start lg:mx-0">
          
          {/* Official Accreditation Eyebrow Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1B1B1E]/90 border border-[#C6A664]/50 mb-6 backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.4)]">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C6A664] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#DFCA95]" />
            </span>
            <ShieldCheck className="w-4 h-4 text-[#C6A664]" />
            <span className="text-xs font-semibold tracking-wider text-[#DFCA95]">
              {config.accreditation.badgeTitle[language]}
            </span>
          </div>

          {/* Oversized Headline in Editorial Serif Typography */}
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#F3EFE7] tracking-tight leading-[1.12] mb-6">
            {language === 'ar' ? (
              <>
                حرفية النقاء البصري <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#DFCA95] via-[#C6A664] to-[#8F7238] font-normal italic">
                  وحماية أسطح السيارات الفارهة
                </span>
              </>
            ) : (
              <>
                Optical Purity <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#DFCA95] via-[#C6A664] to-[#8F7238] font-normal italic">
                  and Automotive Preservation
                </span>
              </>
            )}
          </h1>

          {/* One-Line Positioning Statement */}
          <p className="text-base sm:text-lg md:text-xl text-[#B8B3AA] max-w-2xl leading-relaxed mb-10 font-normal">
            {config.tagline[language]}
          </p>

          {/* CTAs & Accreditation Card Row */}
          <div className="flex flex-col sm:flex-row items-center gap-4 mb-14 justify-center lg:justify-start">
            
            {/* Primary CTA: Book Free Inspection */}
            <button
              id="hero-primary-cta"
              onClick={() => onOpenBooking()}
              className="w-full sm:w-auto relative overflow-hidden group px-8 py-4 rounded-xl bg-gradient-to-r from-[#8F7238] via-[#C6A664] to-[#DFCA95] text-[#0B0B0D] font-bold text-sm tracking-wider shadow-[0_6px_25px_rgba(198,166,100,0.35)] hover:shadow-[0_8px_32px_rgba(198,166,100,0.55)] transition-all transform hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#DFCA95]"
            >
              <span className="relative z-10 flex items-center justify-center gap-2.5">
                <Calendar className="w-4 h-4" />
                <span>{language === 'ar' ? 'احجز فحصاً مجهرياً مجانياً' : 'Book Free Optical Inspection'}</span>
                <ArrowIcon className="w-4 h-4 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform" />
              </span>
              <span className="absolute inset-0 bg-white/25 -translate-x-full group-hover:translate-x-full transition-transform duration-700 pointer-events-none" />
            </button>

            {/* Secondary CTA: Direct WhatsApp Consultation */}
            <a
              id="hero-whatsapp-cta"
              href={`https://wa.me/${config.whatsappNumber}?text=${encodeURIComponent(
                language === 'ar'
                  ? 'مرحباً استوديو Gtechniq، أود الاستفسار عن باقات النانوسيراميك وأفلام PPF المعتمدة لسيارتي.'
                  : 'Hello Gtechniq, I would like to inquire about Gtechniq ceramic coating and PPF packages for my vehicle.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl bg-[#1B1B1E] hover:bg-[#26262B] border border-[#26262B] hover:border-[#C6A664]/50 text-[#F3EFE7] font-semibold text-sm transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C6A664]"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400 fill-current" />
              <span>{language === 'ar' ? 'استشارة فورية عبر واتساب' : 'WhatsApp Consultation'}</span>
            </a>

            {/* Accreditation Badge Card alongside CTAs */}
            <div className="hidden md:flex items-center gap-3 px-4 py-2.5 rounded-xl bg-[#141416]/90 border border-[#26262B]">
              <div className="w-8 h-8 rounded-lg bg-[#24352C] border border-[#C6A664]/40 flex items-center justify-center text-[#DFCA95]">
                <Award className="w-4 h-4" />
              </div>
              <div className="flex flex-col text-start">
                <span className="text-[11px] font-bold text-[#F3EFE7] leading-tight">
                  {language === 'ar' ? 'ضمان رسمي 9 سنوات' : 'Official 9-Yr Warranty'}
                </span>
                <span className="text-[10px] text-[#C6A664] uppercase font-mono">
                  {config.accreditation.accreditationId}
                </span>
              </div>
            </div>

          </div>

          {/* Editorial Numbers Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8 border-t border-[#26262B]/80 text-start">
            <div className="p-3 rounded-lg bg-[#141416]/40 border border-[#26262B]/40">
              <span className="block font-display text-2xl sm:text-3xl font-bold text-[#DFCA95]">
                {config.stats.yearsAccredited}+
              </span>
              <span className="text-xs text-[#B8B3AA]">
                {language === 'ar' ? 'سنوات اعتماد Gtechniq' : 'Years Accredited'}
              </span>
            </div>

            <div className="p-3 rounded-lg bg-[#141416]/40 border border-[#26262B]/40">
              <span className="block font-display text-2xl sm:text-3xl font-bold text-[#DFCA95]">
                {vehiclesCount.toLocaleString()}+
              </span>
              <span className="text-xs text-[#B8B3AA]">
                {language === 'ar' ? 'مركبة تمت حمايتها' : 'Vehicles Protected'}
              </span>
            </div>

            <div className="p-3 rounded-lg bg-[#141416]/40 border border-[#26262B]/40">
              <span className="block font-display text-2xl sm:text-3xl font-bold text-[#DFCA95]">
                {hoursCount.toLocaleString()}+
              </span>
              <span className="text-xs text-[#B8B3AA]">
                {language === 'ar' ? 'ساعة تصحيح مجهري' : 'Correction Hours'}
              </span>
            </div>

            <div className="p-3 rounded-lg bg-[#141416]/40 border border-[#26262B]/40">
              <span className="block font-display text-2xl sm:text-3xl font-bold text-[#DFCA95]">
                {config.stats.opticalClarityPercent}%
              </span>
              <span className="text-xs text-[#B8B3AA]">
                {language === 'ar' ? 'نقاء وانعكاس بصري' : 'Optical Clarity Target'}
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
