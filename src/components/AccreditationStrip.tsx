import React from 'react';
import { ShieldCheck, Award, FileCheck2, Cpu, CheckCircle2, ExternalLink } from 'lucide-react';
import { StudioConfig, Language } from '../types';
import { GlossSweep } from './GlossSweep';

interface AccreditationStripProps {
  config: StudioConfig;
  language: Language;
  onOpenBooking: () => void;
}

export const AccreditationStrip: React.FC<AccreditationStripProps> = ({
  config,
  language,
  onOpenBooking,
}) => {
  return (
    <section
      id="accreditation"
      className="relative py-16 bg-[#141416] border-y border-[#26262B] overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,rgba(36,53,44,0.35),transparent)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Strip Header */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 pb-10 border-b border-[#26262B]">
          <div>
            <div className="flex items-center gap-2 text-[#C6A664] text-xs font-bold tracking-widest uppercase mb-2">
              <Award className="w-4 h-4" />
              <span>{language === 'ar' ? 'الاعتماد الحصري الرسمي' : 'Official Exclusive Credential'}</span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-[#F3EFE7]">
              {config.accreditation.badgeTitle[language]}
            </h2>
            <p className="text-sm text-[#B8B3AA] mt-2 max-w-2xl">
              {config.accreditation.badgeSubtitle[language]}
            </p>
          </div>

          {/* Gtechniq Credential Mark Card */}
          <div className="flex items-center gap-4 p-4 rounded-xl bg-[#1B1B1E] border border-[#C6A664]/40 shadow-[0_8px_24px_rgba(0,0,0,0.4)]">
            <div className="flex flex-col items-center justify-center px-4 py-2 rounded-lg bg-[#24352C] border border-[#C6A664]/30">
              <span className="font-display text-xl font-bold text-[#DFCA95]">9</span>
              <span className="text-[10px] text-[#F3EFE7] uppercase tracking-wider font-semibold">
                {language === 'ar' ? 'سنوات ضمان' : 'Years Warranty'}
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-xs text-[#B8B3AA] font-mono">
                ID: {config.accreditation.accreditationId}
              </span>
              <span className="text-sm font-bold text-[#F3EFE7]">
                Gtechniq Smart Surface Science
              </span>
              <span className="text-[11px] text-[#C6A664]">
                {language === 'ar' ? 'معتمد للمركبات الفارهة والنادرة' : 'Accredited for Supercars & Exotics'}
              </span>
            </div>
          </div>
        </div>

        {/* 3 Refined Feature Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-10">
          {config.accreditation.details.map((detail, idx) => (
            <GlossSweep
              key={idx}
              className="p-6 rounded-xl bg-[#1B1B1E]/80 border border-[#26262B] hover:border-[#C6A664]/40 transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-lg bg-[#24352C]/60 border border-[#C6A664]/30 text-[#DFCA95] shrink-0 mt-0.5">
                  {idx === 0 && <Cpu className="w-5 h-5" />}
                  {idx === 1 && <FileCheck2 className="w-5 h-5" />}
                  {idx === 2 && <ShieldCheck className="w-5 h-5" />}
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-mono text-[#C6A664] mb-1">
                    {language === 'ar' ? `المعيار 0${idx + 1}` : `STANDARD 0${idx + 1}`}
                  </span>
                  <p className="text-sm text-[#F3EFE7] leading-relaxed font-medium">
                    {detail[language]}
                  </p>
                </div>
              </div>
            </GlossSweep>
          ))}
        </div>

      </div>
    </section>
  );
};
