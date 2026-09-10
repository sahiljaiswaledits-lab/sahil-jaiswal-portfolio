import { PersonalInfo, PortfolioProject } from '../types.ts';

// ============================================================================
// EDITABLE PERSONAL INFORMATION
// Replace the values below with your details anytime.
// ============================================================================
export const PERSONAL_INFO: PersonalInfo = {
  name: "Sahil Jaiswal",
  role: "Reels Video Editor",
  specialization: "Holiday Package Reels",
  email: "sahiljaiswaledits@gmail.com",
  instagramHandle: "@_tripframe_",
  instagramUrl: "https://www.instagram.com/_tripframe_/",
  // WhatsApp phone number
  whatsappNumber: "+91 7052434134",
  // Fixed profile photo asset
  profilePhoto: `${import.meta.env.BASE_URL}assets/profile/sahil-jaiswal-profile.jpg`,
};

// ============================================================================
// EDITABLE PORTFOLIO PROJECTS (HOLIDAY PACKAGE REELS)
// Update thumbnail images, YouTube URLs (supports Shorts & standard links),
// titles, destinations, and categories below.
// ============================================================================
export const portfolioProjects: PortfolioProject[] = [
  {
    id: "switzerland-escape",
    title: "Switzerland Escape",
    destination: "Switzerland",
    category: "Holiday Package",
    thumbnail: "https://img.youtube.com/vi/4rVNXaOM1Ak/maxresdefault.jpg",
    // YouTube URL
    videoUrl: "https://www.youtube.com/watch?v=4rVNXaOM1Ak",
    duration: "0:30",
  },
  {
    id: "bali-paradise",
    title: "Bali Paradise",
    destination: "Bali",
    category: "Holiday Package",
    thumbnail: "https://img.youtube.com/vi/R6_YNrQse04/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/watch?v=R6_YNrQse04",
    duration: "0:34",
  },
  {
    id: "kerala-escape",
    title: "Kerala Escape",
    destination: "Kerala",
    category: "Holiday Package",
    thumbnail: "https://img.youtube.com/vi/HRH1UVSlsQE/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/watch?v=HRH1UVSlsQE",
    duration: "0:28",
  },
  {
    id: "himachal-story",
    title: "Himachal Escape",
    destination: "Himachal",
    category: "Holiday Package",
    thumbnail: "https://img.youtube.com/vi/JvfMtin47qA/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/watch?v=JvfMtin47qA",
    duration: "0:45",
  },
];

/**
 * Returns formatted WhatsApp link.
 * If number is placeholder, returns a mailto or interactive prompt trigger.
 */
export function getWhatsAppUrl(customMessage?: string): string {
  const defaultMsg = encodeURIComponent("Hi Sahil, I saw your portfolio and would like to discuss video editing for our travel footage / holiday packages.");
  const message = customMessage ? encodeURIComponent(customMessage) : defaultMsg;
  
  let rawNum = PERSONAL_INFO.whatsappNumber.replace(/[^0-9]/g, '');
  if (!rawNum || PERSONAL_INFO.whatsappNumber.includes("[ADD")) {
    // When placeholder is still present, return direct mail fallback
    return `mailto:${PERSONAL_INFO.email}?subject=Project%20Inquiry%20-%20Travel%20Reels%20Editing&body=${message}`;
  }
  
  // If 10-digit Indian number without country code, prefix with 91
  if (rawNum.length === 10) {
    rawNum = `91${rawNum}`;
  }
  
  return `https://wa.me/${rawNum}?text=${message}`;
}
