import React, { useState, useRef, useCallback, useEffect } from 'react';
import { Sparkles, MoveHorizontal, Zap, Droplets, Sun, CheckCircle2 } from 'lucide-react';
import { StudioConfig, Language, BeforeAfterItem } from '../types';

interface BeforeAfterSliderProps {
  config: StudioConfig;
  language: Language;
}

export const BeforeAfterSlider: React.FC<BeforeAfterSliderProps> = ({
  config,
  language,
}) => {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50); // percentage 0 to 100
  const [isDragging, setIsDragging] = useState(false);
  const [showInspectionSpotlight, setShowInspectionSpotlight] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);

  const currentItem = config.beforeAfterComparisons[selectedIdx];

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    let percentage = (x / rect.width) * 100;
    
    percentage = Math.max(2, Math.min(98, percentage));
    setSliderPosition(percentage);
  }, []);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    handleMove(e.clientX);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    if (e.touches.length > 0) {
      handleMove(e.touches[0].clientX);
    }
  };

  useEffect(() => {
    const handleMouseUp = () => setIsDragging(false);
    const handleMouseMove = (e: MouseEvent) => {
      if (isDragging) {
        handleMove(e.clientX);
      }
    };
    const handleTouchMove = (e: TouchEvent) => {
      if (isDragging && e.touches.length > 0) {
        handleMove(e.touches[0].clientX);
      }
    };

    if (isDragging) {
      window.addEventListener('mouseup', handleMouseUp);
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('touchend', handleMouseUp);
      window.addEventListener('touchmove', handleTouchMove);
    }

    return () => {
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchend', handleMouseUp);
      window.removeEventListener('touchmove', handleTouchMove);
    };
  }, [isDragging, handleMove]);

  return (
    <section id="comparison" className="py-24 bg-[#0B0B0D] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-[#C6A664] text-xs font-bold tracking-widest uppercase mb-3">
            <Sparkles className="w-4 h-4" />
            <span>{language === 'ar' ? 'المقارنة البصرية المجهرية' : 'Direct Optical Inspection'}</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F3EFE7] tracking-tight">
            {language === 'ar'
              ? 'مقارنة دقيقة لنفس المركبة قبل وبعد المعالجة'
              : 'Single-Vehicle Macro Comparison'}
          </h2>
          <p className="text-[#B8B3AA] text-sm sm:text-base mt-3">
            {language === 'ar'
              ? 'اسحب المؤشر التفاعلي لفحص نفس اللوح والهيكل، وشاهد الفارق الجوهري في عمق الطلاء وطرد السوائل.'
              : 'Drag the interactive split handle to inspect the identical vehicle panel before and after atelier preservation.'}
          </p>
        </div>

        {/* Vehicle Subject Selector Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
          {config.beforeAfterComparisons.map((item, idx) => (
            <button
              key={item.id}
              onClick={() => {
                setSelectedIdx(idx);
                setSliderPosition(50);
              }}
              className={`px-5 py-2.5 rounded-xl text-xs font-bold tracking-wider transition-all cursor-pointer flex items-center gap-2 ${
                selectedIdx === idx
                  ? 'bg-gradient-to-r from-[#8F7238] via-[#C6A664] to-[#DFCA95] text-[#0B0B0D] shadow-[0_4px_20px_rgba(198,166,100,0.35)] scale-[1.02]'
                  : 'bg-[#1B1B1E] text-[#B8B3AA] hover:text-[#F3EFE7] border border-[#26262B]'
              }`}
            >
              <span>{item.category[language]}</span>
              <span className={`text-[10px] px-2 py-0.5 rounded-full ${selectedIdx === idx ? 'bg-black/20 text-[#0B0B0D] font-mono' : 'bg-[#141416] text-[#C6A664]'}`}>
                {item.vehicleModel}
              </span>
            </button>
          ))}
        </div>

        {/* Main Comparison Stage */}
        <div className="max-w-4xl mx-auto">
          <div className="p-3.5 sm:p-4 rounded-2xl bg-[#141416] border border-[#26262B] shadow-[0_25px_70px_rgba(0,0,0,0.9)]">
            
            {/* Top Toolbar: Vehicle Badge + CRI Inspection Lamp Switch */}
            <div className="flex flex-wrap items-center justify-between gap-3 pb-3.5 px-1 border-b border-[#26262B] mb-3 text-xs">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#C6A664] animate-pulse" />
                <span className="font-bold text-[#F3EFE7]">
                  {currentItem.vehicleModel}
                </span>
                <span className="text-[#B8B3AA] text-[11px]">
                  ({currentItem.title[language]})
                </span>
              </div>

              {/* Inspection Light Toggle */}
              <button
                type="button"
                onClick={() => setShowInspectionSpotlight(!showInspectionSpotlight)}
                className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-[11px] font-medium border transition-colors cursor-pointer ${
                  showInspectionSpotlight
                    ? 'bg-[#24352C] border-[#C6A664]/50 text-[#DFCA95]'
                    : 'bg-[#1B1B1E] border-[#26262B] text-[#B8B3AA]'
                }`}
              >
                <Sun className="w-3.5 h-3.5" />
                <span>
                  {language === 'ar'
                    ? 'كشاف الفحص المجهري CRI 5500K'
                    : 'CRI 5500K Inspection Light'}
                </span>
              </button>
            </div>

            {/* Slider Viewport Container */}
            <div
              ref={containerRef}
              id="before-after-slider-box"
              onMouseDown={handleMouseDown}
              onTouchStart={handleTouchStart}
              className="relative aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden rounded-xl bg-[#0B0B0D] select-none cursor-ew-resize touch-none"
            >
              {/* {currentItem.photoReplaceComment} */}

              {/* ======================================================== */}
              {/* AFTER LAYER: Pristine 10H Ceramic / Matte Restoration    */}
              {/* ======================================================== */}
              <div className="absolute inset-0 w-full h-full">
                <img
                  src={currentItem.baseImage}
                  alt={currentItem.afterLabel[language]}
                  className="w-full h-full object-cover select-none"
                  style={{
                    filter: 'contrast(1.15) saturate(1.1) brightness(1.04)',
                  }}
                  loading="eager"
                  draggable={false}
                />

                {/* Hydrophobic Beading Overlay Simulation on After side */}
                {currentItem.comparisonType === 'hydrophobic-bead' && (
                  <div className="absolute inset-0 bg-radial-gradient pointer-events-none opacity-40 mix-blend-screen">
                    <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                      <pattern id="beads-pattern" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
                        <circle cx="15" cy="15" r="4" fill="#ffffff" fillOpacity="0.85" />
                        <circle cx="14" cy="14" r="1.5" fill="#ffffff" />
                        <circle cx="45" cy="35" r="5" fill="#ffffff" fillOpacity="0.8" />
                        <circle cx="43" cy="33" r="2" fill="#ffffff" />
                        <circle cx="30" cy="50" r="3" fill="#ffffff" fillOpacity="0.75" />
                        <circle cx="50" cy="12" r="2.5" fill="#ffffff" fillOpacity="0.7" />
                      </pattern>
                      <rect width="100%" height="100%" fill="url(#beads-pattern)" />
                    </svg>
                  </div>
                )}

                {/* Gloss / Specular Starburst Reflection Highlight on After */}
                <div
                  className="absolute inset-0 pointer-events-none opacity-60 mix-blend-overlay"
                  style={{
                    background: 'linear-gradient(135deg, rgba(255,255,255,0.2) 0%, transparent 40%, rgba(198,166,100,0.15) 100%)',
                  }}
                />
              </div>

              {/* ======================================================== */}
              {/* BEFORE LAYER: Swirled / Unprotected / Oxidized           */}
              {/* Uses EXACT SAME image for 100% pixel geometry alignment  */}
              {/* ======================================================== */}
              <div
                className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none"
                style={{
                  clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)`,
                }}
              >
                <img
                  src={currentItem.baseImage}
                  alt={currentItem.beforeLabel[language]}
                  className="absolute inset-0 w-full h-full object-cover select-none max-w-none"
                  style={{
                    filter:
                      currentItem.comparisonType === 'leather-restoration'
                        ? 'contrast(0.9) brightness(0.92) saturate(0.85)'
                        : 'contrast(0.76) brightness(0.84) saturate(0.8) blur(0.35px)',
                  }}
                  loading="eager"
                  draggable={false}
                />

                {/* Micro-Swirls & Spiderweb Wash Scratches Overlay Pattern (Authentic Paint Swirl Simulation) */}
                {currentItem.comparisonType === 'paint-correction' && (
                  <div className="absolute inset-0 opacity-75 mix-blend-screen pointer-events-none">
                    <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                      <defs>
                        <radialGradient id="swirl-glow" cx="45%" cy="45%" r="40%">
                          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.9" />
                          <stop offset="35%" stopColor="#e2d4b7" stopOpacity="0.45" />
                          <stop offset="70%" stopColor="#b8a88a" stopOpacity="0.15" />
                          <stop offset="100%" stopColor="#000000" stopOpacity="0" />
                        </radialGradient>
                      </defs>
                      
                      {/* Swirl lines radiating from inspection lamp center */}
                      <g stroke="#ffffff" strokeOpacity="0.4" strokeWidth="0.75" fill="none">
                        {[15, 28, 42, 58, 75, 95, 118, 145, 175, 210, 250].map((r, i) => (
                          <ellipse
                            key={i}
                            cx="42%"
                            cy="46%"
                            rx={r}
                            ry={r * 0.7}
                            strokeDasharray={`${6 + (i % 4) * 3} ${4 + (i % 3) * 2}`}
                          />
                        ))}
                      </g>

                      {/* Random buffer trails & wash hologram scratches */}
                      <path
                        d="M 50,80 Q 180,120 320,70 T 550,130"
                        stroke="#ffffff"
                        strokeOpacity="0.35"
                        strokeWidth="0.7"
                        fill="none"
                      />
                      <path
                        d="M 30,150 Q 150,210 280,140 T 490,230"
                        stroke="#ffffff"
                        strokeOpacity="0.3"
                        strokeWidth="0.6"
                        fill="none"
                      />
                      <path
                        d="M 80,240 Q 220,280 390,210 T 600,290"
                        stroke="#ffffff"
                        strokeOpacity="0.35"
                        strokeWidth="0.7"
                        fill="none"
                      />
                    </svg>
                  </div>
                )}

                {/* Flat Water Sheet / Road Grime Overlay for Hydrophobic comparison */}
                {currentItem.comparisonType === 'hydrophobic-bead' && (
                  <div className="absolute inset-0 bg-[#1B1B1E]/40 mix-blend-multiply pointer-events-none">
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black/50" />
                  </div>
                )}

                {/* Greasy Gloss / Oily Sheen for Untreated Leather */}
                {currentItem.comparisonType === 'leather-restoration' && (
                  <div className="absolute inset-0 bg-gradient-to-tr from-amber-950/20 via-transparent to-white/15 mix-blend-overlay pointer-events-none" />
                )}

                {/* Subtle wash haze wash-out darkening */}
                <div className="absolute inset-0 bg-black/25 pointer-events-none" />
              </div>

              {/* ======================================================== */}
              {/* OPTIONAL INSPECTION SPOTLIGHT EFFECT                      */}
              {/* ======================================================== */}
              {showInspectionSpotlight && (
                <div
                  className="absolute pointer-events-none z-10 -translate-x-1/2 -translate-y-1/2 rounded-full blur-xl transition-transform duration-75"
                  style={{
                    left: `${sliderPosition}%`,
                    top: '50%',
                    width: '260px',
                    height: '260px',
                    background: 'radial-gradient(circle, rgba(255,255,255,0.18) 0%, rgba(198,166,100,0.08) 50%, transparent 75%)',
                  }}
                />
              )}

              {/* Top Badges (Before / After) */}
              <div className="absolute top-4 left-4 pointer-events-none z-20">
                <span className="px-3 py-1.5 rounded-lg bg-[#0B0B0D]/85 border border-rose-500/40 text-xs font-semibold text-rose-300 backdrop-blur-md shadow-lg flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-400" />
                  {currentItem.beforeLabel[language]}
                </span>
              </div>
              
              <div className="absolute top-4 right-4 pointer-events-none z-20">
                <span className="px-3 py-1.5 rounded-lg bg-[#24352C]/90 border border-[#C6A664]/60 text-xs font-semibold text-[#DFCA95] backdrop-blur-md shadow-lg flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#DFCA95]" />
                  {currentItem.afterLabel[language]}
                </span>
              </div>

              {/* Vertical Draggable Divider Line */}
              <div
                className="absolute top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#DFCA95] via-white to-[#C6A664] shadow-[0_0_16px_rgba(223,202,149,0.9)] pointer-events-none z-30"
                style={{ left: `${sliderPosition}%` }}
              >
                {/* Central Ergonomic Grab Handle */}
                <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-11 h-11 rounded-full bg-[#1B1B1E] border-2 border-[#DFCA95] shadow-[0_4px_24px_rgba(0,0,0,0.95)] flex items-center justify-center text-[#DFCA95] hover:scale-110 active:scale-95 transition-transform">
                  <MoveHorizontal className="w-5 h-5" />
                </div>
              </div>

              {/* Bottom Floating Craft Notes */}
              <div className="absolute bottom-3 inset-x-4 pointer-events-none z-20 text-center">
                <span className="inline-block px-4 py-1.5 rounded-lg bg-[#0B0B0D]/90 border border-[#26262B] text-xs text-[#F3EFE7] backdrop-blur-md font-medium shadow-md">
                  {currentItem.description[language]}
                </span>
              </div>

            </div>

            {/* Micro Helper Note */}
            <div className="mt-3 px-2 flex items-center justify-between text-[11px] text-[#B8B3AA]">
              <span>
                {language === 'ar'
                  ? '← اسحب المقبض في المنتصف لمعاينة الفرق الدقيق على كامل اللوح →'
                  : '← Drag center handle to inspect the identical vehicle panel →'}
              </span>
              <span className="font-mono text-[#C6A664]">
                100% Pixel Alignment
              </span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
