import React, { useState } from 'react';
import { Camera, X, ExternalLink, ShieldCheck } from 'lucide-react';
import { StudioConfig, Language, GalleryItem } from '../types';
import { GlossSweep } from './GlossSweep';

interface GallerySectionProps {
  config: StudioConfig;
  language: Language;
}

export const GallerySection: React.FC<GallerySectionProps> = ({
  config,
  language,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [activeItem, setActiveItem] = useState<GalleryItem | null>(null);

  const categories = [
    { id: 'all', label: language === 'ar' ? 'الكل' : 'All Works' },
    { id: 'ceramic', label: language === 'ar' ? 'نانوسيراميك Gtechniq' : 'Ceramic Coating' },
    { id: 'ppf', label: language === 'ar' ? 'أفلام PPF' : 'PPF Armor' },
    { id: 'correction', label: language === 'ar' ? 'تصحيح الطلاء' : 'Paint Correction' },
    { id: 'exotic', label: language === 'ar' ? 'سوبركار وبسبوك' : 'Exotics & Bespoke' },
  ];

  const filteredItems = activeCategory === 'all'
    ? config.gallery
    : config.gallery.filter((item) => item.category === activeCategory);

  return (
    <section id="gallery" className="py-24 bg-[#0B0B0D] border-t border-[#26262B] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 text-[#C6A664] text-xs font-bold tracking-widest uppercase mb-2">
              <Camera className="w-4 h-4" />
              <span>{language === 'ar' ? 'معرض الأعمال والنتائج' : 'Automotive Atelier Portfolio'}</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#F3EFE7]">
              {language === 'ar' ? 'لمعان وانعكاسات تحت أضواء الاستوديو' : 'Recent Atelier Commissions'}
            </h2>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-gradient-to-r from-[#8F7238] to-[#C6A664] text-[#0B0B0D] shadow-md'
                    : 'bg-[#1B1B1E] text-[#B8B3AA] hover:text-[#F3EFE7] border border-[#26262B]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid with Gloss-Sweep on each card */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveItem(item)}
              className="cursor-pointer group flex flex-col"
            >
              <GlossSweep className="rounded-2xl border border-[#26262B] bg-[#141416] p-2.5 shadow-xl hover:border-[#C6A664]/60 transition-all flex flex-col justify-between h-full">
                {/* Car Image with High Clarity */}
                <div className="relative aspect-[16/10] overflow-hidden rounded-xl bg-[#1B1B1E] mb-3.5">
                  <img
                    src={item.imageUrl}
                    alt={item.imageAlt[language]}
                    loading="lazy"
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0D]/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                  
                  {/* Vehicle Model Pill Overlay */}
                  <div className="absolute top-3 left-3 rtl:left-auto rtl:right-3 px-3 py-1 rounded-md bg-[#0B0B0D]/80 backdrop-blur-md border border-[#C6A664]/40 text-[11px] font-mono font-bold text-[#DFCA95]">
                    {item.vehicle}
                  </div>

                  {/* Expand Camera Icon */}
                  <div className="absolute bottom-3 right-3 rtl:right-auto rtl:left-3 p-1.5 rounded-md bg-[#0B0B0D]/70 border border-[#26262B] text-[#DFCA95] opacity-0 group-hover:opacity-100 transition-opacity">
                    <Camera className="w-4 h-4" />
                  </div>
                </div>

                {/* Card Information - Clearly refers to the specific car and treatment */}
                <div className="px-1.5 pb-1.5 flex flex-col justify-between flex-1">
                  <div>
                    <span className="text-[10px] uppercase font-bold tracking-wider text-[#C6A664] block mb-1">
                      {item.treatmentSpecs[language]}
                    </span>
                    <h3 className="text-sm sm:text-base font-bold text-[#F3EFE7] leading-snug">
                      {item.title[language]}
                    </h3>
                    <p className="text-xs text-[#B8B3AA] mt-2 leading-relaxed line-clamp-2">
                      {item.description[language]}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-[#26262B] flex items-center justify-between text-[11px]">
                    <span className="text-[#DFCA95] font-semibold flex items-center gap-1">
                      <ShieldCheck className="w-3.5 h-3.5 text-[#C6A664]" />
                      {language === 'ar' ? 'فحص واستلام معتمد' : 'Certified Inspection'}
                    </span>
                    <span className="text-[#B8B3AA] group-hover:text-[#F3EFE7] transition-colors">
                      {language === 'ar' ? 'عرض التفاصيل ←' : 'View Details →'}
                    </span>
                  </div>
                </div>
              </GlossSweep>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {activeItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setActiveItem(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-[#141416] border border-[#26262B] rounded-2xl overflow-hidden p-4 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveItem(null)}
              className="absolute top-6 right-6 z-10 p-2 rounded-full bg-black/70 text-white hover:bg-black transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="aspect-[16/9] w-full rounded-xl overflow-hidden bg-black mb-4">
              <img
                src={activeItem.imageUrl}
                alt={activeItem.imageAlt[language]}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="space-y-3 px-1">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded-md bg-[#1B1B1E] border border-[#C6A664]/50 font-mono text-xs font-bold text-[#DFCA95]">
                    {activeItem.vehicle}
                  </span>
                  <span className="text-xs text-[#C6A664] font-semibold">
                    {activeItem.treatmentSpecs[language]}
                  </span>
                </div>

                <span className="px-3 py-1 rounded-full bg-[#24352C] border border-[#C6A664]/40 text-xs text-[#DFCA95] font-semibold flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#C6A664]" />
                  Gtechniq Accredited
                </span>
              </div>

              <h2 className="font-display text-xl sm:text-2xl font-bold text-[#F3EFE7]">
                {activeItem.title[language]}
              </h2>

              <p className="text-sm text-[#B8B3AA] leading-relaxed">
                {activeItem.description[language]}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
