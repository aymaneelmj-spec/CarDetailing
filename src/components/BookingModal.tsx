import React, { useState } from 'react';
import { X, MessageCircle, Check, Sparkles, Shield, Calendar } from 'lucide-react';
import { StudioConfig, Language } from '../types';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  config: StudioConfig;
  language: Language;
  initialServiceId?: string;
  initialTierId?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  config,
  language,
  initialServiceId,
  initialTierId,
}) => {
  const [vehicleType, setVehicleType] = useState<'sedan' | 'suv' | 'exotic'>('sedan');
  const [vehicleDetails, setVehicleDetails] = useState('');
  const [selectedService, setSelectedService] = useState<string>(
    initialServiceId || config.services[0].id
  );
  const [selectedTier, setSelectedTier] = useState<string>(
    initialTierId || config.pricingTiers[1].id
  );
  const [preferredDate, setPreferredDate] = useState('');
  const [customerName, setCustomerName] = useState('');
  const [additionalNotes, setAdditionalNotes] = useState('');

  if (!isOpen) return null;

  const serviceObj = config.services.find((s) => s.id === selectedService);
  const tierObj = config.pricingTiers.find((t) => t.id === selectedTier);

  const generateWhatsAppMessage = () => {
    if (language === 'ar') {
      let msg = `*طلب حجز فحص وتلميع معتمد - Gtechniq*\n`;
      msg += `----------------------------------------\n`;
      if (customerName) msg += `👤 *اسم العميل:* ${customerName}\n`;
      msg += `🚗 *نوع المركبة:* ${
        vehicleType === 'sedan' ? 'سيدان / كوبيه' : vehicleType === 'suv' ? 'جيب / SUV' : 'سوبركار / نادر'
      }\n`;
      if (vehicleDetails) msg += `📌 *طراز السيارة والموديل:* ${vehicleDetails}\n`;
      if (serviceObj) msg += `🛡️ *الخدمة المطلوبة:* ${serviceObj.title.ar}\n`;
      if (tierObj) msg += `⭐ *الباقة المختارة:* ${tierObj.name.ar} (${tierObj.coverageYears} سنوات ضمان)\n`;
      if (preferredDate) msg += `📅 *الموعد المفضل للزيارة:* ${preferredDate}\n`;
      if (additionalNotes) msg += `💬 *ملاحظات خاصة:* ${additionalNotes}\n`;
      msg += `----------------------------------------\n`;
      msg += `نرجو تأكيد إمكانية استقبال السيارة لتنفيذ الفحص المجهري المعتمد. شكراً لكم.`;
      return msg;
    } else {
      let msg = `*Atelier Detailing & Inspection Booking Request*\n`;
      msg += `----------------------------------------\n`;
      if (customerName) msg += `👤 *Client Name:* ${customerName}\n`;
      msg += `🚗 *Vehicle Category:* ${
        vehicleType === 'sedan' ? 'Sedan / Coupe' : vehicleType === 'suv' ? 'SUV / 4x4' : 'Exotic / Hypercar'
      }\n`;
      if (vehicleDetails) msg += `📌 *Make & Model:* ${vehicleDetails}\n`;
      if (serviceObj) msg += `🛡️ *Selected Service:* ${serviceObj.title.en}\n`;
      if (tierObj) msg += `⭐ *Preservation Tier:* ${tierObj.name.en} (${tierObj.coverageYears} Year Warranty)\n`;
      if (preferredDate) msg += `📅 *Preferred Date:* ${preferredDate}\n`;
      if (additionalNotes) msg += `💬 *Special Instructions:* ${additionalNotes}\n`;
      msg += `----------------------------------------\n`;
      msg += `Please confirm appointment availability for ultrasonic inspection. Thank you.`;
      return msg;
    }
  };

  const whatsAppUrl = `https://wa.me/${config.whatsappNumber}?text=${encodeURIComponent(
    generateWhatsAppMessage()
  )}`;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative max-w-2xl w-full bg-[#141416] border border-[#C6A664]/50 rounded-2xl p-6 sm:p-8 shadow-2xl my-8 text-start max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 rtl:left-5 rtl:right-auto p-2 rounded-full bg-[#1B1B1E] text-[#B8B3AA] hover:text-[#F3EFE7] hover:bg-[#26262B] transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2 text-[#C6A664] text-xs font-bold tracking-widest uppercase mb-1">
          <Sparkles className="w-4 h-4" />
          <span>{language === 'ar' ? 'فحص مجهري مجاني' : 'Complimentary Optical Inspection'}</span>
        </div>
        <h3 className="font-display text-2xl font-bold text-[#F3EFE7] mb-6">
          {language === 'ar' ? 'حجز موعد فحص واستشارة عبر واتساب' : 'Book Your Atelier Inspection'}
        </h3>

        <div className="space-y-5">
          {/* Vehicle Category */}
          <div>
            <label className="block text-xs font-bold text-[#DFCA95] uppercase tracking-wider mb-2">
              {language === 'ar' ? 'فئة السيارة' : 'Vehicle Category'}
            </label>
            <div className="grid grid-cols-3 gap-2">
              {(['sedan', 'suv', 'exotic'] as const).map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setVehicleType(cat)}
                  className={`p-2.5 rounded-lg border text-xs font-bold transition-all ${
                    vehicleType === cat
                      ? 'bg-[#24352C] border-[#C6A664] text-[#DFCA95]'
                      : 'bg-[#1B1B1E] border-[#26262B] text-[#B8B3AA]'
                  }`}
                >
                  {cat === 'sedan' ? (language === 'ar' ? 'سيدان' : 'Sedan') : cat === 'suv' ? (language === 'ar' ? 'جيب / SUV' : 'SUV') : (language === 'ar' ? 'سوبركار' : 'Exotic')}
                </button>
              ))}
            </div>
          </div>

          {/* Name & Model */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs text-[#F3EFE7] mb-1 font-semibold">
                {language === 'ar' ? 'الاسم' : 'Name'}
              </label>
              <input
                type="text"
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
                placeholder={language === 'ar' ? 'الاسم الكريم' : 'Your name'}
                className="w-full px-3.5 py-2 rounded-lg bg-[#1B1B1E] border border-[#26262B] text-xs text-[#F3EFE7] focus:outline-none focus:border-[#C6A664]"
              />
            </div>
            <div>
              <label className="block text-xs text-[#F3EFE7] mb-1 font-semibold">
                {language === 'ar' ? 'طراز السيارة' : 'Make & Model'}
              </label>
              <input
                type="text"
                value={vehicleDetails}
                onChange={(e) => setVehicleDetails(e.target.value)}
                placeholder={language === 'ar' ? 'مثال: بورشه 911 كاريرا' : 'e.g. Porsche 911 Carrera'}
                className="w-full px-3.5 py-2 rounded-lg bg-[#1B1B1E] border border-[#26262B] text-xs text-[#F3EFE7] focus:outline-none focus:border-[#C6A664]"
              />
            </div>
          </div>

          {/* Service Dropdown */}
          <div>
            <label className="block text-xs font-semibold text-[#F3EFE7] mb-1">
              {language === 'ar' ? 'الخدمة المطلوبة' : 'Service'}
            </label>
            <select
              value={selectedService}
              onChange={(e) => setSelectedService(e.target.value)}
              className="w-full px-3.5 py-2 rounded-lg bg-[#1B1B1E] border border-[#26262B] text-xs text-[#F3EFE7] focus:outline-none focus:border-[#C6A664]"
            >
              {config.services.map((srv) => (
                <option key={srv.id} value={srv.id}>
                  {srv.title[language]} ({srv.warranty[language]})
                </option>
              ))}
            </select>
          </div>

          {/* Tier Selection */}
          <div>
            <label className="block text-xs font-semibold text-[#F3EFE7] mb-1">
              {language === 'ar' ? 'الباقة المفضلة' : 'Preservation Tier'}
            </label>
            <select
              value={selectedTier}
              onChange={(e) => setSelectedTier(e.target.value)}
              className="w-full px-3.5 py-2 rounded-lg bg-[#1B1B1E] border border-[#26262B] text-xs text-[#F3EFE7] focus:outline-none focus:border-[#C6A664]"
            >
              {config.pricingTiers.map((t) => (
                <option key={t.id} value={t.id}>
                  {t.name[language]} - {t.coverageYears} {language === 'ar' ? 'سنوات ضمان' : 'Years Warranty'}
                </option>
              ))}
            </select>
          </div>

          {/* Date Picker */}
          <div>
            <label className="block text-xs text-[#F3EFE7] mb-1 font-semibold">
              {language === 'ar' ? 'التاريخ المفضل للزيارة' : 'Preferred Date'}
            </label>
            <input
              type="date"
              value={preferredDate}
              onChange={(e) => setPreferredDate(e.target.value)}
              className="w-full px-3.5 py-2 rounded-lg bg-[#1B1B1E] border border-[#26262B] text-xs text-[#F3EFE7] focus:outline-none focus:border-[#C6A664]"
            />
          </div>

          {/* Submit to WhatsApp */}
          <a
            href={whatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={onClose}
            className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-bold text-xs tracking-wider shadow-lg flex items-center justify-center gap-2 transition-all transform hover:-translate-y-0.5"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            <span>{language === 'ar' ? 'فتح المحادثة وإرسال الطلب في واتساب' : 'Submit & Open in WhatsApp'}</span>
          </a>

          <div className="flex items-center justify-center gap-2 text-[11px] text-[#B8B3AA] text-center">
            <Shield className="w-3.5 h-3.5 text-[#C6A664]" />
            <span>{language === 'ar' ? 'الاستوديو المعتمد رسمياً من Gtechniq Smart Surface Science' : 'Officially Gtechniq-Accredited Atelier'}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
