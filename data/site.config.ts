import {
  type LucideIcon,
  Github,
  Twitter,
  Linkedin,
  Mail,
  Instagram,
  Dribbble,
} from "lucide-react";

export interface SiteConfig {
  name: string;
  title: string;
  tagline: string;
  description: string;
  socials: {
    label: string;
    href: string;
    icon?: LucideIcon;
  }[];
  nav: {
    label: string;
    href: string;
  }[];
  hero: {
    title: string;
    subtitle: string;
    description: string;
    cta: string;
    ctaLink: string;
  };
  about: {
    title: string;
    description: string;
    avatar: string;
    quickFacts: { label: string; value: string }[];
    skills: string[];
    achievements: string[];
    resumeUrl: string;
  };
  contact: {
    title: string;
    email: string;
    cta: string;
  };
  projects: {
    title: string;
    description: string;
    tags: string[];
    image: string;
    link: string;
  }[];
  gallery: {
    src: string;
    alt: string;
    category: string;
  }[];
  footer: {
    copyright: string;
    madeBy: string;
  };
}

export const siteConfig: SiteConfig = {
  name: "Nagalaxmi Jawalgi",
  title: "Nagalaxmi Jawalgi — Portfolio",
  tagline: "Brief Introduction",
  description:
    "Personal portfolio of Nagalaxmi Jawalgi, showcasing skills, achievements, and creativity.",

  hero: {
    title: "Hi, I'm Nagalaxmi Jawalgi",
    subtitle: "ನಮಸ್ಕಾರ, ನಾನು ನಾಗಲಕ್ಷ್ಮಿ ಜವಳಗಿ", // Kannada text
    description:
      "I am a passionate individual exploring the intersections of technology and creativity. Welcome to my world of design, code, and storytelling.",
    cta: "Explore My Work",
    ctaLink: "#featured",
  },

  about: {
    title: "About Me",
    description:
      "I am a dedicated professional with a vivid imagination and a knack for problem-solving. My journey is defined by a continuous quest for learning and excellence. I believe in creating work that not only functions well but also inspires.",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1000&auto=format&fit=crop", // Placeholder female avatar
    quickFacts: [
      {
        label: "Languages Known",
        value: "English & Kannada (ಇಂಗ್ಲಿಷ್ ಮತ್ತು ಕನ್ನಡ)",
      },
      { label: "Current Role", value: "Aspiring Developer / Creative Thinker" },
      { label: "Interests", value: "Reading, Traveling, Classical Music" },
    ],
    skills: [
      "Communication",
      "Problem Solving",
      "Creativity",
      "Team Leadership",
      "Time Management",
    ],
    achievements: [
      "Best Performer 2024",
      "Certified Creative Thinker",
      "Community Volunteer Award",
    ],
    resumeUrl: "/resume.pdf",
  },

  projects: [
    {
      title: "Project Alpha",
      description:
        "A comprehensive study on user interactions and digital interfaces.",
      tags: ["Research", "UI/UX"],
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
      link: "#",
    },
    {
      title: "Creative Canvas",
      description:
        "An exploratory art project blending traditional methods with digital tools.",
      tags: ["Art", "Digital"],
      image:
        "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=2000&auto=format&fit=crop",
      link: "#",
    },
  ],

  gallery: [
    {
      src: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1000&auto=format&fit=crop",
      alt: "Hobby 1",
      category: "Hobbies",
    },
    {
      src: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=1000&auto=format&fit=crop",
      alt: "Art 1",
      category: "Inspiration",
    },
    {
      src: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?q=80&w=1000&auto=format&fit=crop",
      alt: "Travel 1",
      category: "Life",
    },
    {
      src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1000&auto=format&fit=crop",
      alt: "Team",
      category: "Achievements",
    },
    {
      src: "https://images.unsplash.com/photo-1469474932796-b494c71f2bb2?q=80&w=1000&auto=format&fit=crop",
      alt: "Nature",
      category: "Inspiration",
    },
  ],

  contact: {
    title: "Let's Connect",
    email: "nagalaxmi@example.com",
    cta: "Get in Touch",
  },

  nav: [
    { label: "Home", href: "/" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Achievements", href: "#achievements" },
    { label: "Gallery", href: "#gallery" },
    { label: "Contact", href: "#contact" },
  ],

  socials: [
    { label: "LinkedIn", href: "https://linkedin.com", icon: Linkedin },
    { label: "GitHub", href: "https://github.com", icon: Github },
    { label: "Email", href: "mailto:nagalaxmi@example.com", icon: Mail },
  ],

  footer: {
    copyright: "© 2026 Nagalaxmi Jawalgi. All rights reserved.",
    madeBy: "Nagalaxmi Jawalgi",
  },
};
