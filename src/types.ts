export type Language = 'ar' | 'en';

export interface LocalizedString {
  ar: string;
  en: string;
}

export interface ShiftTime {
  open: string;  // e.g. "09:00"
  close: string; // e.g. "13:00"
}

export interface DaySchedule {
  dayName: LocalizedString;
  dayIndex: number; // 0 = Sunday, 1 = Monday, ... 5 = Friday, 6 = Saturday
  isClosed?: boolean;
  shifts: ShiftTime[]; // Supports 2 shifts per day
}

export interface AccreditationInfo {
  badgeTitle: LocalizedString;
  badgeSubtitle: LocalizedString;
  partnerName: string;
  accreditationId: string;
  warrantyYearsMax: number;
  certifiedLine: LocalizedString;
  details: LocalizedString[];
}

export interface ServiceItem {
  id: string;
  title: LocalizedString;
  craftSubtitle: LocalizedString;
  tagline: LocalizedString;
  description: LocalizedString;
  specs: LocalizedString[];
  warranty: LocalizedString;
  duration: LocalizedString;
  recommendedFor: LocalizedString;
  imageUrl: string;
  imageAlt: LocalizedString;
  photoReplaceComment: string;
}

export interface ProcessStep {
  stepNumber: string;
  title: LocalizedString;
  timeframe: LocalizedString;
  description: LocalizedString;
  details: LocalizedString[];
  iconName: string;
}

export interface BeforeAfterItem {
  id: string;
  title: LocalizedString;
  category: LocalizedString;
  vehicleModel: string;
  beforeLabel: LocalizedString;
  afterLabel: LocalizedString;
  baseImage: string; // The exact same vehicle photo used for 100% pixel alignment
  comparisonType: 'paint-correction' | 'hydrophobic-bead' | 'leather-restoration';
  photoReplaceComment: string;
  description: LocalizedString;
}

export interface PriceTier {
  id: string;
  name: LocalizedString;
  subtitle: LocalizedString;
  coverageYears: string;
  isPopular?: boolean;
  sedanPrice: string;
  suvPrice: string;
  exoticPrice: string;
  features: LocalizedString[];
  gtechniqGrade: LocalizedString;
  bestFor: LocalizedString;
}

export interface StudioAmenity {
  id: string;
  title: LocalizedString;
  description: LocalizedString;
  icon: string;
}

export interface GalleryItem {
  id: string;
  title: LocalizedString;
  category: 'ceramic' | 'ppf' | 'correction' | 'exotic';
  vehicle: string;
  treatmentSpecs: LocalizedString;
  description: LocalizedString;
  imageUrl: string;
  imageAlt: LocalizedString;
  photoReplaceComment: string;
}

export interface ReviewItem {
  id: string;
  author: string;
  vehicle: string;
  rating: number;
  service: LocalizedString;
  comment: LocalizedString;
  date: string;
  isPlaceholderNotice: boolean;
}

export interface FaqItem {
  id: string;
  question: LocalizedString;
  answer: LocalizedString;
  category?: string;
}

export interface StudioConfig {
  studioName: LocalizedString;
  tagline: LocalizedString;
  establishedYear: number;
  phone: string;
  phoneDisplay: string;
  whatsappNumber: string; // e.g. "966500000000" or international
  email: string;
  address: LocalizedString;
  city: LocalizedString;
  country: LocalizedString;
  mapEmbedUrl: string;
  mapDirectionsUrl: string;
  instagramHandle: string;
  instagramUrl: string;
  snapchatHandle: string;
  snapchatUrl: string;
  tiktokHandle: string;
  tiktokUrl: string;
  accreditation: AccreditationInfo;
  stats: {
    yearsAccredited: number;
    vehiclesProtected: number;
    paintCorrectionHours: number;
    opticalClarityPercent: number;
  };
  schedule: DaySchedule[];
  services: ServiceItem[];
  process: ProcessStep[];
  beforeAfterComparisons: BeforeAfterItem[];
  pricingTiers: PriceTier[];
  amenities: StudioAmenity[];
  gallery: GalleryItem[];
  reviews: ReviewItem[];
  faqs: FaqItem[];
}
