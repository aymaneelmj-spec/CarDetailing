import { StudioConfig } from '../types';
import { vehicleImages } from '../assets/images';

export const STUDIO_CONFIG: StudioConfig = {
  studioName: {
    ar: "Gtechniq",
    en: "Gtechniq",
  },
  tagline: {
    ar: "استوديو Gtechniq المعتمد رسمياً لحماية الطلاء بالنانوسيراميك وأفلام PPF الذاتية المعالجة والترميم البصري بأعلى المعايير البريطانية.",
    en: "Official Gtechniq Accredited Studio for surface preservation, ceramic composite matrix, self-healing PPF, and optical paint restoration.",
  },
  establishedYear: 2018,
  phone: "+966550123456",
  phoneDisplay: "+966 55 012 3456",
  whatsappNumber: "966550123456",
  email: "saudi@gtechniq.com",
  address: {
    ar: "طريق الملك عبدالعزيز، حي النرجس، الرياض",
    en: "King Abdulaziz Road, An Narjis District, Riyadh",
  },
  city: {
    ar: "الرياض",
    en: "Riyadh",
  },
  country: {
    ar: "المملكة العربية السعودية",
    en: "Kingdom of Saudi Arabia",
  },
  // Responsive Google Maps embed URL (Gtechniq Saudi Arabia)
  mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782471.257116939!2d41.97716377249214!3d22.20896158486745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2efdf6a1ecdc65%3A0x8d977c43dbd91b56!2sGtechniq%20Saudi%20Arabia!5e0!3m2!1sen!2sma!4v1787121587617!5m2!1sen!2sma",
  mapDirectionsUrl: "https://maps.google.com/?q=Gtechniq+Saudi+Arabia",
  instagramHandle: "@gtechniq_sa",
  instagramUrl: "https://instagram.com/gtechniq_sa",
  snapchatHandle: "gtechniq_sa",
  snapchatUrl: "https://snapchat.com/add/gtechniq_sa",
  tiktokHandle: "@gtechniq_sa",
  tiktokUrl: "https://tiktok.com/@gtechniq_sa",
  
  accreditation: {
    badgeTitle: {
      ar: "مركز معتمد رسمياً من Gtechniq العالمية",
      en: "Officially Gtechniq-Accredited Master Detailer",
    },
    badgeSubtitle: {
      ar: "شهادة اعتماد حصري رقم #GT-94281 مع تطبيق طبقات Crystal Serum Ultra المخصصة للمعتمدين فقط",
      en: "Exclusive Certification ID #GT-94281 with exclusive access to Crystal Serum Ultra (9 Year Guarantee)",
    },
    partnerName: "Gtechniq Smart Surface Science (UK)",
    accreditationId: "GT-94281-SA",
    warrantyYearsMax: 9,
    certifiedLine: {
      ar: "مصفوفة النانوسيراميك المركبة Crystal Serum Ultra 10H & EXO v5",
      en: "Crystal Serum Ultra 10H & EXO v5 Hydrophobic Top-Coat",
    },
    details: [
      {
        ar: "طبقة نانو سيراميك 10H ذات التركيب الجزيئي المزدوج غير قابلة للإزالة إلا بالصنفرة الاحترافية",
        en: "Dual-layer 10H composite ceramic matrix non-removable except by professional abrasive sanding"
      },
      {
        ar: "ضمان دولي رسمي موثق يصل إلى 9 سنوات مرتبط برقم الهيكل (VIN)",
        en: "Official manufacturer-backed international guarantee up to 9 years registered to vehicle VIN"
      },
      {
        ar: "بيئة معملية معقمة خالية من الغبار بنظام إنارة طيفي 5500K لكشف أدق العيوب المجهرية",
        en: "Dust-controlled laboratory environment equipped with 5500K CRI daylight inspection arrays"
      }
    ]
  },

  stats: {
    yearsAccredited: 7,
    vehiclesProtected: 1850,
    paintCorrectionHours: 14200,
    opticalClarityPercent: 99.4,
  },

  // Split shift hours: Morning & Evening
  schedule: [
    {
      dayIndex: 0, // Sunday
      dayName: { ar: "الأحد", en: "Sunday" },
      shifts: [
        { open: "09:00", close: "13:00" },
        { open: "16:30", close: "22:00" }
      ]
    },
    {
      dayIndex: 1, // Monday
      dayName: { ar: "الاثنين", en: "Monday" },
      shifts: [
        { open: "09:00", close: "13:00" },
        { open: "16:30", close: "22:00" }
      ]
    },
    {
      dayIndex: 2, // Tuesday
      dayName: { ar: "الثلاثاء", en: "Tuesday" },
      shifts: [
        { open: "09:00", close: "13:00" },
        { open: "16:30", close: "22:00" }
      ]
    },
    {
      dayIndex: 3, // Wednesday
      dayName: { ar: "الأربعاء", en: "Wednesday" },
      shifts: [
        { open: "09:00", close: "13:00" },
        { open: "16:30", close: "22:00" }
      ]
    },
    {
      dayIndex: 4, // Thursday
      dayName: { ar: "الخميس", en: "Thursday" },
      shifts: [
        { open: "09:00", close: "13:00" },
        { open: "16:30", close: "22:30" }
      ]
    },
    {
      dayIndex: 5, // Friday
      dayName: { ar: "الجمعة", en: "Friday" },
      shifts: [
        { open: "16:00", close: "22:30" } // Single evening shift on Friday
      ]
    },
    {
      dayIndex: 6, // Saturday
      dayName: { ar: "السبت", en: "Saturday" },
      shifts: [
        { open: "09:30", close: "13:00" },
        { open: "16:30", close: "22:00" }
      ]
    }
  ],

  services: [
    {
      id: "ceramic-coating",
      title: {
        ar: "طلاء النانوسيراميك المعياري Gtechniq",
        en: "Gtechniq Ceramic Composite Coating",
      },
      craftSubtitle: {
        ar: "اندماج كيميائي جزيئي مع طبقة اللكر يوفر حماية فائقة وعمقاً بصرياً يضاهي مرآة زجاجية خالية من الشوائب",
        en: "Permanent molecular fusion with clearcoat delivering glass-like refraction and extreme chemical resistance.",
      },
      tagline: {
        ar: "طبقات الحماية المعتمدة للمركبات الفارهة والنادرة",
        en: "Accredited master-tier nanotech for luxury & collector vehicles",
      },
      description: {
        ar: "نحن المركز المعتمد لتطبيق حزمة Crystal Serum Ultra الحصرية التي لا تتاح للمستهلك العادي، مع طبقة نهائية EXO v5 لطرد المياه والزيوت بزاوية تلامس تتجاوز 112 درجة، مما يجعل الغسيل غاية في السلاسة ويحمي الطلاء من فضلات الطيور والأمطار الحمضية وحروق الشمس الحارقة.",
        en: "Accredited application of Gtechniq Crystal Serum Ultra (exclusive to certified studios), topped with EXO v5 hydrophobic layer with 112° water contact angle. Shields against UV degradation, tree sap, acid rain, and heavy swirl abrasion.",
      },
      specs: [
        { ar: "صلابة مصفوفة 10H مقاومة للخدوش الدقيقة", en: "10H composite matrix scratch resistance" },
        { ar: "مقاومة كيميائية شاملة من pH2 إلى pH13", en: "Total chemical resistance range pH2 - pH13" },
        { ar: "زاوية طرد الماء والزيوت 112°", en: "112° extreme contact angle water beading" },
        { ar: "ضمان خطي معتمد يصل إلى 9 سنوات", en: "Official certified guarantee up to 9 years" }
      ],
      warranty: { ar: "ضمان 9 سنوات معتمد من Gtechniq", en: "9-Year Gtechniq Manufacturer Warranty" },
      duration: { ar: "2 - 3 أيام عمل", en: "2 - 3 Atelier Days" },
      recommendedFor: { ar: "السيارات الجديدة، المركبات الفاخرة، وعشاق النقاء البصري", en: "New deliveries, luxury sedans, exotics, and gloss purists" },
      // PLACEHOLDER IMAGE WITH COMMENT
      imageUrl: vehicleImages.porsche911,
      imageAlt: { ar: "بورشه 911 بلون ناردو غراي بطلاء نانوسيراميك لامع وانعكاس كريستالي فائق", en: "Porsche 911 GT3 in Nardo Grey with Gtechniq ceramic coating showing ultra-deep mirror gloss" },
      photoReplaceComment: "<!-- REPLACE: Macro close-up of water beading and mirror-like reflections on Gtechniq ceramic coated panel -->"
    },
    {
      id: "ppf-protection",
      title: {
        ar: "أفلام حماية الطلاء الذاتية المعالجة PPF",
        en: "Self-Healing Paint Protection Film (PPF)",
      },
      craftSubtitle: {
        ar: "درع بولي يوريثان حراري عالي الشفافية مصمم بتقنية المعالجة الذاتية للخدوش بدقة قص إلكترونية مسبقة",
        en: "Optically clear aliphatic TPU film with instantaneous thermal self-healing and precision digital edge-wrapping.",
      },
      tagline: {
        ar: "الحماية الفيزيائية القصوى ضد الحصى وتطاير الرمال على الطرق السريعة",
        en: "Ultimate physical armor against highway gravel, stone chips, and sand blasting",
      },
      description: {
        ar: "نستخدم أحدث برامج القص الإلكتروني المخصصة لكل طراز بدقة مليمترية دون ملامسة الشفرات لجسم السيارة، مع ثني الحواف إلى داخل الألواح لإخفاء حدود الفيلم تماماً. معالج حرارياً لإخفاء الخدوش السطحية تلقائياً بمجرد التعرض لحرارة الشمس أو الماء الدافئ.",
        en: "Precision computer-cut templates engineered for every chassis line with zero blade-on-paint contact. Wrapped edges conceal film seams entirely. Self-healing top-coat instantly erases swirl marks under sunlight or hot water.",
      },
      specs: [
        { ar: "سماكة 8.5 ميل مع مادة TPU غير قابلة للاصفرار", en: "8.5 mil premium non-yellowing aliphatic TPU" },
        { ar: "معالجة ذاتية سريعة للخدوش بالحرارة", en: "Instantaneous thermal self-healing top-coat" },
        { ar: "قص رقمي بالكمبيوتر وثني كامل للحواف", en: "Digital template plot with 100% wrapped edges" },
        { ar: "حماية فائقة من الأشعة فوق البنفسجية والأكسدة", en: "UV blocking against clearcoat fading and haze" }
      ],
      warranty: { ar: "ضمان 10 سنوات ضد الاصفرار والتشقق", en: "10-Year Warranty against yellowing, lifting & bubbling" },
      duration: { ar: "3 - 5 أيام عمل (للتغليف الكامل)", en: "3 - 5 Atelier Days (Full Body Wrap)" },
      recommendedFor: { ar: "السيارات الرياضية، القيادة على الطرق السريعة، وحماية استثمار السيارة", en: "Supercars, highway cruisers, and maximum equity preservation" },
      // PLACEHOLDER IMAGE WITH COMMENT
      imageUrl: vehicleImages.bmwM4,
      imageAlt: { ar: "تطبيق دقيق لفيلم حماية الطلاء الشفاف على واجهة سيارة BMW رياضية", en: "Precision edge wrapping of clear Paint Protection Film on BMW M4 sports coupe" },
      photoReplaceComment: "<!-- REPLACE: High-resolution macro photo of PPF installation on fender edge showing invisible transition -->"
    },
    {
      id: "paint-correction",
      title: {
        ar: "تصحيح الطلاء المعياري متعدد المراحل",
        en: "Multi-Stage Optical Paint Correction",
      },
      craftSubtitle: {
        ar: "عملية هندسية دقيقة لإزالة دوائر الغسيل والخدوش والأكسدة واستعادة النقاء البصري بنسبة تصل إلى 99%",
        en: "Scientific abrasive leveling to eliminate 95-99% of swirl marks, buffer trails, and hazing without thinning clearcoat.",
      },
      tagline: {
        ar: "الترميم البصري الدقيق تحت إضاءة معملية فاحصة 5500K",
        en: "Laboratory-grade paint restoration under 5500K CRI inspection tunnels",
      },
      description: {
        ar: "قبل وضع أي حماية، يخضع الطلاء لعملية قياس سماكة رقمية باستخدام مقاييس الموجات فوق الصوتية لضمان سلامة طبقة اللكر الأصلية. نستخدم مركبات تلميع متناهية الصغر (Micro-abrasives) خالية من السيليكون أو الحشوات المؤقتة، لنمنحك لمعاناً حقيقياً مستداماً.",
        en: "Every panel is mapped with digital ultrasonic depth gauges to preserve factory clearcoat integrity. We utilize silicon-free diminishing micro-compounds that eliminate defects permanently rather than filling them with oily glazes.",
      },
      specs: [
        { ar: "فحص رقمي بالموجات فوق الصوتية لسماكة الطلاء", en: "Digital ultrasonic panel thickness profiling" },
        { ar: "إزالة دوائر الغسيل والهولوجرامات بنسبة تتجاوز 95%", en: "95%+ removal of wash scratches & hologram trails" },
        { ar: "تلميع نهائي بحبيبات النانو للحصول على انعكاس المرآة", en: "Jeweling stage for deep true optical reflection" },
        { ar: "خلو تام من مواد الإخفاء المؤقتة (No Fillers)", en: "100% permanent true correction (No temporary fillers)" }
      ],
      warranty: { ar: "نتائج تصحيح دائمة وموثقة بتقرير فحص رقمي", en: "Permanent results backed by digital pre/post inspection card" },
      duration: { ar: "1 - 2 يوم عمل", en: "1 - 2 Atelier Days" },
      recommendedFor: { ar: "السيارات التي تعاني من دوائر الغسيل، بهتان الطلاء، أو قبل تطبيق السيراميك", en: "Swirled clearcoats, faded paint, pre-ceramic preparation" },
      // PLACEHOLDER IMAGE WITH COMMENT
      imageUrl: vehicleImages.ferrariF8,
      imageAlt: { ar: "تصحيح طلاء فيراري حمراء تحت إضاءة مركزة", en: "Ferrari F8 Tributo Rosso Corsa multi-stage paint jeweling" },
      photoReplaceComment: "<!-- REPLACE: Macro shot of dual-action polisher refining clearcoat under spot inspection LED -->"
    },
    {
      id: "interior-detailing",
      title: {
        ar: "ترميم وحماية المقصورات الداخلية الفاخرة",
        en: "Bespoke Interior Rejuvenation & Protection",
      },
      craftSubtitle: {
        ar: "تنظيف عميق بالبخار الجاف وتغذية الجلود الطبيعية بطبقات Gtechniq L1 Leather Guard وSmart Fabric",
        en: "Dry-steam decontamination, bespoke leather conditioning, and hydrophobic textile barriers.",
      },
      tagline: {
        ar: "عناية متخصصة بالجلود الإيطالية، الألكانتارا، وتطعيمات الكربون فايبر",
        en: "Dedicated care for aniline leather, Alcantara, matte carbon fiber, and piano black trims",
      },
      description: {
        ar: "نعيد للمقصورة مظهرها المطفي الوكالة الخالي من اللمعان الزيتي الزائف. يتم معالجة جميع الأسطح الجلدية بطبقة واقية مضادة لنقل صبغة الجينز والتآكل الاحتكاكي، مع حماية ألياف السجاد والأقمشة بطبقة نانوية تمنع امتصاص السوائل والبقع تماماً.",
        en: "Restores factory-matte tactile feel without greasy silicone residues. All leather surfaces receive anti-dye transfer barriers against denim stains, while carpets and upholstery are encapsulated with breathable fluoropolymer shields.",
      },
      specs: [
        { ar: "حماية الجلود من نقل صبغة الجينز والتشقق بفعل الحرارة", en: "L1 Leather Guard dye-transfer & friction defense" },
        { ar: "حماية السجاد والأقمشة بطارد السوائل I1 Smart Fabric", en: "I1 hydrophobic matrix for spill & stain resistance" },
        { ar: "تعقيم متكامل بالبخار الجاف وتقنية الأوزون بدون روائح كيماوية", en: "Dry-steam sanitization & anti-bacterial ozone treatment" },
        { ar: "حماية الشاشات والأسطح البيانو بلاك بطبقة PPF داخلية خاصة", en: "Interior precision PPF for piano black & touchscreens" }
      ],
      warranty: { ar: "ضمان حماية الجلود والأقمشة لمدة سنة كاملة", en: "1-Year Certified Interior Shield Guarantee" },
      duration: { ar: "1 يوم عمل", en: "1 Atelier Day" },
      recommendedFor: { ar: "المقصورات الفاخرة، الجلود الفاتحة، وسيارات الاستخدام اليومي", en: "Light-colored leather, luxury cockpits, daily driven exotics" },
      // PLACEHOLDER IMAGE WITH COMMENT
      imageUrl: vehicleImages.rollsRoyce,
      imageAlt: { ar: "مقصورة سيارة فاخرة بمقاعد جلدية مطفية ونظيفة تماماً", en: "Restored matte factory finish on luxury car leather seat and cockpit" },
      photoReplaceComment: "<!-- REPLACE: Macro shot of pristine natural leather texture showing Gtechniq water repelling test -->"
    },
    {
      id: "window-tint",
      title: {
        ar: "العزل الحراري النانو سيراميك للنوافذ",
        en: "High-Rejection Nano-Ceramic Window Tint",
      },
      craftSubtitle: {
        ar: "عزل حراري متقدم للأشعة تحت الحمراء بنسبة 98% مع وضوح بصري فائق وعدم التأثير على إشارات الاتصال",
        en: "98% Infrared Heat rejection with zero signal interference and crystal-clear night optical clarity.",
      },
      tagline: {
        ar: "حماية ركاب المقصورة من درجات الحرارة المرتفعة والأشعة الضارة",
        en: "Advanced thermal comfort engineered specifically for harsh Middle Eastern climate",
      },
      description: {
        ar: "أفلام نانو سيراميك متعددة الطبقات خالية من المعادن لتفادي أي تشويش على إشارات الهاتف وGPS والملاحة، توفر عزلاً استثنائياً للحرارة والأشعة فوق البنفسجية UV بنسبة 99% للحفاظ على جلود المقصورة من الجفاف والتشقق.",
        en: "Multi-layer non-metallized ceramic films preventing signal degradation on GPS and 5G connections. Delivers 99% UV blockage and up to 98% IR heat reduction, maintaining cool cabin temperatures in peak summer.",
      },
      specs: [
        { ar: "عزل الأشعة تحت الحمراء IR Rejection يصل إلى 98%", en: "Up to 98% Infrared Heat Rejection (IR)" },
        { ar: "حجب 99.9% من الأشعة فوق البنفسجية الضارة UV", en: "99.9% UV-A and UV-B Radiation Block" },
        { ar: "خلو تام من المعادن لعدم التأثير على إشارات 5G وGPS", en: "100% non-metallized ceramic (Zero signal disruption)" },
        { ar: "وضوح رؤية ليلي استثنائي بدون وهج أو تشوه", en: "Superior optical clarity for high-visibility night driving" }
      ],
      warranty: { ar: "ضمان 10 سنوات شامل ضد تغير اللون أو ظهور الفقاعات", en: "10-Year Lifetime Performance Guarantee" },
      duration: { ar: "3 - 5 ساعات", en: "3 - 5 Hours" },
      recommendedFor: { ar: "جميع المركبات الراغبة بأقصى راحة حرارية وحماية للمقصورة", en: "All vehicles requiring optimum thermal insulation & privacy" },
      // PLACEHOLDER IMAGE WITH COMMENT
      imageUrl: vehicleImages.astonMartin,
      imageAlt: { ar: "أستون مارتن بنوافذ معزولة بفيلم نانو سيراميك عالي النقاء", en: "Aston Martin DB11 with nano-ceramic window tint showing crystal optical clarity" },
      photoReplaceComment: "<!-- REPLACE: Close-up of seamless micro-edge tint installation on frameless sports car door glass -->"
    }
  ],

  process: [
    {
      stepNumber: "01",
      title: { ar: "الفحص والتقييم المجهري", en: "Inspection & Surface Mapping" },
      timeframe: { ar: "ساعة واحدة", en: "1 Hour" },
      description: {
        ar: "قياس سماكة الطلاء بجهاز الموجات فوق الصوتية، وفحص عيوب اللكر تحت أضواء طيفية دقيقة لتوثيق حالة كل لوح في بطاقة فحص رقمية.",
        en: "Ultrasonic clearcoat depth measurement and multi-spectrum lighting evaluation to document paint profile in a digital inspection record."
      },
      details: [
        { ar: "قياس سماكة كل لوح بالميكرون (μm)", en: "Micron-level depth mapping across 20+ panel points" },
        { ar: "تصوير العيوب المجهرية بعدسات ماكرو", en: "Macro photography of swirl severity and stone chips" }
      ],
      iconName: "Scan"
    },
    {
      stepNumber: "02",
      title: { ar: "التطهير الكيميائي والميكانيكي", en: "Decontamination & Claying" },
      timeframe: { ar: "3 ساعات", en: "3 Hours" },
      description: {
        ar: "غسيل مفصل بماء مقطر خالٍ من الأملاح، مع معالجة برادة الحديد والشوائب العالقة كيميائياً واستخدام الصلصال التخليقي لاستعادة الملمس الحريري.",
        en: "Multi-stage deionized wash, iron fallout dissolution, and ultra-fine clay bar treatment to remove microscopic bonded contaminants."
      },
      details: [
        { ar: "تفكيك ذرات الحديد العالقة بمحاليل متوازنة الحموضة", en: "pH-neutral ferrous particle chemical breakdown" },
        { ar: "تنظيف حواف الألواح والمفصلات بفرش شعر المهر الطبيعي", en: "Fine horsehair badge and emblem crevice agitation" }
      ],
      iconName: "Sparkles"
    },
    {
      stepNumber: "03",
      title: { ar: "التصحيح البصري للطلاء", en: "Optical Paint Correction" },
      timeframe: { ar: "6 - 18 ساعة", en: "6 - 18 Hours" },
      description: {
        ar: "صقل متعدد المراحل بأحدث أجهزة التلميع المزدوجة ومركبات التلميع الدقيقة الخالية من السيليكون لإزالة الخدوش الدقيقة والهولوجرام.",
        en: "Multi-step dual-action polishing utilizing diminishing micro-abrasives to eradicate swirls, oxidation, and micro-marring permanently."
      },
      details: [
        { ar: "مرحلة القطع لإزالة الدوائر والخدوش العميقة", en: "Compound cut step to eliminate deep imperfections" },
        { ar: "مرحلة الصقل النهائي (Jeweling) لعمق الانعكاس", en: "Jeweling finish for liquid-glass optical depth" }
      ],
      iconName: "Wand2"
    },
    {
      stepNumber: "04",
      title: { ar: "تطبيق طبقات النانوسيراميك / الأفلام", en: "Coating / Film Matrix Application" },
      timeframe: { ar: "4 - 8 ساعات", en: "4 - 8 Hours" },
      description: {
        ar: "مسح السطح بكحول الأيزوبروبيل وإرساء مصفوفة Crystal Serum Ultra أو أفلام PPF في غرفة معزولة حرارياً ومفرغة من الغبار بنسبة 100%.",
        en: "Panel wipe IPA strip followed by precision installation of Gtechniq Crystal Serum Ultra or PPF in our positive-pressure clean room."
      },
      details: [
        { ar: "تطبيق متقاطع لضمان تماسك الجزيئات بالتساوي", en: "Cross-hatch microscopic leveling for uniform bonding" },
        { ar: "تطبيق طبقة EXO v5 الطاردة للسوائل فوق السيراميك", en: "EXO v5 ultra-slick hydrophobic top barrier overlay" }
      ],
      iconName: "ShieldCheck"
    },
    {
      stepNumber: "05",
      title: { ar: "المعالجة الحرارية تحت أشعة IR", en: "Infrared Curing Chamber" },
      timeframe: { ar: "12 - 24 ساعة", en: "12 - 24 Hours" },
      description: {
        ar: "تثبيت روابط النانوسيراميك بواسطة لوحات التسخين بالأشعة تحت الحمراء قصيرة الموجة لضمان أقصى درجات الصلابة 10H ومقاومة العوامل الجوية.",
        en: "Short-wave infrared lamp curing accelerates cross-linking density, achieving immediate 10H structural hardness and chemical lock."
      },
      details: [
        { ar: "معالجة حرارية مضبوطة بدرجة حرارة 65°C لكل لوح", en: "Controlled 65°C thermal baking per individual panel" },
        { ar: "استقرار روابط البوليمر قبل التعرض للظروف الخارجية", en: "Molecular lattice stability before road exposure" }
      ],
      iconName: "Sun"
    },
    {
      stepNumber: "06",
      title: { ar: "التسليم مع بطاقة الضمان المعتمد", en: "Handover with Certified Warranty" },
      timeframe: { ar: "30 دقيقة", en: "30 Minutes" },
      description: {
        ar: "فحص جودة نهائي من كبير الحرفيين، تسليم كتيب العناية الدورية، وتوثيق الضمان الدولي المعتمد من Gtechniq برقم الهيكل في النظام العالمي.",
        en: "Master detailer sign-off, delivery of the bespoke care kit, and international Gtechniq digital warranty registration tied to vehicle VIN."
      },
      details: [
        { ar: "شهادة ضمان رسمية مسجلة في قاعدة بيانات Gtechniq UK", en: "Official digital certificate registered in Gtechniq UK database" },
        { ar: "باقة منتجات غسيل آمن متوافقة مع السيراميك مجاناً", en: "Complimentary pH-neutral maintenance wash starter pack" }
      ],
      iconName: "Award"
    }
  ],

  beforeAfterComparisons: [
    {
      id: "swirl-correction-black",
      title: { ar: "تصحيح طلاء أسود عميق (بورشه 911 GT3)", en: "Deep Black Paint Correction (Porsche 911 GT3)" },
      category: { ar: "تصحيح الطلاء", en: "Paint Correction" },
      vehicleModel: "Porsche 911 GT3 RS",
      beforeLabel: { ar: "قبل: دوائر غسيل شديدة وبهتان بصري", en: "Before: Severe swirl haze & wash scratches" },
      afterLabel: { ar: "بعد: مرآة نقية خالية من العيوب 99%", en: "After: 99% optical clarity mirror finish" },
      baseImage: vehicleImages.porsche911,
      comparisonType: "paint-correction",
      photoReplaceComment: "<!-- REPLACE: High-resolution macro shot of Porsche 911 fender for before/after comparison -->",
      description: {
        ar: "مقارنة على نفس اللوح: إزالة كاملة لدوائر الغسيل والهولوجرامات الناتجة عن المغاسل التقليدية واستعادة عمق اللون الأسود الأصلي مع حماية Crystal Serum Ultra.",
        en: "Inspecting the exact same panel: 100% elimination of rotary buffer trails and heavy wash micro-scratches, sealed with Gtechniq Crystal Serum Ultra."
      }
    },
    {
      id: "hydrophobic-beading",
      title: { ar: "طرد المياه الفائق والسلوك المائي (مرسيدس AMG G63)", en: "Extreme Hydrophobic Contact Angle (Mercedes-AMG G63)" },
      category: { ar: "نانوسيراميك", en: "Ceramic Coating" },
      vehicleModel: "Mercedes-AMG G63",
      beforeLabel: { ar: "قبل: ركود المياه وامتصاص الأوساخ", en: "Before: Flat water sheet & dirt film" },
      afterLabel: { ar: "بعد: تدحرج فوري لقطرات الماء 112°", en: "After: Instant 112° water bead roll-off" },
      baseImage: vehicleImages.mercedesG63,
      comparisonType: "hydrophobic-bead",
      photoReplaceComment: "<!-- REPLACE: High-resolution macro shot of Mercedes G63 hood for water beading comparison -->",
      description: {
        ar: "مقارنة على نفس اللوح: تشتت المياه وركود الأوساخ على السطح غير المحمي مقابل الانزلاق الفوري للقطرات بفعل مصفوفة EXO v5 النانوية.",
        en: "Inspecting the exact same hood panel: Water sheeting and road grime adhesion vs instantaneous 112° hydrophobic bead roll-off from EXO v5."
      }
    },
    {
      id: "leather-restoration",
      title: { ar: "ترميم الجلود الطبيعية والمقصورة (بنتلي كونتيننتال)", en: "Natural Leather Restoration (Bentley Continental GT)" },
      category: { ar: "العناية بالمقصورة", en: "Interior Care" },
      vehicleModel: "Bentley Continental GT",
      beforeLabel: { ar: "قبل: لمعان زيتي وتراكم بقع الصبغة", en: "Before: Greasy glaze & denim dye transfer" },
      afterLabel: { ar: "بعد: ملمس مطفي نقي وحماية L1 Guard", en: "After: Factory-matte natural grain texture" },
      baseImage: vehicleImages.rollsRoyce,
      comparisonType: "leather-restoration",
      photoReplaceComment: "<!-- REPLACE: High-resolution macro shot of Bentley luxury leather seat for before/after comparison -->",
      description: {
        ar: "مقارنة على نفس المقعد: استخراج الزيوت المتراكمة وإزالة لمعان السيليكون الزائف مع حماية L1 Leather Guard المانعة لصبغة الجينز.",
        en: "Inspecting the exact same seat bolster: Extraction of body oils and greasy silicone residues, restoring the OEM supple matte leather grain."
      }
    }
  ],

  pricingTiers: [
    {
      id: "essential-tier",
      name: { ar: "الحزمة الأساسية (Essential)", en: "Essential Atelier" },
      subtitle: { ar: "حماية النانوسيراميك المعيارية للمركبات اليومية", en: "Certified single-stage ceramic preservation for daily luxury" },
      coverageYears: "3",
      sedanPrice: "2,400",
      suvPrice: "2,800",
      exoticPrice: "3,400",
      gtechniqGrade: { ar: "Gtechniq Crystal Light + EXO v5", en: "Gtechniq Crystal Light + EXO v5" },
      bestFor: { ar: "السيارات الجديدة والباحثين عن لمعان وسهولة غسيل فائقة", en: "New vehicle deliveries requiring high gloss and easy wash" },
      features: [
        { ar: "تطهير كيميائي وميكانيكي شامل للطلاء", en: "Full chemical & clay bar decontamination" },
        { ar: "تصحيح طلاء مرحلة واحدة لإزالة الخدوش الخفيفة (75%+)", en: "Single-stage optical paint refinement (75%+ defect removal)" },
        { ar: "طبقة نانوسيراميك Crystal Light مع طبقة EXO v5", en: "Gtechniq Crystal Light 9H base + EXO v5 top coat" },
        { ar: "حماية زجاج النوافذ الأمامي بطبقة G1 ClearVision", en: "G1 ClearVision hydrophobic windshield coating" },
        { ar: "حماية وتلميع جنوط السيارة الخارجية", en: "Wheel face ceramic sealant application" },
        { ar: "ضمان معتمد لمدة 3 سنوات", en: "3-Year Registered Studio Warranty" }
      ]
    },
    {
      id: "signature-tier",
      name: { ar: "حزمة التوقيع (Signature)", en: "Signature Crystal Serum" },
      subtitle: { ar: "المعيار الذهبي المعتمد مع Crystal Serum Ultra 10H الحصري", en: "The flagship Gtechniq Accredited 10H ceramic system" },
      coverageYears: "9",
      isPopular: true,
      sedanPrice: "4,200",
      suvPrice: "4,800",
      exoticPrice: "5,600",
      gtechniqGrade: { ar: "Crystal Serum Ultra 10H + Dual EXO v5", en: "Crystal Serum Ultra 10H + Dual EXO v5" },
      bestFor: { ar: "المركبات الفاخرة وعشاق الكمال البصري والحماية طويلة الأمد", en: "High-end luxury sedans, sports cars, and long-term equity" },
      features: [
        { ar: "فحص مجهري وقياس سماكة الطلاء بالموجات فوق الصوتية", en: "Ultrasonic clearcoat depth profiling & defect map" },
        { ar: "تصحيح طلاء متعدد المراحل (تصحيح عيوب 95%+)", en: "Multi-stage optical paint correction (95%+ correction)" },
        { ar: "تطبيق طبقة Crystal Serum Ultra 10H الحصرية للمعتمدين", en: "Accredited-only Crystal Serum Ultra 10H composite matrix" },
        { ar: "طبقتان من مصفوفة EXO v5 لطرد فائق للسوائل والزيوت", en: "Dual layer EXO v5 ultra-hydrophobic slick barrier" },
        { ar: "معالجة حرارية بالأشعة تحت الحمراء IR Curing Chamber", en: "Infrared thermal chamber molecular curing" },
        { ar: "حماية كامل جنوط العجلات والفرامل بطبقة C5 Wheel Armour", en: "Full wheel barrel & caliper C5 Wheel Armour protection" },
        { ar: "حماية النوافذ بالكامل بطبقة G1 Smart Glass", en: "Complete 360° G1 Smart Glass rain repellant" },
        { ar: "حماية المقصورة الجلدية بـ L1 Leather Guard مجاناً", en: "Complimentary L1 Leather & Smart Fabric cabin treatment" },
        { ar: "ضمان دولي رسمي موثق لمدة 9 سنوات مسجل في Gtechniq UK", en: "Official 9-Year Gtechniq International Guarantee on VIN" }
      ]
    },
    {
      id: "bespoke-tier",
      name: { ar: "الحزمة الحصرية (Bespoke Atelier)", en: "Bespoke PPF & Serum Armor" },
      subtitle: { ar: "الدمج الأرقى بين فيلم الحماية الكامل PPF وسيراميك 10H", en: "The ultimate convergence of full-body PPF and 10H ceramic" },
      coverageYears: "10+",
      sedanPrice: "14,500",
      suvPrice: "16,800",
      exoticPrice: "19,500",
      gtechniqGrade: { ar: "Full Body Self-Healing PPF + HALO Ceramic", en: "Full Body Self-Healing PPF + HALO Ceramic" },
      bestFor: { ar: "السيارات النادرة، السوبركار، والاستخدام العنيف على الطرق السريعة", en: "Hypercars, rare exotics, and maximum road-gravel defense" },
      features: [
        { ar: "تغليف كامل للهيكل بفيلم حماية ذاتي المعالجة 8.5 mil", en: "Full-body 8.5 mil self-healing Paint Protection Film (PPF)" },
        { ar: "قص رقمي بالكمبيوتر وثني كامل ومخفي لجميع الحواف", en: "100% digital edge wrapped pattern without disassembly" },
        { ar: "طبقة نانوسيراميك Gtechniq HALO المخصصة لحماية أفلام PPF", en: "Gtechniq HALO ultra-flexible ceramic applied over PPF" },
        { ar: "تصحيح طلاء مجهري للمناطق المكشوفة قبل التغليف", en: "Pre-install jeweling paint correction for zero trapped defects" },
        { ar: "حماية جنوط العجلات والفرامل ونظام العادم", en: "C5 Wheel & exhaust tip ceramic encapsulation" },
        { ar: "حماية داخلية متكاملة لأسطح البيانو بلاك والشاشات بـ PPF", en: "Interior touchscreen & carbon fiber PPF protection" },
        { ar: "باقة VIP للمتابعة والغسيل المفصل كل 6 أشهر", en: "VIP bi-annual maintenance detailing inspection package" },
        { ar: "ضمان شامل لمدة 10 سنوات ضد الاصفرار وتلف الفيلم", en: "10-Year Comprehensive PPF & Ceramic Studio Warranty" }
      ]
    }
  ],

  amenities: [
    {
      id: "accessibility",
      title: { ar: "استوديو مهيأ بالكامل لذوي الاحتياجات", en: "Wheelchair Accessible Facility" },
      description: { ar: "مداخل واستراحة وممرات مصممة بدون عوائق حركية لراحة جميع عملائنا الكرام.", en: "Zero-step entrances, wide ramps, and fully accessible studio premises." },
      icon: "Accessibility"
    },
    {
      id: "vip-lounge",
      title: { ar: "استراحة VIP مع إطلالة بانورامية على صالة العمل", en: "VIP Viewing Lounge & Espresso Bar" },
      description: { ar: "استمتع بقهوة مختصة وشبكة إنترنت فائقة السرعة مع نافذة زجاجية لمتابعة سيارتك أثناء العناية بها.", en: "Curated specialty coffee, high-speed Wi-Fi, and live glass viewing window into the detailing bay." },
      icon: "Coffee"
    },
    {
      id: "payments",
      title: { ar: "مدفوعات إلكترونية وApple Pay وتابي/تمارا", en: "Digital Payments, Apple Pay & NFC" },
      description: { ar: "نقبل جميع بطاقات مدى، فيزا، ماستركارد، أمريكان إكسبريس، مع خيارات التقسيط الميسر.", en: "Seamless contactless payments, Apple Pay, Mada, credit cards, and flexible installment options." },
      icon: "CreditCard"
    },
    {
      id: "climate-controlled",
      title: { ar: "صالة معالجة معقمة وخالية من الغبار", en: "Clean-Room Lighting & Filtration" },
      description: { ar: "نظام ترشيح هواء إيجابي الضغط مع إضاءة طيفية متطورة 5500K لضمان بيئة تطبيق نقية 100%.", en: "Positive-pressure dust filtration and 5500K color-calibrated inspection arrays." },
      icon: "Wind"
    },
    {
      id: "restroom",
      title: { ar: "مرافق وخدمات نظيفة ومجهزة داخل الموقع", en: "Private Executive Restroom" },
      description: { ar: "مرافق صحية خاصة ونظيفة مجهزة بأعلى معايير الفندقة لخدمة ضيوف الاستوديو.", en: "Spotless, sanitized private restrooms maintained to premium hospitality standards." },
      icon: "Sparkle"
    }
  ],

  gallery: [
    {
      id: "g1",
      title: { ar: "بورشه 911 GT3 - طبقات Crystal Serum Ultra", en: "Porsche 911 GT3 - Crystal Serum Ultra 10H" },
      category: "ceramic",
      vehicle: "Porsche 911 GT3",
      treatmentSpecs: {
        ar: "سيراميك Crystal Serum Ultra 10H + طبقتين EXO v5",
        en: "Crystal Serum Ultra 10H + Dual EXO v5 Matrix"
      },
      description: {
        ar: "تطبيق مصفوفة النانوسيراميك 10H على هيكل بورشه 911 GT3 بلون ناردو غراي، مع معالجة بالأشعة تحت الحمراء وحماية جنوط المغنيسيوم بطبقة C5 Wheel Armour.",
        en: "Accredited 10H ceramic application on Porsche 911 GT3 Nardo Grey bodywork, cured via IR heat lamps with C5 Wheel Armour on magnesium rims."
      },
      imageUrl: vehicleImages.porsche911,
      imageAlt: { ar: "بورشه 911 GT3 بلون رمادي ناردو مع انعكاس ضوئي فائق لسيراميك 10H", en: "Porsche 911 GT3 Nardo Grey reflecting studio lighting with 10H ceramic" },
      photoReplaceComment: "<!-- REPLACE: High-res macro photo of Porsche coated with Gtechniq Serum Ultra -->"
    },
    {
      id: "g2",
      title: { ar: "مرسيدس AMG G63 - تغليف PPF كامل مطفي", en: "Mercedes-AMG G63 - Full Satin PPF" },
      category: "ppf",
      vehicle: "Mercedes-AMG G63",
      treatmentSpecs: {
        ar: "فيلم حماية كامل مطفي 8.5 mil + نانوسيراميك HALO",
        en: "Full Satin Self-Healing PPF + HALO Ceramic"
      },
      description: {
        ar: "تغليف كامل لهيكل مرسيدس جي كلاس بفيلم حماية مطفي عالي السماكة مع ثني كامل للحواف لحماية الطلاء من رمال الطرق السريعة والحصى المتطاير.",
        en: "Full-body satin paint protection film installed on Mercedes-AMG G63 SUV with hidden edge wraps and Gtechniq HALO flexible top coat."
      },
      imageUrl: vehicleImages.mercedesG63,
      imageAlt: { ar: "مرسيدس جي كلاس G63 مغلفة بفيلم حماية مطفي ذاتي المعالجة", en: "Mercedes-AMG G63 SUV in stealth satin PPF with fully wrapped edges" },
      photoReplaceComment: "<!-- REPLACE: Full wrap photo of G-Wagon in custom satin PPF -->"
    },
    {
      id: "g3",
      title: { ar: "فيراري F8 تريبوتو - تصحيح طلاء مجهري", en: "Ferrari F8 Tributo - Optical Jeweling" },
      category: "exotic",
      vehicle: "Ferrari F8 Tributo",
      treatmentSpecs: {
        ar: "تصحيح طلاء 99% مجهري + سيراميك Crystal Serum",
        en: "99% Paint Correction + Crystal Serum Composite"
      },
      description: {
        ar: "صقل متعدد المراحل للون الأحمر Rosso Corsa لإزالة جميع الدوائر الدقيقة والأكسدة واستعادة النقاء البصري الفائق للمركبات الإيطالية الفارهة.",
        en: "Multi-stage jeweling correction on Rosso Corsa Ferrari F8 paintwork, eradicating swirl trails and achieving optical mirror clarity."
      },
      imageUrl: vehicleImages.ferrariF8,
      imageAlt: { ar: "فيراري F8 حمراء بلمعان كريستالي بعد تصحيح الطلاء المجهري", en: "Rosso Corsa Ferrari F8 gleaming under 5500K inspection lights" },
      photoReplaceComment: "<!-- REPLACE: Macro shot of Ferrari Rosso Corsa paint perfection -->"
    },
    {
      id: "g4",
      title: { ar: "رولز رويس كولينان - حماية الجلود والمقصورة", en: "Rolls-Royce Cullinan - Bespoke Cabin Shield" },
      category: "ceramic",
      vehicle: "Rolls-Royce Cullinan",
      treatmentSpecs: {
        ar: "حماية الجلود بـ L1 Leather Guard وSmart Fabric",
        en: "Gtechniq L1 Leather Guard & Smart Fabric"
      },
      description: {
        ar: "تنظيف جلود رولز رويس بالبخار الجاف وحمايتها بطبقة نانوية مضادة لنقل صبغات الجينز والأشعة فوق البنفسجية مع الحفاظ على ملمس الجلد الطبيعي الأصلي.",
        en: "Dry-steam decontamination and hydrophobic encapsulation of Rolls-Royce natural aniline leather with anti-dye transfer protection."
      },
      imageUrl: vehicleImages.rollsRoyce,
      imageAlt: { ar: "مقصورة رولز رويس بجلود فاخرة معالجة بـ L1 Leather Guard", en: "Pristine white leather interior of Rolls-Royce protected with Gtechniq L1" },
      photoReplaceComment: "<!-- REPLACE: Macro shot of ultra-luxury interior leather detailing -->"
    },
    {
      id: "g5",
      title: { ar: "بي إم دبليو M4 كومبتيشن - فيلم حماية للواجهة", en: "BMW M4 Competition - Front Track PPF" },
      category: "ppf",
      vehicle: "BMW M4 Competition",
      treatmentSpecs: {
        ar: "فيلم حماية الواجهة الأمامية والأجنحة بـ PPF الشفاف",
        en: "High-Speed Front Bumper, Bonnet & Fender PPF"
      },
      description: {
        ar: "قص رقمي بالكمبيوتر لحماية الصدام الأمامي والكبوت والمرايا من الصخور وتطاير الأتربة على سرعات الحلبات والطرق السريعة.",
        en: "Precision computer-cut clear PPF wrapped on BMW M4 Competition front end, protecting aerodynamics and carbon fiber from gravel."
      },
      imageUrl: vehicleImages.bmwM4,
      imageAlt: { ar: "واجهة سيارة بي ام دبليو M4 الرياضية بفيلم حماية شفاف بدون فواصل", en: "BMW M4 track package protected against high-speed stone chips" },
      photoReplaceComment: "<!-- REPLACE: Macro shot of seamless bumper PPF installation -->"
    },
    {
      id: "g6",
      title: { ar: "أستون مارتن DB11 - ترميم لمعان عميق 99%", en: "Aston Martin DB11 - Multi-Stage Jeweling" },
      category: "correction",
      vehicle: "Aston Martin DB11",
      treatmentSpecs: {
        ar: "تلميع مجهري ناعم + طبقة سيراميك EXO v5",
        en: "Multi-Stage Diminishing Micro-Abrasive Jeweling"
      },
      description: {
        ar: "ترميم الطلاء الأزرق الميتاليك لأستون مارتن، وإزالة الخدوش الدقيقة تماماً مع إبراز عمق بريق الحبيبات المعدنية تحت الإنارة المعملية.",
        en: "Multi-stage jeweling refinement on Aston Martin DB11 dark metallic finish, achieving 99% optical clarity and high depth of gloss."
      },
      imageUrl: vehicleImages.astonMartin,
      imageAlt: { ar: "أستون مارتن كحلية بلمعان زجاجي بعد مرحلة التلميع النهائي", en: "Midnight blue metallic finish showing absolute zero swirl marks" },
      photoReplaceComment: "<!-- REPLACE: High-contrast reflection shot of dark metallic paint -->"
    }
  ],

  // Clearly identified placeholder testimonials as requested
  reviews: [
    {
      id: "rev-1",
      author: "سلطان العتيبي (نموذج رأي عميل - قابل للاستبدال)",
      vehicle: "Porsche Panamera GTS",
      rating: 5,
      service: { ar: "حزمة Signature Crystal Serum 10H", en: "Signature Crystal Serum 10H Package" },
      comment: {
        ar: "احترافية لا تقارن، استلمت السيارة بلمعان يفوق لمعة الوكالة مع اهتمام مذهل بأدق التفاصيل في الحواف والجنوط. توثيق الضمان الدولي من Gtechniq أعطاني طمأنينة تامة.",
        en: "Incredible craftsmanship. The optical depth on black metallic paint is superior to the factory finish. Official Gtechniq UK warranty registration arrived by email on the same day."
      },
      date: "2026-06-12",
      isPlaceholderNotice: true
    },
    {
      id: "rev-2",
      author: "د. خالد المنصور (نموذج رأي عميل - قابل للاستبدال)",
      vehicle: "Range Rover Autobiography",
      rating: 5,
      service: { ar: "تغليف PPF كامل + سيراميك HALO", en: "Full Body PPF + HALO Ceramic" },
      comment: {
        ar: "دقة ثني حواف فيلم الحماية بدون أي فواصل مرئية كانت مبهرة، والصالة المعقمة والاستراحة تليق بعشاق السيارات الحقيقيين. شكراً لفريق Gtechniq.",
        en: "The tucked edge work on the PPF is completely invisible. The facility itself is exceptionally clean, like a surgical operating theatre. Outstanding result."
      },
      date: "2026-07-04",
      isPlaceholderNotice: true
    },
    {
      id: "rev-3",
      author: "فيصل الراجحي (نموذج رأي عميل - قابل للاستبدال)",
      vehicle: "Mercedes-AMG GT Coupe",
      rating: 5,
      service: { ar: "تصحيح طلاء متعدد المراحل + عزل نانو", en: "Multi-Stage Paint Correction & Nano Tint" },
      comment: {
        ar: "السيارة كانت مليئة بدوائر الغسيل السابقة، بعد عمل فريق الأتيلييه اختفت الخدوش بنسبة 100% ورجع اللون كأنه زجاج سائل. العزل الحراري للنوافذ فارق جداً في الصيف.",
        en: "Permanently resolved all heavy swirl marks from previous careless washes. The thermal rejection from the nano-ceramic window tint made a noticeable difference in Riyadh heat."
      },
      date: "2026-08-01",
      isPlaceholderNotice: true
    }
  ],

  faqs: [
    {
      id: "faq-gtechniq-diff",
      question: {
        ar: "ما الذي يميز مركز Gtechniq المعتمد عن مغاسل ومراكز التلميع العادية؟",
        en: "What differentiates a Gtechniq-Accredited atelier from ordinary detailing shops?"
      },
      answer: {
        ar: "حزمة Crystal Serum Ultra 10H لا تباع للمستهلكين أو المراكز غير المعتمدة، ولا يمكن تطبيقها إلا بعد اجتياز تدريب واختبارات معيارية من شركة Gtechniq في بريطانيا. يضمن ذلك تطبيق المنتج في بيئة خالية من الغبار، واستخدام مجسات قياس سماكة الطلاء، وتوثيق الضمان الدولي المرتبط برقم هيكل سيارتك رسمياً في النظام العالمي.",
        en: "Gtechniq Crystal Serum Ultra is strictly restricted to certified, accredited studios with proven mastery. It cannot be bought over the counter. Our accreditation guarantees laboratory-grade application, ultrasonic depth auditing, and an authentic manufacturer warranty registered in Gtechniq's global database."
      }
    },
    {
      id: "faq-ceramic-vs-scratch",
      question: {
        ar: "هل يحمي طلاء النانوسيراميك من ضربات الحصى والخدوش القوية؟",
        en: "Does ceramic coating protect against rock chips and deep key scratches?"
      },
      answer: {
        ar: "النانوسيراميك مصمم لتوفير صلابة كيميائية 10H ومقاومة فائقة لدوائر الغسيل الدقيقة، بهتان الأشعة فوق البنفسجية، فضلات الطيور، والملوثات الكيميائية، مع إعطاء طرد مائي جبار. أما لحماية السيارة من ضربات الحصى السريع وتطاير الرمال والخدوش الفيزيائية العميقة، فإن الحل الهندسي المثالي هو أفلام حماية الطلاء PPF، أو دمج الاثنين معاً في حزمة Bespoke.",
        en: "Ceramic coating creates a 10H chemical hardness against micro-swirls, UV fading, chemical etching, and environmental acids with extreme hydrophobicity. For physical impact protection against flying highway gravel and stone chips, Paint Protection Film (PPF) is the definitive engineering solution."
      }
    },
    {
      id: "faq-duration",
      question: {
        ar: "كم تستغرق مدة العمل على السيارة في الاستوديو؟",
        en: "How long does a detailing and protection project take?"
      },
      answer: {
        ar: "بسبب التزامنا بالجودة الحرفية ومراحل المعالجة الحرارية: تستغرق الحزمة الأساسية (Essential) من يومين إلى 3 أيام عمل، وحزمة Crystal Serum Ultra من 3 إلى 4 أيام عمل (شاملة المعالجة تحت أشعة IR)، بينما يستغرق تغليف PPF الكامل من 4 إلى 6 أيام عمل لضمان جفاف السوائل وثني الحواف باحترافية تامة.",
        en: "Due to our exacting standards and necessary infrared curing times: Ceramic packages take 2-3 atelier days, Crystal Serum Ultra takes 3-4 days (including IR chamber baking), and full-body PPF wraps require 4-6 days for meticulous curing and seamless edge wrapping."
      }
    },
    {
      id: "faq-mobile-service",
      question: {
        ar: "هل تقدمون خدمة التلميع وتطبيق السيراميك المتنقل في المنزل؟",
        en: "Do you offer mobile or on-site driveway detailing services?"
      },
      answer: {
        ar: "نعتذر عن تقديم خدمات التلميع أو السيراميك خارج الاستوديو. تطبيق طبقات النانوسيراميك المعتمدة وتصحيح الطلاء يتطلب بيئة معقمة ومغلقة بإيجابية الضغط لمنع ذرات الغبار، مع إضاءة طيفية 5500K وأجهزة تسخين حراري IR متخصصة لا يمكن توفيرها في المواقف المفتوحة أو المنازل. نحن نوفر خدمة نقل السيارات المغلقة (Flatbed) من وإلى باب منزلك.",
        en: "We strictly do not perform paint correction or ceramic installations on-site. Certified 10H composite coatings require a controlled, dust-filtered clean room with 5500K CRI lighting and short-wave IR baking arrays. We offer enclosed flatbed vehicle transport to and from your residence upon request."
      }
    },
    {
      id: "faq-warranty-rules",
      question: {
        ar: "كيف يعمل ضمان الـ 9 سنوات وما هي متطلبات المحافظة عليه؟",
        en: "How does the 9-year warranty work and what maintenance is required?"
      },
      answer: {
        ar: "عند تسليم السيارة، نمنحك بطاقة الضمان الإلكتروني الرسمية المسجلة لدى Gtechniq UK برقم الهيكل. للمحافظة على سريان الضمان، نوفر لك إرشادات الغسيل الآمن ونوصي بزيارة فحص وصيانة دورية كل 12 شهراً لتنظيف المسامات وتجديد طبقة طرد السوائل العلوية بتكلفة رمزية.",
        en: "Upon delivery, you receive an official Gtechniq digital warranty certificate linked to your vehicle's VIN. To maintain validity, simply follow our pH-neutral wash guidelines and visit our atelier once every 12 months for a decon check and hydrophobic refresh."
      }
    }
  ]
};
