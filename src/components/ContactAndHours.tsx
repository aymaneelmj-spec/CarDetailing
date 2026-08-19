import React, { useState, useEffect, useMemo } from 'react';
import { MapPin, Phone, MessageCircle, Mail, Clock, ChevronDown, ChevronUp, Navigation, Sparkles } from 'lucide-react';
import { StudioConfig, Language, DaySchedule } from '../types';

interface ContactAndHoursProps {
  config: StudioConfig;
  language: Language;
}

export const ContactAndHours: React.FC<ContactAndHoursProps> = ({
  config,
  language,
}) => {
  const [isWeeklyExpanded, setIsWeeklyExpanded] = useState(false);
  const [currentLocalTime, setCurrentLocalTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentLocalTime(new Date());
    }, 30000); // Check every 30 seconds
    return () => clearInterval(timer);
  }, []);

  // Compute live open/closed status against visitor time and current day's two shifts
  const studioStatus = useMemo(() => {
    const currentDayIdx = currentLocalTime.getDay(); // 0 = Sunday, 1 = Monday...
    const currentHour = currentLocalTime.getHours();
    const currentMin = currentLocalTime.getMinutes();
    const currentTimeInMinutes = currentHour * 60 + currentMin;

    const todaySchedule = config.schedule.find((s) => s.dayIndex === currentDayIdx);

    if (!todaySchedule || todaySchedule.shifts.length === 0) {
      return {
        isOpen: false,
        label: language === 'ar' ? 'مغلق اليوم' : 'Closed Today',
        nextShiftText: '',
      };
    }

    let isOpenNow = false;
    let nextOpeningTime = '';

    for (const shift of todaySchedule.shifts) {
      const [openH, openM] = shift.open.split(':').map(Number);
      const [closeH, closeM] = shift.close.split(':').map(Number);
      const openMinutes = openH * 60 + openM;
      const closeMinutes = closeH * 60 + closeM;

      if (currentTimeInMinutes >= openMinutes && currentTimeInMinutes < closeMinutes) {
        isOpenNow = true;
        const closeFormatted = shift.close;
        return {
          isOpen: true,
          label: language === 'ar' ? 'مفتوح الآن' : 'Open Now',
          shiftClosesAt: closeFormatted,
          todaySchedule,
        };
      } else if (currentTimeInMinutes < openMinutes && !nextOpeningTime) {
        nextOpeningTime = shift.open;
      }
    }

    return {
      isOpen: false,
      label: language === 'ar' ? 'مغلق حالياً' : 'Currently Closed',
      nextOpeningTime,
      todaySchedule,
    };
  }, [currentLocalTime, config.schedule, language]);

  return (
    <section id="contact" className="py-24 bg-[#0B0B0D] border-t border-[#26262B] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-[#C6A664] text-xs font-bold tracking-widest uppercase mb-3">
            <MapPin className="w-4 h-4" />
            <span>{language === 'ar' ? 'الموقع وساعات العمل' : 'Location & Atelier Schedule'}</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F3EFE7]">
            {language === 'ar'
              ? 'تفضل بزيارة الاستوديو في الرياض'
              : 'Visit Our Atelier in Riyadh'}
          </h2>
          <p className="text-sm sm:text-base text-[#B8B3AA] mt-3">
            {language === 'ar'
              ? 'موقع متميز، صالة استقبال فاخرة، ومواقف سيارات خاصة لعملائنا.'
              : 'Dedicated premises featuring a dust-filtered bay, private client parking, and VIP viewing suite.'}
          </p>
        </div>

        {/* Grid: Left Column Info & Hours, Right Column Google Maps Embed */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Contact Cards + Split Shift Working Hours Widget */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Split-Shift Working Hours Component */}
            <div className="p-6 rounded-2xl bg-[#141416] border border-[#26262B] shadow-xl">
              
              {/* Live Status Header */}
              <div className="flex items-center justify-between pb-4 border-b border-[#26262B]">
                <div className="flex items-center gap-2.5">
                  <Clock className="w-4 h-4 text-[#C6A664]" />
                  <h3 className="text-sm font-bold text-[#F3EFE7]">
                    {language === 'ar' ? 'ساعات العمل (فترتان يومياً)' : 'Working Hours (Split Shift)'}
                  </h3>
                </div>

                {/* Live Green/Red indicator */}
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1B1B1E] border border-[#26262B]">
                  <span
                    className={`w-2.5 h-2.5 rounded-full ${
                      studioStatus.isOpen ? 'bg-emerald-500 animate-pulse' : 'bg-rose-500'
                    }`}
                  />
                  <span
                    className={`text-xs font-bold ${
                      studioStatus.isOpen ? 'text-emerald-400' : 'text-rose-400'
                    }`}
                  >
                    {studioStatus.label}
                  </span>
                </div>
              </div>

              {/* Today's Shifts Breakdown */}
              <div className="py-4 space-y-2">
                <span className="text-xs text-[#B8B3AA] block">
                  {language === 'ar' ? 'مواعيد اليوم:' : "Today's Schedule:"}
                </span>

                {studioStatus.todaySchedule?.shifts.map((shift, sIdx) => (
                  <div
                    key={sIdx}
                    className="flex items-center justify-between p-2.5 rounded-lg bg-[#1B1B1E] border border-[#26262B] text-xs"
                  >
                    <span className="font-semibold text-[#F3EFE7]">
                      {language === 'ar'
                        ? sIdx === 0
                          ? 'الفترة الصباحية'
                          : 'الفترة المسائية'
                        : sIdx === 0
                        ? 'Morning Shift'
                        : 'Evening Shift'}
                    </span>
                    <span className="font-mono text-[#DFCA95]">
                      {shift.open} - {shift.close}
                    </span>
                  </div>
                ))}
              </div>

              {/* Expandable Weekly Schedule Toggle */}
              <button
                type="button"
                onClick={() => setIsWeeklyExpanded(!isWeeklyExpanded)}
                className="w-full pt-3 flex items-center justify-between text-xs text-[#C6A664] hover:text-[#DFCA95] transition-colors border-t border-[#26262B] cursor-pointer"
              >
                <span>{language === 'ar' ? 'عرض جدول الأسبوع بالكامل' : 'View Full Weekly Schedule'}</span>
                {isWeeklyExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </button>

              {/* Expanded Weekly Schedule Table */}
              {isWeeklyExpanded && (
                <div className="mt-4 pt-3 border-t border-[#26262B] space-y-2 animate-in fade-in duration-300">
                  {config.schedule.map((day) => {
                    const isToday = day.dayIndex === currentLocalTime.getDay();

                    return (
                      <div
                        key={day.dayIndex}
                        className={`p-2 rounded-lg flex items-center justify-between text-xs ${
                          isToday
                            ? 'bg-[#24352C] border border-[#C6A664]/50'
                            : 'bg-[#1B1B1E]/60'
                        }`}
                      >
                        <span className={`font-semibold ${isToday ? 'text-[#DFCA95]' : 'text-[#F3EFE7]'}`}>
                          {day.dayName[language]}
                          {isToday && (
                            <span className="text-[10px] text-[#C6A664] ml-1.5 rtl:mr-1.5">
                              ({language === 'ar' ? 'اليوم' : 'Today'})
                            </span>
                          )}
                        </span>

                        <div className="flex flex-col text-end font-mono text-[11px] text-[#B8B3AA]">
                          {day.shifts.map((s, idx) => (
                            <span key={idx}>
                              {s.open} - {s.close}
                            </span>
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}

            </div>

            {/* Direct Contact Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              
              {/* Phone */}
              <a
                href={`tel:${config.phone}`}
                className="p-4 rounded-xl bg-[#141416] border border-[#26262B] hover:border-[#C6A664]/50 transition-colors flex items-center gap-3"
              >
                <div className="w-9 h-9 rounded-lg bg-[#1B1B1E] border border-[#26262B] text-[#DFCA95] flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] text-[#B8B3AA] block uppercase tracking-wider">
                    {language === 'ar' ? 'الهاتف المباشر' : 'Direct Line'}
                  </span>
                  <span className="text-xs font-bold text-[#F3EFE7]">
                    {config.phoneDisplay}
                  </span>
                </div>
              </a>

              {/* WhatsApp */}
              <a
                href={`https://wa.me/${config.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl bg-[#141416] border border-[#26262B] hover:border-emerald-500/50 transition-colors flex items-center gap-3"
              >
                <div className="w-9 h-9 rounded-lg bg-emerald-950/40 border border-emerald-500/30 text-emerald-400 flex items-center justify-center shrink-0">
                  <MessageCircle className="w-4 h-4 fill-current" />
                </div>
                <div>
                  <span className="text-[10px] text-emerald-400 block uppercase tracking-wider">
                    {language === 'ar' ? 'واتساب الاستوديو' : 'Official WhatsApp'}
                  </span>
                  <span className="text-xs font-bold text-[#F3EFE7]">
                    {config.phoneDisplay}
                  </span>
                </div>
              </a>

              {/* Address */}
              <div className="sm:col-span-2 p-4 rounded-xl bg-[#141416] border border-[#26262B] flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-[#1B1B1E] border border-[#26262B] text-[#DFCA95] flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] text-[#B8B3AA] block uppercase tracking-wider">
                      {language === 'ar' ? 'العنوان' : 'Studio Address'}
                    </span>
                    <span className="text-xs font-bold text-[#F3EFE7]">
                      {config.address[language]} - {config.city[language]}
                    </span>
                  </div>
                </div>

                <a
                  href={config.mapDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-lg bg-[#1B1B1E] hover:bg-[#26262B] border border-[#26262B] text-xs font-bold text-[#DFCA95] flex items-center gap-1.5 shrink-0 transition-colors"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>{language === 'ar' ? 'الاتجاهات' : 'Directions'}</span>
                </a>
              </div>

              {/* Social Channels - Pure Logos */}
              <div className="sm:col-span-2 p-4 rounded-xl bg-[#141416] border border-[#26262B] flex items-center justify-between">
                <span className="text-xs font-bold text-[#F3EFE7]">
                  {language === 'ar' ? 'حساباتنا الرسمية:' : 'Official Channels:'}
                </span>

                <div className="flex items-center gap-2.5">
                  <a
                    href={config.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-lg bg-[#1B1B1E] border border-[#26262B] text-[#F3EFE7] hover:text-[#DFCA95] hover:border-[#C6A664]/60 flex items-center justify-center transition-all shadow-sm group"
                    aria-label="Instagram"
                    title="Instagram"
                  >
                    <svg className="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                    </svg>
                  </a>

                  <a
                    href={config.snapchatUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-lg bg-[#1B1B1E] border border-[#26262B] text-[#F3EFE7] hover:text-[#DFCA95] hover:border-[#C6A664]/60 flex items-center justify-center transition-all shadow-sm group"
                    aria-label="Snapchat"
                    title="Snapchat"
                  >
                    <svg className="w-4 h-4 fill-current group-hover:scale-110 transition-transform" viewBox="0 0 24 24">
                      <path d="M12.002 2c-3.58 0-6.19 2.518-6.19 5.89 0 1.25.43 2.58 1.09 3.59.18.28.1.58-.14.78-.45.38-1.28.79-2.31 1.06-.39.1-.6.44-.5.82.16.63.78 1.06 1.48 1.06.31 0 .63-.08.92-.22.37-.18.82-.04 1.04.31.57.94 1.34 1.63 2.37 2.04.28.11.45.38.42.68-.08.77-.32 1.54-.78 2.21-.18.26-.08.62.2.77.7.38 1.53.59 2.4.59.88 0 1.7-.21 2.4-.59.28-.15.38-.51.2-.77-.46-.67-.7-1.44-.78-2.21-.03-.3.14-.57.42-.68 1.03-.41 1.8-1.1 2.37-2.04.22-.35.67-.49 1.04-.31.29.14.61.22.92.22.7 0 1.32-.43 1.48-1.06.1-.38-.11-.72-.5-.82-1.03-.27-1.86-.68-2.31-1.06-.24-.2-.32-.5-.14-.78.66-1.01 1.09-2.34 1.09-3.59 0-3.372-2.61-5.89-6.19-5.89z"/>
                    </svg>
                  </a>

                  <a
                    href={config.tiktokUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-lg bg-[#1B1B1E] border border-[#26262B] text-[#F3EFE7] hover:text-[#DFCA95] hover:border-[#C6A664]/60 flex items-center justify-center transition-all shadow-sm group"
                    aria-label="TikTok"
                    title="TikTok"
                  >
                    <svg className="w-4 h-4 fill-current group-hover:scale-110 transition-transform" viewBox="0 0 24 24">
                      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.298-.002.595.042.88.13V9.4a6.33 6.33 0 0 0-1-.08A6.34 6.34 0 0 0 3 15.66a6.34 6.34 0 0 0 10.82 4.47 6.3 6.3 0 0 0 1.95-4.47V8.4a8.28 8.28 0 0 0 4.82 1.54v-3.25z"/>
                    </svg>
                  </a>
                </div>
              </div>

            </div>

          </div>

          {/* Right Column: Google Maps Embed (Exact Responsive Wrapper Requested by User) */}
          <div className="lg:col-span-7">
            <div className="p-3 rounded-2xl bg-[#141416] border border-[#26262B] shadow-2xl">
              
              <div
                className="map-wrapper"
                style={{
                  position: 'relative',
                  paddingBottom: '56.25%',
                  height: 0,
                  overflow: 'hidden',
                  borderRadius: '16px',
                }}
              >
                <iframe
                  src={config.mapEmbedUrl}
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    border: 0,
                  }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                  title="Google Maps Studio Location"
                />
              </div>

              {/* Map Footer Note */}
              <div className="pt-3 px-2 flex items-center justify-between text-xs text-[#B8B3AA]">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  {language === 'ar' ? 'مواقف خاصة مجانية أمام الاستوديو' : 'Complimentary Client Parking Available'}
                </span>
                <span className="text-[11px] font-mono text-[#C6A664]">
                  Gtechniq Studio SA-01
                </span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
