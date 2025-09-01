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

// Team Members Data - Executive Leadership Team
export const teamMembers: TeamMember[] = [
  {
    id: "awwab-abdul",
    name: "Awwab Abdul",
    role: "Founder & CEO",
    avatar: "/lovable-uploads/4b4a830d-afce-4dc3-8cc3-4fae3e2728ed.png",
    socialLinks: {
      instagram: "https://www.instagram.com/theawwababdul/?hl=en",
      linkedin: "https://linkedin.com/in/awwababdul"
    },
    bio: "12+ years leading enterprise AI transformations across MENA. Former Strategy Director at McKinsey Dubai. MIT AI Ethics certified. Keynote speaker at World Government Summit 2024. Advisory board member, UAE AI Council."
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
    title: "NEXUS Health Platform",
    description: "AI-powered diagnostic assistant and patient management system for healthcare providers.",
    imageUrl: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d",
    tags: ["Healthcare", "AI", "System Design"],
    externalLink: "#"
  },
  {
    id: "project-2",
    title: "FinCore Banking OS",
    description: "Next-generation core banking system with integrated AI for risk assessment and customer insights.",
    imageUrl: "https://images.unsplash.com/photo-1563986768609-322da13575f3",
    tags: ["Fintech", "Banking", "Enterprise"],
    externalLink: "#"
  },
  {
    id: "project-3",
    title: "RetailIQ",
    description: "Retail intelligence platform for inventory optimization and personalized customer experiences.",
    imageUrl: "https://images.unsplash.com/photo-1534452203293-494d7ddbf7e0",
    tags: ["Retail", "Analytics", "CX"],
    externalLink: "#"
  },
  {
    id: "project-4",
    title: "LogisticsHive",
    description: "End-to-end logistics management platform with predictive routing and real-time tracking.",
    imageUrl: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e", // Fixed this to include imageUrl
    videoUrl: "https://static.videezy.com/system/resources/previews/000/021/807/original/abstract-flowing-neon-lines-loopable-background-4k.mp4",
    tags: ["Logistics", "Automation", "Enterprise"],
    externalLink: "#"
  }
];

// Client Logos Data (Unchanged)
export const clientLogos: ClientLogo[] = [
  {
    id: "client-1",
    name: "Acme Corporation",
    imageUrl: "https://via.placeholder.com/150x50?text=ACME",
    height: 50
  },
  {
    id: "client-2",
    name: "Tech Innovations",
    imageUrl: "https://via.placeholder.com/150x50?text=TECH+INC",
    height: 50
  },
  {
    id: "client-3",
    name: "Global Solutions",
    imageUrl: "https://via.placeholder.com/150x50?text=GLOBAL",
    height: 50
  },
  {
    id: "client-4",
    name: "Future Systems",
    imageUrl: "https://via.placeholder.com/150x50?text=FUTURE",
    height: 50
  },
  {
    id: "client-5",
    name: "Alpha Industries",
    imageUrl: "https://via.placeholder.com/150x50?text=ALPHA",
    height: 50
  },
  {
    id: "client-6",
    name: "Omega Group",
    imageUrl: "https://via.placeholder.com/150x50?text=OMEGA",
    height: 50
  }
];
