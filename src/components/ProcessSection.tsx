import React from 'react';
import { Scan, Sparkles, Wand2, ShieldCheck, Sun, Award, Clock, ArrowLeft, ArrowRight } from 'lucide-react';
import { StudioConfig, Language, ProcessStep } from '../types';
import { GlossSweep } from './GlossSweep';

interface ProcessSectionProps {
  config: StudioConfig;
  language: Language;
  onOpenBooking: () => void;
}

export const ProcessSection: React.FC<ProcessSectionProps> = ({
  config,
  language,
  onOpenBooking,
}) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Scan':
        return <Scan className="w-5 h-5" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5" />;
      case 'Wand2':
        return <Wand2 className="w-5 h-5" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5" />;
      case 'Sun':
        return <Sun className="w-5 h-5" />;
      case 'Award':
      default:
        return <Award className="w-5 h-5" />;
    }
  };

  return (
    <section id="process" className="py-24 bg-[#141416] border-t border-[#26262B] relative">
      {/* Subtle background ambient light */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_40%_at_50%_10%,rgba(36,53,44,0.25),transparent)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 text-[#C6A664] text-xs font-bold tracking-widest uppercase mb-3">
            <span className="w-6 h-px bg-[#C6A664]" />
            <span>{language === 'ar' ? 'بروتوكول المعمل المعتمد' : 'Accredited Laboratory Protocol'}</span>
            <span className="w-6 h-px bg-[#C6A664]" />
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F3EFE7] tracking-tight">
            {language === 'ar'
              ? 'مراحل العناية والترميم من الفحص إلى التسليم'
              : 'The Six Stages of Surface Perfection'}
          </h2>
          <p className="text-[#B8B3AA] text-sm sm:text-base mt-4">
            {language === 'ar'
              ? 'تسلسل علمي صارم يضمن عدم حبس أي عيب تحت طبقة الحماية وتثبيت الروابط الكيميائية لأطول عمر افتراضي ممكن.'
              : 'A strict chronological sequence guaranteeing zero trapped defects and permanent chemical cross-linking.'}
          </p>
        </div>

        {/* Process Steps Cards Grid (Earned 01 - 06 Sequence) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {config.process.map((step, idx) => (
            <GlossSweep
              key={step.stepNumber}
              className="p-7 rounded-2xl bg-[#1B1B1E] border border-[#26262B] hover:border-[#C6A664]/50 transition-all flex flex-col justify-between"
            >
              <div>
                {/* Step Number & Timeframe Badge */}
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-3">
                    <span className="font-display text-2xl font-bold text-[#DFCA95]">
                      {step.stepNumber}
                    </span>
                    <div className="w-8 h-8 rounded-lg bg-[#24352C] border border-[#C6A664]/30 text-[#DFCA95] flex items-center justify-center">
                      {getIcon(step.iconName)}
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-1 px-2.5 py-1 rounded-md bg-[#141416] border border-[#26262B] text-[11px] font-mono text-[#B8B3AA]">
                    <Clock className="w-3 h-3 text-[#C6A664]" />
                    <span>{step.timeframe[language]}</span>
                  </div>
                </div>

                <h3 className="font-display text-lg font-bold text-[#F3EFE7] mb-2.5">
                  {step.title[language]}
                </h3>

                <p className="text-xs sm:text-sm text-[#B8B3AA] leading-relaxed mb-5">
                  {step.description[language]}
                </p>
              </div>

              {/* Sub-details checklist */}
              <div className="pt-4 border-t border-[#26262B] space-y-2">
                {step.details.map((detail, dIdx) => (
                  <div key={dIdx} className="flex items-start gap-2 text-xs text-[#DFCA95]/90">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C6A664] mt-1.5 shrink-0" />
                    <span>{detail[language]}</span>
                  </div>
                ))}
              </div>
            </GlossSweep>
          ))}
        </div>

      </div>
    </section>
  );
};
