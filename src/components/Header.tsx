import React, { useState, useEffect } from 'react';
import { Globe, Phone, MessageCircle, Menu, X, Shield, Clock } from 'lucide-react';
import { StudioConfig, Language } from '../types';

interface HeaderProps {
  config: StudioConfig;
  language: Language;
  onToggleLanguage: () => void;
  onOpenBooking: (serviceId?: string, tierId?: string) => void;
  isOpenNow: boolean;
}

export const Header: React.FC<HeaderProps> = ({
  config,
  language,
  onToggleLanguage,
  onOpenBooking,
  isOpenNow,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#services', label: language === 'ar' ? 'الخدمات' : 'Services' },
    { href: '#accreditation', label: language === 'ar' ? 'اعتماد Gtechniq' : 'Gtechniq' },
    { href: '#process', label: language === 'ar' ? 'مراحل العمل' : 'The Process' },
    { href: '#comparison', label: language === 'ar' ? 'النتائج البصرية' : 'Before & After' },
    { href: '#packages', label: language === 'ar' ? 'الباقات' : 'Packages' },
    { href: '#gallery', label: language === 'ar' ? 'المعرض' : 'Gallery' },
    { href: '#contact', label: language === 'ar' ? 'الموقع والمواعيد' : 'Contact & Hours' },
  ];

  return (
    <header
      id="main-header"
      className={`fixed top-0 inset-x-0 z-40 transition-all duration-500 ${
        isScrolled
          ? 'bg-[#141416]/95 backdrop-blur-md border-b border-[#26262B] py-3.5 shadow-[0_10px_30px_rgba(0,0,0,0.5)]'
          : 'bg-gradient-to-b from-[#0B0B0D]/90 via-[#0B0B0D]/40 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo & Brand Wordmark - Gtechniq Clear & Visible */}
          <a
            href="#"
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C6A664] rounded-sm"
          >
            <div className="relative w-10 h-10 rounded-xl border-2 border-[#C6A664] flex items-center justify-center bg-[#1B1B1E] group-hover:border-[#DFCA95] transition-all shadow-[0_2px_10px_rgba(198,166,100,0.3)]">
              <span className="font-display text-lg font-black text-[#DFCA95]">G</span>
              <div className="absolute -inset-0.5 rounded-xl border border-[#C6A664]/30 scale-105 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <div className="flex flex-col">
              <span className="font-display text-xl sm:text-2xl tracking-wider font-extrabold text-[#F3EFE7] group-hover:text-[#DFCA95] transition-colors leading-none">
                GTECHNIQ
              </span>
              <span className="text-[10px] tracking-[0.2em] text-[#C6A664] uppercase font-bold mt-1">
                {language === 'ar' ? 'استوديو معتمد رسمي' : 'Accredited Studio'}
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative py-1 text-sm text-[#F3EFE7]/85 hover:text-[#DFCA95] transition-colors font-medium group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C6A664]"
              >
                {link.label}
                <span className="absolute bottom-0 inset-x-0 h-0.5 bg-[#C6A664] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center" />
              </a>
            ))}
          </nav>

          {/* Actions: Live Status, Language Toggle, Phone/WhatsApp CTA */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Live studio status pill */}
            <div className="hidden xl:flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#1B1B1E] border border-[#26262B] text-xs">
              <span className={`w-2 h-2 rounded-full ${isOpenNow ? 'bg-emerald-500 animate-pulse' : 'bg-amber-500'}`} />
              <span className="text-[#B8B3AA] text-[11px]">
                {isOpenNow
                  ? (language === 'ar' ? 'الاستوديو مفتوح الآن' : 'Atelier Open Now')
                  : (language === 'ar' ? 'مغلق حالياً' : 'Currently Closed')}
              </span>
            </div>

            {/* Language Switcher Button */}
            <button
              id="lang-toggle-btn"
              onClick={onToggleLanguage}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#1B1B1E] hover:bg-[#26262B] border border-[#26262B] text-xs font-medium text-[#F3EFE7] hover:text-[#DFCA95] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C6A664]"
              aria-label={language === 'ar' ? 'تغيير اللغة إلى الإنجليزية' : 'Switch language to Arabic'}
            >
              <Globe className="w-3.5 h-3.5 text-[#C6A664]" />
              <span className="uppercase tracking-wider">{language === 'ar' ? 'EN' : 'العربية'}</span>
            </button>

            {/* Phone Call Button */}
            <a
              id="header-phone-cta"
              href={`tel:${config.phone}`}
              className="flex items-center justify-center w-9 h-9 rounded-full bg-[#1B1B1E] hover:bg-[#26262B] border border-[#26262B] text-[#F3EFE7] hover:text-[#DFCA95] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C6A664]"
              title={config.phoneDisplay}
              aria-label={language === 'ar' ? 'اتصال بالهاتف' : 'Call Atelier'}
            >
              <Phone className="w-4 h-4" />
            </a>

            {/* Direct WhatsApp / Free Inspection Booking Pill */}
            <button
              id="header-booking-cta"
              onClick={() => onOpenBooking()}
              className="relative overflow-hidden group flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#8F7238] via-[#C6A664] to-[#DFCA95] text-[#0B0B0D] text-xs font-bold tracking-wide shadow-[0_2px_12px_rgba(198,166,100,0.25)] hover:shadow-[0_4px_20px_rgba(198,166,100,0.45)] transition-all transform hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#DFCA95]"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-current" />
              <span>{language === 'ar' ? 'احجز فحص مجاني' : 'Book Free Inspection'}</span>
              <span className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-full transition-transform duration-700 pointer-events-none" />
            </button>
          </div>

          {/* Mobile Right Controls */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={onToggleLanguage}
              className="px-2.5 py-1.5 rounded-full bg-[#1B1B1E] border border-[#26262B] text-xs font-semibold text-[#DFCA95]"
              aria-label="Toggle language"
            >
              {language === 'ar' ? 'EN' : 'عربي'}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-[#1B1B1E] border border-[#26262B] text-[#F3EFE7]"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-drawer"
          className="lg:hidden bg-[#141416]/98 border-b border-[#26262B] px-4 pt-3 pb-6 animate-in slide-in-from-top-2 duration-300"
        >
          <div className="flex flex-col space-y-3 pt-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-base font-medium text-[#F3EFE7] hover:text-[#DFCA95] hover:bg-[#1B1B1E] rounded-md transition-colors"
              >
                {link.label}
              </a>
            ))}
            
            <div className="pt-3 border-t border-[#26262B] flex flex-col gap-2.5">
              <div className="flex items-center justify-between px-3 py-2 bg-[#1B1B1E] rounded-lg text-xs">
                <span className="text-[#B8B3AA]">
                  {language === 'ar' ? 'حالة الاستوديو:' : 'Studio Status:'}
                </span>
                <span className="flex items-center gap-1.5 font-semibold text-[#F3EFE7]">
                  <span className={`w-2 h-2 rounded-full ${isOpenNow ? 'bg-emerald-500' : 'bg-amber-500'}`} />
                  {isOpenNow
                    ? (language === 'ar' ? 'مفتوح الآن' : 'Open Now')
                    : (language === 'ar' ? 'مغلق حالياً' : 'Closed')}
                </span>
              </div>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-[#C6A664] to-[#DFCA95] text-[#0B0B0D] font-bold text-sm"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                {language === 'ar' ? 'طلب فحص مجاني عبر واتساب' : 'Book Free Inspection via WhatsApp'}
              </button>

              <a
                href={`tel:${config.phone}`}
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-[#1B1B1E] border border-[#26262B] text-[#F3EFE7] font-medium text-sm"
              >
                <Phone className="w-4 h-4 text-[#C6A664]" />
                {config.phoneDisplay}
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
