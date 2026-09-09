export interface PortfolioProject {
  id: string;
  title: string;
  destination: string;
  category: string;
  thumbnail: string;
  videoUrl: string; // Accepts standard YouTube watch URLs, youtu.be, or YouTube Shorts
  duration?: string;
  aspectRatio?: '9:16';
}

export interface PersonalInfo {
  name: string;
  role: string;
  specialization: string;
  email: string;
  instagramHandle: string;
  instagramUrl: string;
  whatsappNumber: string; // Replace [ADD WHATSAPP NUMBER HERE] with actual number e.g. "+919876543210"
  profilePhoto?: string;
}
