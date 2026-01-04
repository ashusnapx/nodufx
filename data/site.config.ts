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
    avatar: "/images/photo-1.jpg",
    quickFacts: [
      {
        label: "Languages Known",
        value: "English & Kannada",
      },
      { label: "Current Role", value: "Aspiring Developer" },
      { label: "Interests", value: "Reading, Traveling, Classical Dance" },
    ],
    skills: [
      "Java",
      "Spring Boot",
      "Angular",
      "MySQL",
      "Python",
      "Communication",
      "Problem Solving",
      "Creativity",
      "Team Leadership",
      "Time Management",
    ],
    achievements: [
      "State Board Topper ",
      "Awarded for best essay literature in English",
      "Good Anchorer",
    ],
    resumeUrl:
      "https://drive.google.com/file/d/10XPCkM-BZOhVMdPBXRQNWLK2R3VMh8Mc/view?usp=sharing",
  },

  projects: [
    {
      title: "AurumX - CES Redemption Platform",
      description:
        "A production-grade internal banking reward redemption system designed for Customer Executive Support (CES) users to manage rewards on behalf of customers.",
      tags: ["Spring Boot", "Angular", "MySQL", "Spring Security"],
      image: "/images/project-aurumx-ai.png",
      link: "https://github.com/Nagalaxmi-Jawalgi/aurumx",
    },
    {
      title: "AstraTestX: AI TestOps Platform",
      description:
        "A next-generation software testing platform that utilizes AI to automate test case generation, heal broken test scripts, and orchestrate distributed executions.",
      tags: ["AI", "React", "Node.js", "FastAPI", "OpenAI"],
      image: "/images/project-astratestx-ai.png",
      link: "https://github.com/Nagalaxmi-Jawalgi/AstraTestX",
    },
  ],

  gallery: [
    {
      src: "/images/photo-1.jpg",
      alt: "Personal",
      category: "Life",
    },
    {
      src: "/images/photo-2.jpg",
      alt: "Event",
      category: "Memories",
    },
    {
      src: "/images/photo-3.jpg",
      alt: "Team",
      category: "Work",
    },
    {
      src: "/images/photo-4.jpg",
      alt: "Group",
      category: "Friends",
    },
    {
      src: "/images/photo-5.jpg",
      alt: "Celebration",
      category: "Moments",
    },
  ],

  contact: {
    title: "Let's Connect",
    email: "nagalaxmijawalgi1980@gmail.com",
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
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/nagalaxmi-jawalagi-300b49320",
      icon: Linkedin,
    },
    {
      label: "GitHub",
      href: "https://github.com/Nagalaxmi-Jawalgi",
      icon: Github,
    },
    {
      label: "Email",
      href: "mailto:nagalaxmijawalgi1980@gmail.com",
      icon: Mail,
    },
  ],

  footer: {
    copyright: "© 2026 Nagalaxmi Jawalgi. All rights reserved.",
    madeBy: "Nagalaxmi Jawalgi",
  },
};
