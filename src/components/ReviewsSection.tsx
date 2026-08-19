import React from 'react';
import { Star, MessageSquare, ShieldAlert, Sparkles } from 'lucide-react';
import { StudioConfig, Language } from '../types';
import { GlossSweep } from './GlossSweep';

interface ReviewsSectionProps {
  config: StudioConfig;
  language: Language;
}

export const ReviewsSection: React.FC<ReviewsSectionProps> = ({
  config,
  language,
}) => {
  return (
    <section id="reviews" className="py-24 bg-[#141416] border-t border-[#26262B] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with clear placeholder notice */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-[#C6A664] text-xs font-bold tracking-widest uppercase mb-3">
            <MessageSquare className="w-4 h-4" />
            <span>{language === 'ar' ? 'آراء وتجارب العملاء' : 'Client Experience'}</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#F3EFE7]">
            {language === 'ar' ? 'ثقة وموثوقية أصحاب المركبات الفارهة' : 'Preservation Testimonials'}
          </h2>
          
          {/* Explicit Notice stating this is placeholder copy */}
          <div className="mt-4 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1B1B1E] border border-amber-500/30 text-[11px] text-amber-300/80">
            <ShieldAlert className="w-3.5 h-3.5 text-amber-400" />
            <span>
              {language === 'ar'
                ? 'ملاحظة: نماذج توضيحية لآراء العملاء - يتم ربط التقييمات الحقيقية من Google مع إطلاق الاستوديو'
                : 'Template Notice: Sample testimonial format - to be linked to verified Google Reviews upon studio launch'}
            </span>
          </div>
        </div>

        {/* Reviews Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {config.reviews.map((rev) => (
            <GlossSweep
              key={rev.id}
              className="p-7 rounded-2xl bg-[#1B1B1E] border border-[#26262B] flex flex-col justify-between"
            >
              <div>
                {/* 5 Stars row */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#DFCA95] text-[#DFCA95]" />
                  ))}
                </div>

                {/* Comment quote */}
                <p className="text-xs sm:text-sm text-[#F3EFE7]/90 leading-relaxed italic mb-6">
                  "{rev.comment[language]}"
                </p>
              </div>

              {/* Author & Service Footer */}
              <div className="pt-4 border-t border-[#26262B] flex items-center justify-between">
                <div>
                  <h4 className="text-xs font-bold text-[#F3EFE7]">
                    {rev.author}
                  </h4>
                  <span className="text-[11px] text-[#C6A664] block">
                    {rev.vehicle}
                  </span>
                </div>
                <span className="text-[10px] text-[#B8B3AA] font-mono">
                  {rev.service[language]}
                </span>
              </div>
            </GlossSweep>
          ))}
        </div>

      </div>
    </section>
  );
};
