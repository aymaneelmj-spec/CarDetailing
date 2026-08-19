import React, { useState, useEffect, useMemo } from 'react';
import { STUDIO_CONFIG } from './config/studioConfig';
import { Language } from './types';
import { LoadingScreen } from './components/LoadingScreen';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AccreditationStrip } from './components/AccreditationStrip';
import { ServicesSection } from './components/ServicesSection';
import { ProcessSection } from './components/ProcessSection';
import { BeforeAfterSlider } from './components/BeforeAfterSlider';
import { PackagesSection } from './components/PackagesSection';
import { VisitUsStrip } from './components/VisitUsStrip';
import { GallerySection } from './components/GallerySection';
import { ReviewsSection } from './components/ReviewsSection';
import { FaqSection } from './components/FaqSection';
import { BookingSection } from './components/BookingSection';
import { ContactAndHours } from './components/ContactAndHours';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { BookingModal } from './components/BookingModal';

export default function App() {
  // Default to Arabic as requested: <html lang="ar" dir="rtl">
  const [language, setLanguage] = useState<Language>('ar');
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [modalInitialService, setModalInitialService] = useState<string | undefined>();
  const [modalInitialTier, setModalInitialTier] = useState<string | undefined>();

  // Synchronize HTML lang and dir attributes whenever language changes
  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    document.title =
      language === 'ar'
        ? `${STUDIO_CONFIG.studioName.ar} | معتمد من Gtechniq`
        : `${STUDIO_CONFIG.studioName.en} | Gtechniq Accredited Detailer`;
  }, [language]);

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'ar' ? 'en' : 'ar'));
  };

  const handleOpenBooking = (serviceId?: string, tierId?: string) => {
    setModalInitialService(serviceId);
    setModalInitialTier(tierId);
    setIsBookingModalOpen(true);
  };

  // Real-time calculation for studio open/closed status
  const isOpenNow = useMemo(() => {
    const now = new Date();
    const dayIdx = now.getDay();
    const currentMins = now.getHours() * 60 + now.getMinutes();

    const todaySchedule = STUDIO_CONFIG.schedule.find((s) => s.dayIndex === dayIdx);
    if (!todaySchedule) return false;

    for (const shift of todaySchedule.shifts) {
      const [openH, openM] = shift.open.split(':').map(Number);
      const [closeH, closeM] = shift.close.split(':').map(Number);
      const openMinutes = openH * 60 + openM;
      const closeMinutes = closeH * 60 + closeM;

      if (currentMins >= openMinutes && currentMins < closeMinutes) {
        return true;
      }
    }
    return false;
  }, []);

  return (
    <div className="min-h-screen bg-[#0B0B0D] text-[#F3EFE7] font-sans selection:bg-[#C6A664]/30 selection:text-[#F3EFE7] overflow-x-hidden pb-16 md:pb-0">
      
      {/* Signature Loading Screen with Gloss Sweep */}
      <LoadingScreen language={language} />

      {/* Sticky Header with Blur Solidification & Navigation */}
      <Header
        config={STUDIO_CONFIG}
        language={language}
        onToggleLanguage={toggleLanguage}
        onOpenBooking={handleOpenBooking}
        isOpenNow={isOpenNow}
      />

      <main id="main-content">
        {/* 1. Hero Section */}
        <Hero
          config={STUDIO_CONFIG}
          language={language}
          onOpenBooking={handleOpenBooking}
        />

        {/* 2. Accreditation Strip (Gtechniq Master Credential) */}
        <AccreditationStrip
          config={STUDIO_CONFIG}
          language={language}
          onOpenBooking={handleOpenBooking}
        />

        {/* 3. Services Section (Editorial Alternating Layout) */}
        <ServicesSection
          config={STUDIO_CONFIG}
          language={language}
          onOpenBooking={handleOpenBooking}
        />

        {/* 4. Process Section (Earned 01 - 06 Sequence) */}
        <ProcessSection
          config={STUDIO_CONFIG}
          language={language}
          onOpenBooking={handleOpenBooking}
        />

        {/* 5. Before & After Macro Slider */}
        <BeforeAfterSlider
          config={STUDIO_CONFIG}
          language={language}
        />

        {/* 6. Preservation Packages & Pricing (Essential / Signature / Bespoke) */}
        <PackagesSection
          config={STUDIO_CONFIG}
          language={language}
          onOpenBooking={handleOpenBooking}
        />

        {/* 7. Visit Us Studio Amenities Strip */}
        <VisitUsStrip
          config={STUDIO_CONFIG}
          language={language}
        />

        {/* 8. Portfolio & Works Gallery */}
        <GallerySection
          config={STUDIO_CONFIG}
          language={language}
        />

        {/* 9. Reviews Section (Clearly Marked Placeholder Copy) */}
        <ReviewsSection
          config={STUDIO_CONFIG}
          language={language}
        />

        {/* 10. FAQ Accordion */}
        <FaqSection
          config={STUDIO_CONFIG}
          language={language}
        />

        {/* 11. Booking & WhatsApp Quote Generator Section */}
        <BookingSection
          config={STUDIO_CONFIG}
          language={language}
        />

        {/* 12. Location, Split Shift Hours Tracker & Google Maps Embed */}
        <ContactAndHours
          config={STUDIO_CONFIG}
          language={language}
        />
      </main>

      {/* Footer */}
      <Footer
        config={STUDIO_CONFIG}
        language={language}
      />

      {/* Floating WhatsApp & Mobile Action Bar */}
      <FloatingWhatsApp
        config={STUDIO_CONFIG}
        language={language}
        onOpenBooking={() => handleOpenBooking()}
      />

      {/* Quick Booking Modal Overlay */}
      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        config={STUDIO_CONFIG}
        language={language}
        initialServiceId={modalInitialService}
        initialTierId={modalInitialTier}
      />

    </div>
  );
}
