export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  imageUrl: string;
  date: string;
  category: string;
  author?: string; // Adding optional author property
  readMoreLink?: string; // Adding optional readMoreLink property
}

export interface ProjectItem {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  videoUrl?: string;
  tags?: string[];
  externalLink?: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  avatar: string;
  socialLinks?: {
    instagram?: string;
    linkedin?: string;
    twitter?: string;
    website?: string;
  };
  bio?: string; // Adding optional bio property
}

export interface ClientLogo {
  id: string;
  name: string;
  imageUrl: string;
  height: number;
}

// Team Members Data - Feature only Awwab Abdul as CEO
export const teamMembers: TeamMember[] = [
  {
    id: "awwab-abdul",
    name: "Awwab Abdul",
    role: "Founder & CEO",
    avatar: "/lovable-uploads/4b4a830d-afce-4dc3-8cc3-4fae3e2728ed.png",
    socialLinks: {
      instagram: "https://www.instagram.com/theawwababdul/?hl=en"
    },
    bio: "Visionary leader driving AI innovation in business transformation" // Adding a short bio
  }
];

// Blog Posts Data (Unchanged)
export const blogPosts: BlogPost[] = [
  {
    id: "post-1",
    title: "The Future of AI in Business Transformation",
    excerpt: "Exploring how artificial intelligence is reshaping business operations and strategy in 2025 and beyond.",
    imageUrl: "https://images.unsplash.com/photo-1677442136019-21780ecad995",
    date: "2025-04-15",
    category: "AI & Strategy",
    author: "Awwab Abdul",
    readMoreLink: "#"
  },
  {
    id: "post-2",
    title: "Designing Intelligent Interfaces",
    excerpt: "How to create user experiences that leverage AI while maintaining human-centered design principles.",
    imageUrl: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e",
    date: "2025-04-10",
    category: "Design",
    author: "Design Team",
    readMoreLink: "#"
  },
  {
    id: "post-3",
    title: "Strategic Automation: Beyond Cost Cutting",
    excerpt: "Reimagining automation as a strategic growth driver rather than just an operational efficiency tool.",
    imageUrl: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e",
    date: "2025-03-28",
    category: "Strategy",
    author: "Strategy Team",
    readMoreLink: "#"
  }
];

// Featured Projects Data
export const featuredProjects: ProjectItem[] = [
  {
    id: "project-1",
    title: "Brand Rebirth for Lumen Studio",
    description: "Complete rebranding, visual identity, and website for a boutique architecture firm.",
    imageUrl: "/lovable-uploads/4b4a830d-afce-4dc3-8cc3-4fae3e2728ed.png",
    tags: ["Branding", "Web Design", "Identity"],
    externalLink: "#"
  },
  {
    id: "project-2",
    title: "Social Campaign: #CreateTomorrow",
    description: "Award-winning digital campaign for a tech startup launch.",
    imageUrl: "/ai8tyview.jpg",
    tags: ["Campaign", "Social Media", "Creative Direction"],
    externalLink: "#"
  },
  {
    id: "project-3",
    title: "Editorial Design for ArtNow Magazine",
    description: "Print and digital magazine design for a leading art publication.",
    imageUrl: "/favicon-32x32.png",
    tags: ["Editorial", "Print", "Digital"],
    externalLink: "#"
  },
  {
    id: "project-4",
    title: "Interactive Portfolio for Studio Nova",
    description: "Immersive web experience for a creative collective.",
    imageUrl: "/favicon-16x16.png",
    videoUrl: undefined,
    tags: ["Web Experience", "UI/UX", "Animation"],
    externalLink: "#"
  }
];

// Client Logos Data (Unchanged)
export const clientLogos: ClientLogo[] = [
  {
    id: "client-1",
    name: "Acme Corporation",
    imageUrl: "/lovable-uploads/4b4a830d-afce-4dc3-8cc3-4fae3e2728ed.png", // Example real logo
    height: 50
  },
  {
    id: "client-2",
    name: "Tech Innovations",
    imageUrl: "/ai8tyview.jpg", // Example fallback to a real image in public
    height: 50
  },
  {
    id: "client-3",
    name: "Global Solutions",
    imageUrl: "/favicon-32x32.png", // Example fallback
    height: 50
  },
  {
    id: "client-4",
    name: "Future Systems",
    imageUrl: "/favicon-16x16.png", // Example fallback
    height: 50
  },
  {
    id: "client-5",
    name: "Alpha Industries",
    imageUrl: "/apple-touch-icon.png", // Example fallback
    height: 50
  },
  {
    id: "client-6",
    name: "Omega Group",
    imageUrl: "/android-chrome-192x192.png", // Example fallback
    height: 50
  }
];
