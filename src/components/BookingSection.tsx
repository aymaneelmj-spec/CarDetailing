import React, { useState } from 'react';
import { MessageCircle, Calendar, Car, Shield, Check, Send, Sparkles, Clock, Copy, CheckCheck } from 'lucide-react';
import { StudioConfig, Language } from '../types';
import { GlossSweep } from './GlossSweep';

interface BookingSectionProps {
  config: StudioConfig;
  language: Language;
  preselectedServiceId?: string;
  preselectedTierId?: string;
}

export const BookingSection: React.FC<BookingSectionProps> = ({
  config,
  language,
  preselectedServiceId,
  preselectedTierId,
}) => {
  const [vehicleType, setVehicleType] = useState<'sedan' | 'suv' | 'exotic'>('sedan');
  const [vehicleDetails, setVehicleDetails] = useState('');
  const [selectedService, setSelectedService] = useState<string>(
    preselectedServiceId || 'ceramic-coating'
  );
  const [selectedTier, setSelectedTier] = useState<string>(
    preselectedTierId || 'signature-tier'
  );
  const [preferredDate, setPreferredDate] = useState('');
  const [customerName, setCustomerName] = useState('');
  const [additionalNotes, setAdditionalNotes] = useState('');
  const [copied, setCopied] = useState(false);

  const vehicleTypes = [
    {
      id: 'sedan' as const,
      name: { ar: 'سيدان / كوبيه', en: 'Sedan / Coupe' },
      example: { ar: 'مثال: مرسيدس S-Class / بورشه 911', en: 'e.g. Porsche 911, BMW M3' },
    },
    {
      id: 'suv' as const,
      name: { ar: 'جيب / SUV عائلي', en: 'SUV / 4x4' },
      example: { ar: 'مثال: رينج روفر / مرسيدس G63', en: 'e.g. Range Rover, Defender' },
    },
    {
      id: 'exotic' as const,
      name: { ar: 'سوبركار / مركبة نادرة', en: 'Exotic / Hypercar' },
      example: { ar: 'مثال: فيراري / لامبورغيني / بنتلي', en: 'e.g. Ferrari, Bentley, GT3 RS' },
    },
  ];

  // Construct the structured WhatsApp message
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

  const handleCopyMessage = () => {
    navigator.clipboard.writeText(generateWhatsAppMessage());
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="booking" className="py-24 bg-[#141416] border-t border-[#26262B] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-[#C6A664] text-xs font-bold tracking-widest uppercase mb-3">
            <Sparkles className="w-4 h-4" />
            <span>{language === 'ar' ? 'حجز مباشر وفحص مجاني' : 'Direct Atelier Reservation'}</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F3EFE7]">
            {language === 'ar'
              ? 'احجز موعد فحص لسيارتك عبر واتساب'
              : 'Configure Your Preservation Consultation'}
          </h2>
          <p className="text-sm sm:text-base text-[#B8B3AA] mt-3">
            {language === 'ar'
              ? 'حدد طراز سيارتك والخدمة المفضلة، وسيقوم النظام بتجهيز محادثة واتساب منظمة مباشرة مع كبير الحرفيين.'
              : 'Select your vehicle category and service to formulate a pre-structured WhatsApp chat with our master detailer.'}
          </p>
        </div>

        {/* Booking Form Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-6xl mx-auto">
          
          {/* Left / Main Configuration Column */}
          <div className="lg:col-span-7 bg-[#1B1B1E] border border-[#26262B] rounded-2xl p-6 sm:p-8 shadow-xl space-y-6">
            
            {/* Step 1: Vehicle Type */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#DFCA95] mb-3">
                {language === 'ar' ? '1. فئة ونوع السيارة' : '1. Vehicle Category'}
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {vehicleTypes.map((v) => (
                  <button
                    key={v.id}
                    type="button"
                    onClick={() => setVehicleType(v.id)}
                    className={`p-3.5 rounded-xl border text-start transition-all cursor-pointer ${
                      vehicleType === v.id
                        ? 'bg-[#24352C] border-[#C6A664] shadow-md'
                        : 'bg-[#141416] border-[#26262B] hover:border-[#26262B]/80'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-bold text-[#F3EFE7]">
                        {v.name[language]}
                      </span>
                      {vehicleType === v.id && (
                        <Check className="w-3.5 h-3.5 text-[#DFCA95]" />
                      )}
                    </div>
                    <span className="text-[10px] text-[#B8B3AA] block">
                      {v.example[language]}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Make & Model Input + Client Name */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-[#F3EFE7] mb-2">
                  {language === 'ar' ? 'الاسم الكريم' : 'Your Name'}
                </label>
                <input
                  type="text"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  placeholder={language === 'ar' ? 'مثال: محمد الشمري' : 'e.g. Alexander Vance'}
                  className="w-full px-4 py-2.5 rounded-xl bg-[#141416] border border-[#26262B] text-sm text-[#F3EFE7] placeholder-[#B8B3AA]/50 focus:outline-none focus:border-[#C6A664]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#F3EFE7] mb-2">
                  {language === 'ar' ? 'طراز السيارة وسنة الصنع' : 'Car Make, Model & Year'}
                </label>
                <input
                  type="text"
                  value={vehicleDetails}
                  onChange={(e) => setVehicleDetails(e.target.value)}
                  placeholder={language === 'ar' ? 'مثال: بورش كايين توربو GT 2025' : 'e.g. 2025 Porsche Cayenne Turbo GT'}
                  className="w-full px-4 py-2.5 rounded-xl bg-[#141416] border border-[#26262B] text-sm text-[#F3EFE7] placeholder-[#B8B3AA]/50 focus:outline-none focus:border-[#C6A664]"
                />
              </div>
            </div>

            {/* Step 3: Select Service */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#DFCA95] mb-3">
                {language === 'ar' ? '2. الخدمة الأساسية' : '2. Primary Service'}
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {config.services.map((srv) => (
                  <button
                    key={srv.id}
                    type="button"
                    onClick={() => setSelectedService(srv.id)}
                    className={`p-3 rounded-xl border text-start flex items-center justify-between transition-all cursor-pointer ${
                      selectedService === srv.id
                        ? 'bg-[#24352C]/90 border-[#C6A664]'
                        : 'bg-[#141416] border-[#26262B] hover:border-[#26262B]/80'
                    }`}
                  >
                    <div>
                      <span className="text-xs font-bold text-[#F3EFE7] block">
                        {srv.title[language]}
                      </span>
                      <span className="text-[10px] text-[#C6A664]">
                        {srv.warranty[language]}
                      </span>
                    </div>
                    {selectedService === srv.id && (
                      <Check className="w-3.5 h-3.5 text-[#DFCA95] shrink-0" />
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 4: Preferred Package Tier */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#DFCA95] mb-3">
                {language === 'ar' ? '3. باقة الحماية والضمان' : '3. Protection Package Tier'}
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                {config.pricingTiers.map((tier) => (
                  <button
                    key={tier.id}
                    type="button"
                    onClick={() => setSelectedTier(tier.id)}
                    className={`p-3 rounded-xl border text-start transition-all cursor-pointer ${
                      selectedTier === tier.id
                        ? 'bg-[#24352C] border-[#C6A664] shadow-md'
                        : 'bg-[#141416] border-[#26262B]'
                    }`}
                  >
                    <span className="text-xs font-bold text-[#F3EFE7] block">
                      {tier.name[language]}
                    </span>
                    <span className="text-[10px] text-[#DFCA95] block mt-0.5">
                      {tier.coverageYears} {language === 'ar' ? 'سنوات ضمان' : 'Years Warranty'}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 5: Preferred Date & Notes */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-[#F3EFE7] mb-2">
                  {language === 'ar' ? 'التاريخ المفضل للزيارة' : 'Preferred Visit Date'}
                </label>
                <input
                  type="date"
                  value={preferredDate}
                  onChange={(e) => setPreferredDate(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-[#141416] border border-[#26262B] text-sm text-[#F3EFE7] focus:outline-none focus:border-[#C6A664]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#F3EFE7] mb-2">
                  {language === 'ar' ? 'ملاحظات إضافية أو استفسار' : 'Additional Notes / Questions'}
                </label>
                <input
                  type="text"
                  value={additionalNotes}
                  onChange={(e) => setAdditionalNotes(e.target.value)}
                  placeholder={language === 'ar' ? 'مثال: وجود دوائر غسيل سابقة' : 'e.g. Previous swirl scratches'}
                  className="w-full px-4 py-2.5 rounded-xl bg-[#141416] border border-[#26262B] text-sm text-[#F3EFE7] placeholder-[#B8B3AA]/50 focus:outline-none focus:border-[#C6A664]"
                />
              </div>
            </div>

          </div>

          {/* Right Column: Pre-formatted WhatsApp Message Preview & Instant Submission */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="p-6 rounded-2xl bg-[#1B1B1E] border border-[#C6A664]/50 shadow-2xl relative overflow-hidden">
              <div className="flex items-center justify-between pb-4 border-b border-[#26262B] mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                    <MessageCircle className="w-4 h-4 fill-current" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-[#F3EFE7]">
                      {language === 'ar' ? 'معاينة رسالة واتساب' : 'WhatsApp Message Preview'}
                    </h3>
                    <span className="text-[10px] text-emerald-400">
                      {language === 'ar' ? 'إرسال مباشر بدون انتظار' : 'Instant Master Detailer Response'}
                    </span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleCopyMessage}
                  className="p-1.5 rounded-md bg-[#141416] border border-[#26262B] text-[#B8B3AA] hover:text-[#DFCA95] transition-colors text-xs flex items-center gap-1"
                  title="Copy formatted message"
                >
                  {copied ? <CheckCheck className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span className="text-[10px]">{copied ? (language === 'ar' ? 'تم النسخ' : 'Copied') : (language === 'ar' ? 'نسخ' : 'Copy')}</span>
                </button>
              </div>

              {/* Chat bubble simulator */}
              <div className="p-4 rounded-xl bg-[#141416] border border-[#26262B] font-mono text-xs text-[#F3EFE7]/90 leading-relaxed whitespace-pre-wrap max-h-64 overflow-y-auto mb-6">
                {generateWhatsAppMessage()}
              </div>

              {/* Primary Submission Button: Direct to WhatsApp */}
              <a
                id="booking-submit-whatsapp-btn"
                href={whatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-500 text-white font-bold text-sm tracking-wide shadow-[0_6px_25px_rgba(16,185,129,0.3)] hover:shadow-[0_8px_30px_rgba(16,185,129,0.5)] flex items-center justify-center gap-2.5 transition-all transform hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                <span>
                  {language === 'ar'
                    ? 'إرسال الطلب وحجز الفحص عبر واتساب'
                    : 'Open in WhatsApp & Submit Booking'}
                </span>
              </a>

              <p className="text-[11px] text-center text-[#B8B3AA] mt-3">
                {language === 'ar'
                  ? 'سيتم تحويلك مباشرة لمحادثة واتساب الرسمية مع استوديو Gtechniq.'
                  : 'You will be redirected straight to our official verified WhatsApp chat.'}
              </p>
            </div>

            {/* Accreditation guarantee highlight box */}
            <div className="p-4 rounded-xl bg-[#24352C]/50 border border-[#C6A664]/30 flex items-center gap-3.5">
              <Shield className="w-6 h-6 text-[#DFCA95] shrink-0" />
              <div className="text-xs">
                <span className="font-bold text-[#F3EFE7] block">
                  {language === 'ar' ? 'فحص رقمي مجهري مجاني' : 'Free Ultrasonic Diagnostic'}
                </span>
                <span className="text-[#B8B3AA]">
                  {language === 'ar'
                    ? 'يتضمن قياس سماكة طبقة اللكر وتوثيق حالة الطلاء بدون أي التزام مسبق.'
                    : 'Includes digital clearcoat profiling with zero obligation.'}
                </span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
