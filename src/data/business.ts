export interface BusinessInfo {
  name: string;
  tagline: string;
  subTagline: string;
  category: string;
  rating: number;
  reviewCount: number;
  priceRange: string;
  phone: string;
  phoneFormatted: string;
  whatsappUrl: string;
  googleMapsUrl: string;
  address: {
    line1: string;
    line2: string;
    city: string;
    state: string;
    pincode: string;
    full: string;
  };
  services: {
    dineIn: boolean;
    driveThrough: boolean;
    noContactDelivery: boolean;
  };
  hours: {
    daily: string;
    note: string;
  };
  koreanMotto: string;
  koreanMottoMeaning: string;
}

export const BUSINESS: BusinessInfo = {
  name: "Lachimolala 7 days a week",
  tagline: "A Little Korea in Chennai",
  subTagline: "Good Food • Good People • Good Vibes • 7 Days a Week",
  category: "Korean Themed Café & Bubble Tea Shop",
  rating: 4.4,
  reviewCount: 27,
  priceRange: "₹1 - ₹400 per person",
  phone: "063792 11723",
  phoneFormatted: "+91 63792 11723",
  whatsappUrl: "https://wa.me/916379211723?text=Hi%20Lachimolala!%20I'd%20like%20to%20order%20or%20check%20table%20availability.",
  googleMapsUrl: "https://maps.google.com/?q=2,+55,+W+Kal+Mandapam+Rd,+Pudumanaikuppam,+Old+Washermanpet,+Chennai,+Tamil+Nadu+600013",
  address: {
    line1: "2, 55, W Kal Mandapam Rd",
    line2: "Pudumanaikuppam, Old Washermanpet",
    city: "Chennai",
    state: "Tamil Nadu",
    pincode: "600013",
    full: "2, 55, W Kal Mandapam Rd, Pudumanaikuppam, Old Washermanpet, Chennai, Tamil Nadu 600013"
  },
  services: {
    dineIn: true,
    driveThrough: true,
    noContactDelivery: true
  },
  hours: {
    daily: "11:00 AM – 10:30 PM",
    note: "Open Daily (Confirm hours on holidays)"
  },
  koreanMotto: "좋은 커피, 좋은 음식, 좋은 하루 ♡",
  koreanMottoMeaning: "Good Coffee, Good Food, Good Days."
};
