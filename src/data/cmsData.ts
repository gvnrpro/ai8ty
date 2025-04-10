
// This file serves as a lightweight CMS data store
// In a production environment, this would be fetched from a real CMS or API

export interface ProjectItem {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  videoUrl?: string;
  externalLink?: string;
  tags?: string[];
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  avatar: string;
  linkedIn?: string;
  voiceDemo?: string;
  bio?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  imageUrl: string;
  date: string;
  author: string;
  readMoreLink: string;
  category?: string;
}

// Featured Projects data
export const featuredProjects: ProjectItem[] = [
  {
    id: 'proj1',
    title: 'Neural Brand Identity',
    description: 'AI-generated visual system with adaptive elements',
    imageUrl: 'https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=800&q=80',
    videoUrl: 'https://player.vimeo.com/progressive_redirect/playback/598231558/rendition/720p/file.mp4?loc=external',
    externalLink: '#',
    tags: ['Branding', 'AI Design']
  },
  {
    id: 'proj2',
    title: 'Cognitive Interface',
    description: 'Neural network dashboard for enterprise data visualization',
    imageUrl: 'https://images.unsplash.com/photo-1581090700227-1e37b190418e?auto=format&fit=crop&w=800&q=80',
    externalLink: '#',
    tags: ['UI/UX', 'Data Viz']
  },
  {
    id: 'proj3',
    title: 'Synthetic Media Engine',
    description: 'Custom AI video generator for marketing content',
    imageUrl: 'https://images.unsplash.com/photo-1633496914656-b0c0707b722b?auto=format&fit=crop&w=800&q=80',
    externalLink: '#',
    tags: ['AI Video', 'MarTech']
  },
  {
    id: 'proj4',
    title: 'Digital Twin Platform',
    description: 'Virtual replicas for predictive business intelligence',
    imageUrl: 'https://images.unsplash.com/photo-1563089145-599997674d42?auto=format&fit=crop&w=800&q=80',
    externalLink: '#',
    tags: ['Digital Twin', 'Strategy']
  }
];

// Team Members data
export const teamMembers: TeamMember[] = [
  {
    id: 'tm1',
    name: 'Awwab Abdul',
    role: 'Creative Director',
    avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80',
    linkedIn: 'https://linkedin.com',
    bio: 'Visionary designer with expertise in AI-human collaboration'
  },
  {
    id: 'tm2',
    name: 'Sarah Chen',
    role: 'AI Engineer',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80',
    linkedIn: 'https://linkedin.com',
    bio: 'Machine learning specialist with focus on generative systems'
  },
  {
    id: 'tm3',
    name: 'Marcus Tate',
    role: 'Strategy Lead',
    avatar: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?auto=format&fit=crop&w=400&q=80',
    linkedIn: 'https://linkedin.com',
    bio: 'Business strategist with background in digital transformation'
  },
  {
    id: 'tm4',
    name: 'Anya Lopez',
    role: 'Motion Designer',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
    linkedIn: 'https://linkedin.com',
    bio: 'Cinematic storyteller specializing in 3D animation and VFX'
  }
];

// Blog Posts data
export const blogPosts: BlogPost[] = [
  {
    id: 'blog1',
    title: 'The Future of AI in Creative Industries',
    excerpt: 'How generative systems are reshaping design, marketing, and content creation',
    imageUrl: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=800&q=80',
    date: '2025-03-15',
    author: 'Awwab Abdul',
    readMoreLink: '#',
    category: 'AI Trends'
  },
  {
    id: 'blog2',
    title: 'Digital Identity in the Age of Synthetic Media',
    excerpt: 'Navigating authenticity when everyone has a digital twin',
    imageUrl: 'https://images.unsplash.com/photo-1516251193007-45ef944ab0c6?auto=format&fit=crop&w=800&q=80',
    date: '2025-02-28',
    author: 'Sarah Chen',
    readMoreLink: '#',
    category: 'Digital Strategy'
  },
  {
    id: 'blog3',
    title: 'Designing for the Intelligence Era',
    excerpt: 'New principles for human-AI collaborative interfaces',
    imageUrl: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80',
    date: '2025-02-14',
    author: 'Marcus Tate',
    readMoreLink: '#',
    category: 'Design'
  }
];
