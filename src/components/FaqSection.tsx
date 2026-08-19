import React, { useState } from 'react';
import { HelpCircle, ChevronDown } from 'lucide-react';
import { StudioConfig, Language } from '../types';

interface FaqSectionProps {
  config: StudioConfig;
  language: Language;
}

export const FaqSection: React.FC<FaqSectionProps> = ({
  config,
  language,
}) => {
  const [openId, setOpenId] = useState<string | null>(config.faqs[0]?.id || null);

  const toggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-24 bg-[#0B0B0D] border-t border-[#26262B] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-[#C6A664] text-xs font-bold tracking-widest uppercase mb-3">
            <HelpCircle className="w-4 h-4" />
            <span>{language === 'ar' ? 'الأسئلة الشائعة والمعايير' : 'Technical FAQs & Knowledge'}</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#F3EFE7]">
            {language === 'ar' ? 'كل ما تود معرفته عن حماية الطلاء' : 'Frequently Asked Inquiries'}
          </h2>
          <p className="text-sm text-[#B8B3AA] mt-2">
            {language === 'ar'
              ? 'إجابات شفافة حول الضمان، المعالجة، والفرق بين النانوسيراميك وأفلام الحماية.'
              : 'Clear answers regarding warranty registration, cure times, and surface chemistry.'}
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {config.faqs.map((faq) => {
            const isOpen = openId === faq.id;

            return (
              <div
                key={faq.id}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'bg-[#1B1B1E] border-[#C6A664]/50 shadow-[0_8px_24px_rgba(0,0,0,0.5)]'
                    : 'bg-[#141416] border-[#26262B] hover:border-[#26262B]/80'
                }`}
              >
                <button
                  onClick={() => toggle(faq.id)}
                  className="w-full p-6 text-start flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C6A664] cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="font-display text-base sm:text-lg font-bold text-[#F3EFE7]">
                    {faq.question[language]}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full bg-[#141416] border border-[#26262B] text-[#DFCA95] flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 bg-[#24352C] border-[#C6A664]/40' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-2 text-xs sm:text-sm text-[#B8B3AA] leading-relaxed border-t border-[#26262B]/60 animate-in fade-in duration-300">
                    {faq.answer[language]}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
