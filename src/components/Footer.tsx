import React from 'react';
import { Instagram, ShieldCheck, MapPin, Phone, Mail, ArrowUp } from 'lucide-react';
import { StudioConfig, Language } from '../types';

interface FooterProps {
  config: StudioConfig;
  language: Language;
}

export const Footer: React.FC<FooterProps> = ({
  config,
  language,
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="main-footer" className="bg-[#0B0B0D] border-t border-[#26262B] pt-16 pb-12 text-[#B8B3AA] text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#26262B]">
          
          {/* Brand & Accreditation Column - Gtechniq Clear & Visible */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl border-2 border-[#C6A664] flex items-center justify-center bg-[#1B1B1E] shadow-sm">
                <span className="font-display text-sm font-black text-[#DFCA95]">G</span>
              </div>
              <span className="font-display text-xl tracking-wider font-extrabold text-[#F3EFE7]">
                GTECHNIQ
              </span>
            </div>

            <p className="text-xs text-[#B8B3AA] leading-relaxed max-w-sm">
              {config.tagline[language]}
            </p>

            <div className="inline-flex items-center gap-2 p-2.5 rounded-lg bg-[#141416] border border-[#26262B]">
              <ShieldCheck className="w-4 h-4 text-[#C6A664] shrink-0" />
              <div className="text-[11px]">
                <span className="font-bold text-[#F3EFE7] block">
                  {config.accreditation.badgeTitle[language]}
                </span>
                <span className="text-[#C6A664] font-mono text-[10px]">
                  ID: {config.accreditation.accreditationId}
                </span>
              </div>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-bold uppercase tracking-wider text-[#F3EFE7] text-xs">
              {language === 'ar' ? 'أقسام الاستوديو' : 'Navigation'}
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="hover:text-[#DFCA95] transition-colors">
                  {language === 'ar' ? 'الخدمات وتفاصيل الطلاء' : 'Services & Protection'}
                </a>
              </li>
              <li>
                <a href="#accreditation" className="hover:text-[#DFCA95] transition-colors">
                  {language === 'ar' ? 'شهادة اعتماد Gtechniq' : 'Gtechniq Accreditation'}
                </a>
              </li>
              <li>
                <a href="#process" className="hover:text-[#DFCA95] transition-colors">
                  {language === 'ar' ? 'مراحل العمل الستة' : 'The 6-Stage Process'}
                </a>
              </li>
              <li>
                <a href="#comparison" className="hover:text-[#DFCA95] transition-colors">
                  {language === 'ar' ? 'المقارنة البصرية قبل وبعد' : 'Before & After Slider'}
                </a>
              </li>
              <li>
                <a href="#packages" className="hover:text-[#DFCA95] transition-colors">
                  {language === 'ar' ? 'الباقات والأسعار' : 'Pricing Packages'}
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-[#DFCA95] transition-colors">
                  {language === 'ar' ? 'الأسئلة الشائعة' : 'Technical FAQs'}
                </a>
              </li>
            </ul>
          </div>

          {/* Social & Contact Media (Pure Logos Only: Instagram, Snapchat, TikTok) */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="font-bold uppercase tracking-wider text-[#F3EFE7] text-xs">
              {language === 'ar' ? 'منصات التواصل الاجتماعي' : 'Official Social Media'}
            </h4>
            <p className="text-xs text-[#B8B3AA]">
              {config.address[language]}, {config.city[language]}
            </p>
            
            {/* Pure Social Logos Only */}
            <div className="flex items-center gap-3 pt-2">
              {/* Instagram Logo */}
              <a
                href={config.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-[#141416] border border-[#26262B] text-[#F3EFE7] hover:text-[#DFCA95] hover:border-[#C6A664]/60 hover:bg-[#1B1B1E] flex items-center justify-center transition-all shadow-sm group"
                aria-label="Instagram"
                title="Instagram"
              >
                <Instagram className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>

              {/* Snapchat Logo */}
              <a
                href={config.snapchatUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-[#141416] border border-[#26262B] text-[#F3EFE7] hover:text-[#DFCA95] hover:border-[#C6A664]/60 hover:bg-[#1B1B1E] flex items-center justify-center transition-all shadow-sm group"
                aria-label="Snapchat"
                title="Snapchat"
              >
                <svg className="w-5 h-5 fill-current group-hover:scale-110 transition-transform" viewBox="0 0 24 24">
                  <path d="M12.002 2c-3.58 0-6.19 2.518-6.19 5.89 0 1.25.43 2.58 1.09 3.59.18.28.1.58-.14.78-.45.38-1.28.79-2.31 1.06-.39.1-.6.44-.5.82.16.63.78 1.06 1.48 1.06.31 0 .63-.08.92-.22.37-.18.82-.04 1.04.31.57.94 1.34 1.63 2.37 2.04.28.11.45.38.42.68-.08.77-.32 1.54-.78 2.21-.18.26-.08.62.2.77.7.38 1.53.59 2.4.59.88 0 1.7-.21 2.4-.59.28-.15.38-.51.2-.77-.46-.67-.7-1.44-.78-2.21-.03-.3.14-.57.42-.68 1.03-.41 1.8-1.1 2.37-2.04.22-.35.67-.49 1.04-.31.29.14.61.22.92.22.7 0 1.32-.43 1.48-1.06.1-.38-.11-.72-.5-.82-1.03-.27-1.86-.68-2.31-1.06-.24-.2-.32-.5-.14-.78.66-1.01 1.09-2.34 1.09-3.59 0-3.372-2.61-5.89-6.19-5.89z" />
                </svg>
              </a>

              {/* TikTok Logo */}
              <a
                href={config.tiktokUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-[#141416] border border-[#26262B] text-[#F3EFE7] hover:text-[#DFCA95] hover:border-[#C6A664]/60 hover:bg-[#1B1B1E] flex items-center justify-center transition-all shadow-sm group"
                aria-label="TikTok"
                title="TikTok"
              >
                <svg className="w-5 h-5 fill-current group-hover:scale-110 transition-transform" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.298-.002.595.042.88.13V9.4a6.33 6.33 0 0 0-1-.08A6.34 6.34 0 0 0 3 15.66a6.34 6.34 0 0 0 10.82 4.47 6.3 6.3 0 0 0 1.95-4.47V8.4a8.28 8.28 0 0 0 4.82 1.54v-3.25z" />
                </svg>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom copyright & back to top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[11px] text-[#B8B3AA]">
            © {new Date().getFullYear()} {config.studioName[language]}. {language === 'ar' ? 'جميع الحقوق محفوظة.' : 'All rights reserved.'}
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-xs text-[#B8B3AA] hover:text-[#DFCA95] transition-colors cursor-pointer"
          >
            <span>{language === 'ar' ? 'العودة للأعلى' : 'Back to top'}</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
