import type { Project } from "@/types/project";

export const projects: Project[] = [
  {
    slug: "income-builders",
    title: "Income Builders",
    shortDescription:
      "A modern content platform designed to educate readers, grow an audience, and capture leads.",
    description:
      "Income Builders is a modern content-driven platform focused on delivering valuable content while creating opportunities for audience growth and lead generation.",
    category: "blog-content",
    status: "completed",
    featured: true,
    heroShowcase: true,
    priority: 2,
    industry: "Content & Digital Education",
    services: [
      "UI/UX Design",
      "Web Development",
      "Content Platform Development",
      "Lead Generation",
    ],
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "MDX",
    ],
    thumbnail: "/images/projects/income-builders/thumbnail.webp",
    heroImage: "/images/projects/income-builders/hero.webp",
    liveUrl: "https://smart-income-builders.vercel.app/start-here",
    caseStudy: {
  challenge:
    "Create a modern content platform that could deliver valuable educational content while building an audience and capturing leads.",
  solution:
    "Designed and developed a responsive content experience with a strong reading experience, structured content, and lead capture functionality.",
  outcome:
    "A modern content platform that provides a strong foundation for publishing, audience growth, and future digital products.",
},
screenshots: [
  {
    src: "/images/projects/income-builders/dashboard.webp",
    alt: "Income Builders dashboard showing the platform's content experience",
    caption:
      "A personalized dashboard that brings the Income Builders content experience together in one place.",
  },
  {
    src: "/images/projects/income-builders/start-here.webp",
    alt: "Income Builders Start Here page guiding users through the platform",
    caption:
      "A guided Start Here experience designed to help new users understand the platform and find the right place to begin.",
  },
  {
    src: "/images/projects/income-builders/blog.webp",
    alt: "Income Builders blog page displaying structured and readable content",
    caption:
      "A structured blog experience designed to make discovering and reading content simple and enjoyable.",
  } ],
  },

  {
    slug: "presh-dev-portfolio",
    title: "Presh Dev Portfolio",
    shortDescription:
      "A modern portfolio website designed to present professional web development capabilities and digital solutions.",
    description:
      "A responsive portfolio platform created to showcase web development work, technical capabilities, and digital solutions through a modern user experience.",
    category: "business-website",
    status: "completed",
    featured: true,
    heroShowcase: true,
    priority: 3,
    industry: "Professional Services",
    services: [
      "UI/UX Design",
      "Web Development",
      "Responsive Web Design",
    ],
    technologies: [
      "React",
      "Tailwind CSS",
      "Framer Motion",
    ],
    thumbnail: "/images/projects/preshdev-portfolio/thumbnail.webp",
    heroImage: "/images/projects/preshdev-portfolio/hero.webp",
    liveUrl: "https://precious-portfolio.vercel.app/",
    caseStudy: {
      challenge:
        "Create a professional online presence that clearly communicates web development capabilities and showcases completed projects.",
      solution:
        "Designed and developed a modern responsive portfolio experience with interactive sections and project showcases.",
      outcome:
        "A professional digital presence that demonstrates technical skills and provides a foundation for attracting new opportunities and clients.",
    },

       screenshots: [
  {
    src: "/images/projects/preshdev-portfolio/tech-stack.webp",
    alt: "Income Builders dashboard showing the platform's content experience",
    caption:
      "A personalized dashboard that brings the Income Builders content experience together in one place.",
  },
  {
    src: "/images/projects/preshdev-portfolio/contact.webp",
    alt: "Income Builders Start Here page guiding users through the platform",
    caption:
      "A guided Start Here experience designed to help new users understand the platform and find the right place to begin.",
  },
  {
    src: "/images/projects/preshdev-portfolio/thumbnail.webp",
    alt: "Income Builders blog page displaying structured and readable content",
    caption:
      "A structured blog experience designed to make discovering and reading content simple and enjoyable.",
  } ],
  },

  {
    slug: "real-estate-website",
    title: "Real Estate Website",
    shortDescription:
      "A professional real estate web experience designed to showcase properties and connect potential clients with available listings.",
    description:
      "A real estate website concept focused on presenting properties professionally and creating a digital experience that helps prospective buyers and renters discover available opportunities.",
    category: "real-estate",
    status: "completed",
    featured: true,
    heroShowcase: true,
    priority: 4,
    industry: "Real Estate",
    services: [
      "UI/UX Design",
      "Web Development",
      "Responsive Web Design",
    ],
    technologies: [
      "React",
      "Tailwind CSS",
    ],
    thumbnail: "/images/projects/real-estate/thumbnail.webp",
    heroImage: "/images/projects/real-estate/hero.webp",
    liveUrl: "YOUR_REAL_ESTATE_URL",
    caseStudy: {
      challenge:
        "Create a professional digital presence for a real estate business that makes property discovery simple and visually engaging.",
      solution:
        "Developed a responsive property-focused interface designed to present listings clearly and guide visitors toward taking action.",
      outcome:
        "A modern real estate experience that provides a strong foundation for property discovery and lead generation.",
    },
  },

  {
    slug: "e-commerce-food-app",
    title: "E-commerce Food Platform",
    shortDescription:
      "A reusable e-commerce foundation designed for food businesses and online retailers with customizable ordering and checkout experiences.",
    description:
      "A reusable e-commerce web application designed to demonstrate how Presh Dev can build customized online shopping and ordering experiences for businesses.",
    category: "e-commerce",
    status: "in-progress",
    featured: false,
    heroShowcase: false,
    priority: 1,
    industry: "Food & E-commerce",
    services: [
      "UI/UX Design",
      "E-commerce Development",
      "Shopping Cart",
      "Checkout",
      "Online Ordering",
    ],
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
    ],
    thumbnail: "/images/projects/e-commerce-food/thumbnail.webp",
    heroImage: "/images/projects/e-commerce-food/hero.webp",
    caseStudy: {
      challenge:
        "Create a reusable and customizable e-commerce foundation that can be adapted for different businesses that want to sell products or accept online orders.",
      solution:
        "Designed and developed a flexible e-commerce architecture with product browsing, cart functionality, and a foundation for multiple checkout and ordering methods.",
      outcome:
        "A reusable e-commerce foundation that can be customized and extended to meet the unique requirements of different businesses.",
    },


 
  },
];