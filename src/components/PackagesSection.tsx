import React, { useState } from 'react';
import { Award, ArrowRight, ArrowLeft, Calendar, CheckCircle2, ShieldCheck } from 'lucide-react';
import { StudioConfig, Language, PriceTier } from '../types';
import { GlossSweep } from './GlossSweep';

interface PackagesSectionProps {
  config: StudioConfig;
  language: Language;
  onOpenBooking: (serviceId?: string, tierId?: string) => void;
}

type VehicleClass = 'sedan' | 'suv' | 'exotic';

export const PackagesSection: React.FC<PackagesSectionProps> = ({
  config,
  language,
  onOpenBooking,
}) => {
  const [vehicleClass, setVehicleClass] = useState<VehicleClass>('sedan');
  const ArrowIcon = language === 'ar' ? ArrowLeft : ArrowRight;

  const getPrice = (tier: PriceTier) => {
    switch (vehicleClass) {
      case 'suv':
        return tier.suvPrice;
      case 'exotic':
        return tier.exoticPrice;
      case 'sedan':
      default:
        return tier.sedanPrice;
    }
  };

  const getVehicleLabel = () => {
    switch (vehicleClass) {
      case 'suv':
        return language === 'ar' ? 'سعر الجيب والـ SUV' : 'SUV & 4x4 Tier';
      case 'exotic':
        return language === 'ar' ? 'سعر السوبركار والسيارات الفارهة' : 'Exotic & Supercar Tier';
      case 'sedan':
      default:
        return language === 'ar' ? 'سعر سيارات السيدان والكوبيه' : 'Sedan & Coupe Tier';
    }
  };

  return (
    <section id="packages" className="py-20 sm:py-24 bg-[#141416] border-t border-[#26262B] relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_40%_at_50%_90%,rgba(36,53,44,0.3),transparent)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 text-[#C6A664] text-xs font-bold tracking-widest uppercase mb-3">
            <Award className="w-4 h-4" />
            <span>{language === 'ar' ? 'باقات الحماية والضمان المعتمد' : 'Certified Protection Tiers'}</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F3EFE7] tracking-tight">
            {language === 'ar'
              ? 'خيارات صُممت لتلائم طراز سيارتك ونمط قيادتك'
              : 'Tailored Preservation Packages'}
          </h2>
          <p className="text-[#B8B3AA] text-xs sm:text-base mt-3 max-w-2xl mx-auto leading-relaxed">
            {language === 'ar'
              ? 'أسعار شفافة ومحددة تشمل كافة مراحل الفحص والتحضير والتطبيق مع ضمان رسمي موثق.'
              : 'Transparent atelier pricing including ultrasonic depth inspection, multi-stage prep, and registered warranty.'}
          </p>
        </div>

        {/* Vehicle Class Segmented Switcher (Fully Responsive for Mobile) */}
        <div className="flex justify-center mb-12 sm:mb-14 px-2">
          <div className="w-full max-w-md grid grid-cols-3 p-1.5 rounded-xl bg-[#1B1B1E] border border-[#26262B] gap-1">
            <button
              onClick={() => setVehicleClass('sedan')}
              className={`py-2 px-2 sm:px-4 rounded-lg text-[11px] sm:text-xs font-bold transition-all text-center truncate ${
                vehicleClass === 'sedan'
                  ? 'bg-gradient-to-r from-[#8F7238] to-[#C6A664] text-[#0B0B0D] shadow-md'
                  : 'text-[#B8B3AA] hover:text-[#F3EFE7]'
              }`}
            >
              {language === 'ar' ? 'سيدان / كوبيه' : 'Sedan / Coupe'}
            </button>
            <button
              onClick={() => setVehicleClass('suv')}
              className={`py-2 px-2 sm:px-4 rounded-lg text-[11px] sm:text-xs font-bold transition-all text-center truncate ${
                vehicleClass === 'suv'
                  ? 'bg-gradient-to-r from-[#8F7238] to-[#C6A664] text-[#0B0B0D] shadow-md'
                  : 'text-[#B8B3AA] hover:text-[#F3EFE7]'
              }`}
            >
              {language === 'ar' ? 'جيب / SUV' : 'SUV / 4x4'}
            </button>
            <button
              onClick={() => setVehicleClass('exotic')}
              className={`py-2 px-2 sm:px-4 rounded-lg text-[11px] sm:text-xs font-bold transition-all text-center truncate ${
                vehicleClass === 'exotic'
                  ? 'bg-gradient-to-r from-[#8F7238] to-[#C6A664] text-[#0B0B0D] shadow-md'
                  : 'text-[#B8B3AA] hover:text-[#F3EFE7]'
              }`}
            >
              {language === 'ar' ? 'سوبركار / نادر' : 'Exotic'}
            </button>
          </div>
        </div>

        {/* Pricing Tiers Grid (Responsive 1-col on mobile, 3-col on lg) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch pt-4">
          {config.pricingTiers.map((tier) => {
            const isSignature = tier.isPopular;

            return (
              <GlossSweep
                key={tier.id}
                className={`relative flex flex-col justify-between p-6 sm:p-8 rounded-2xl transition-all duration-300 ${
                  isSignature
                    ? 'bg-[#1B1B1E] border-2 border-[#C6A664] shadow-[0_15px_40px_rgba(198,166,100,0.25)] order-first lg:order-none'
                    : 'bg-[#1B1B1E]/90 border border-[#26262B] hover:border-[#C6A664]/40'
                }`}
              >
                {/* Prominent Official Flagship Yellow/Gold Banner (Clearly visible, never clipped) */}
                {isSignature && (
                  <div className="-mx-6 -mt-6 sm:-mx-8 sm:-mt-8 mb-6 py-2.5 px-4 bg-gradient-to-r from-[#8F7238] via-[#C6A664] to-[#DFCA95] text-[#0B0B0D] text-[11px] sm:text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-md">
                    <Award className="w-4 h-4 shrink-0 text-[#0B0B0D]" />
                    <span className="font-extrabold">{language === 'ar' ? 'الخيار الأكثر طلباً والمعتمد رسمياً' : 'Official Flagship Choice'}</span>
                  </div>
                )}

                <div>
                  {/* Tier Title & Coverage Badge */}
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <div>
                      <h3 className="font-display text-xl sm:text-2xl font-bold text-[#F3EFE7]">
                        {tier.name[language]}
                      </h3>
                      <p className="text-xs text-[#B8B3AA] mt-1 font-medium leading-relaxed">
                        {tier.subtitle[language]}
                      </p>
                    </div>

                    <div className="px-2.5 py-1.5 rounded-lg bg-[#24352C] border border-[#C6A664]/40 text-center shrink-0">
                      <span className="block font-display text-sm font-bold text-[#DFCA95]">
                        {tier.coverageYears}
                      </span>
                      <span className="text-[9px] text-[#F3EFE7] uppercase block">
                        {language === 'ar' ? 'سنوات' : 'Years'}
                      </span>
                    </div>
                  </div>

                  {/* Price Block */}
                  <div className="py-4 sm:py-5 border-y border-[#26262B] my-5 sm:my-6">
                    <div className="flex flex-wrap items-baseline gap-1.5">
                      <span className="font-display text-3xl sm:text-4xl font-bold text-[#DFCA95]">
                        {getPrice(tier)}
                      </span>
                      <span className="text-xs font-semibold text-[#B8B3AA]">
                        {language === 'ar' ? 'ريال سعودي' : 'SAR'}
                      </span>
                    </div>
                    <span className="text-[11px] text-[#B8B3AA] block mt-1">
                      {getVehicleLabel()}
                    </span>
                    <div className="mt-2.5 inline-block px-2.5 py-1 rounded bg-[#141416] text-[10px] sm:text-[11px] font-mono text-[#C6A664]">
                      {tier.gtechniqGrade[language]}
                    </div>
                  </div>

                  {/* Inclusions list */}
                  <div className="space-y-2.5 sm:space-y-3 mb-6 sm:mb-8">
                    <span className="text-xs uppercase font-bold tracking-wider text-[#F3EFE7] block">
                      {language === 'ar' ? 'ما تتضمنه الباقة:' : "What's included:"}
                    </span>
                    {tier.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2.5 text-xs text-[#F3EFE7]/90 leading-relaxed">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#C6A664] shrink-0 mt-0.5" />
                        <span>{feature[language]}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer CTA Button */}
                <div className="pt-4 sm:pt-6 border-t border-[#26262B]">
                  <button
                    onClick={() => onOpenBooking(undefined, tier.id)}
                    className={`w-full py-3 sm:py-3.5 px-4 rounded-xl font-bold text-xs tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer ${
                      isSignature
                        ? 'bg-gradient-to-r from-[#8F7238] via-[#C6A664] to-[#DFCA95] text-[#0B0B0D] hover:shadow-[0_4px_20px_rgba(198,166,100,0.4)]'
                        : 'bg-[#141416] hover:bg-[#26262B] border border-[#26262B] hover:border-[#C6A664]/50 text-[#F3EFE7]'
                    }`}
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{language === 'ar' ? 'حجز موعد لهذه الباقة' : 'Reserve this Tier'}</span>
                    <ArrowIcon className="w-3.5 h-3.5" />
                  </button>
                  <p className="text-[10px] sm:text-[11px] text-center text-[#B8B3AA] mt-2.5">
                    {tier.bestFor[language]}
                  </p>
                </div>

              </GlossSweep>
            );
          })}
        </div>

      </div>
    </section>
  );
};
