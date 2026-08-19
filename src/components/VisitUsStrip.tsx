import React from 'react';
import { Accessibility, Coffee, CreditCard, Wind, Sparkles, Building2 } from 'lucide-react';
import { StudioConfig, Language } from '../types';

interface VisitUsStripProps {
  config: StudioConfig;
  language: Language;
}

export const VisitUsStrip: React.FC<VisitUsStripProps> = ({
  config,
  language,
}) => {
  const getAmenityIcon = (icon: string) => {
    switch (icon) {
      case 'Accessibility':
        return <Accessibility className="w-5 h-5" />;
      case 'Coffee':
        return <Coffee className="w-5 h-5" />;
      case 'CreditCard':
        return <CreditCard className="w-5 h-5" />;
      case 'Wind':
        return <Wind className="w-5 h-5" />;
      case 'Sparkle':
      default:
        return <Sparkles className="w-5 h-5" />;
    }
  };

  return (
    <section id="amenities" className="py-16 bg-[#0B0B0D] border-t border-[#26262B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-10">
          <div>
            <div className="flex items-center gap-2 text-[#C6A664] text-xs font-bold tracking-widest uppercase mb-1">
              <Building2 className="w-4 h-4" />
              <span>{language === 'ar' ? 'مرافق وخدمات الاستوديو' : 'Atelier Amenities & Hospitality'}</span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#F3EFE7]">
              {language === 'ar' ? 'ماذا تتوقع عند زيارتنا' : 'What to Expect on Your Visit'}
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#B8B3AA] max-w-md">
            {language === 'ar'
              ? 'مرافق عصرية مجهزة لراحتك التامة أثناء فحص واستلام سيارتك.'
              : 'Curated environment designed for comfort during inspection and handover.'}
          </p>
        </div>

        {/* 5 Amenities Thin Line Strip */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {config.amenities.map((amenity) => (
            <div
              key={amenity.id}
              className="p-5 rounded-xl bg-[#141416] border border-[#26262B] hover:border-[#C6A664]/40 transition-colors"
            >
              <div className="w-10 h-10 rounded-lg bg-[#1B1B1E] border border-[#26262B] text-[#DFCA95] flex items-center justify-center mb-3.5">
                {getAmenityIcon(amenity.icon)}
              </div>
              <h3 className="text-xs font-bold text-[#F3EFE7] mb-1.5 leading-snug">
                {amenity.title[language]}
              </h3>
              <p className="text-[11px] text-[#B8B3AA] leading-relaxed">
                {amenity.description[language]}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
