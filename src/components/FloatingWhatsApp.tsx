import React from 'react';
import { MessageCircle, Phone, Calendar } from 'lucide-react';
import { StudioConfig, Language } from '../types';

interface FloatingWhatsAppProps {
  config: StudioConfig;
  language: Language;
  onOpenBooking: () => void;
}

export const FloatingWhatsApp: React.FC<FloatingWhatsAppProps> = ({
  config,
  language,
  onOpenBooking,
}) => {
  const whatsAppDefaultMessage = encodeURIComponent(
    language === 'ar'
      ? 'مرحباً استوديو Gtechniq، أود الاستفسار عن باقات حماية النانوسيراميك وPPF المعتمدة.'
      : 'Hello Gtechniq, I would like to inquire about certified ceramic coating and PPF packages.'
  );

  return (
    <>
      {/* Desktop Floating WhatsApp Button with RTL/LTR Positioning & Gentle Pulse */}
      <div
        className={`hidden md:block fixed bottom-8 z-40 ${
          language === 'ar' ? 'left-8' : 'right-8'
        }`}
      >
        <a
          id="floating-whatsapp-btn"
          href={`https://wa.me/${config.whatsappNumber}?text=${whatsAppDefaultMessage}`}
          target="_blank"
          rel="noopener noreferrer"
          className="relative flex items-center gap-3 px-5 py-3.5 rounded-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-bold text-xs tracking-wider shadow-[0_8px_30px_rgba(16,185,129,0.4)] hover:shadow-[0_12px_40px_rgba(16,185,129,0.6)] hover:scale-105 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 group"
          aria-label={language === 'ar' ? 'محادثة مباشرة عبر واتساب' : 'Direct WhatsApp Chat'}
        >
          {/* Subtle pulse animation ring */}
          <span className="absolute -inset-1 rounded-full bg-emerald-500/30 animate-ping opacity-60 pointer-events-none" />
          
          <MessageCircle className="w-5 h-5 fill-current shrink-0" />
          <span>{language === 'ar' ? 'محادثة فورية مع الحرفي' : 'Chat with Master Detailer'}</span>
        </a>
      </div>

      {/* Mobile Sticky Bottom Action Bar (Thumb-accessible) */}
      <div
        id="mobile-bottom-bar"
        className="md:hidden fixed bottom-0 inset-x-0 z-40 bg-[#141416]/95 backdrop-blur-lg border-t border-[#26262B] p-3 shadow-[0_-10px_25px_rgba(0,0,0,0.7)] flex items-center gap-2.5"
      >
        {/* Phone Call Button */}
        <a
          href={`tel:${config.phone}`}
          className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-[#1B1B1E] border border-[#26262B] text-[#F3EFE7] font-semibold text-xs transition-colors"
          aria-label="Call Studio"
        >
          <Phone className="w-4 h-4 text-[#C6A664]" />
          <span>{language === 'ar' ? 'اتصال بالاستوديو' : 'Call Studio'}</span>
        </a>

        {/* WhatsApp Consultation / Booking Button */}
        <button
          onClick={onOpenBooking}
          className="flex-[1.4] flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-[#8F7238] via-[#C6A664] to-[#DFCA95] text-[#0B0B0D] font-bold text-xs shadow-md"
        >
          <MessageCircle className="w-4 h-4 fill-current" />
          <span>{language === 'ar' ? 'فحص مجاني (واتساب)' : 'Free Inspection (WhatsApp)'}</span>
        </button>
      </div>
    </>
  );
};
