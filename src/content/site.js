import profilePhoto from "../assets/me.jpg";
import librabyte from "../assets/myProjects/librabyte.jpg";
import chef from "../assets/myProjects/Chef.jpeg";
import sportFacility from "../assets/myProjects/sportFacility.png";
import inventoryProject from "../assets/myProjects/inventory-management-sys-736fd.web.app.jpg";
import geniusBooks from "../assets/myProjects/genius-books-67423.web.app.jpg";
import brandShop from "../assets/myProjects/brand-shop-daf8a.web.app.jpg";
import gamingFuzz from "../assets/myProjects/gamingFuzz.jpg";

export const siteConfig = {
  displayName: "Salim",
  fullName: "Salim Reza Sumon",
  title: "Mobile App Developer",
  tagline: "I build performant, accessible mobile and web experiences.",
  email: "salimreza1025@gmail.com",
  phone: "+8801791015730",
  location: "Dhaka, Bangladesh",
  profilePhoto,
  resumeUrl: "/Salim-Reza-Sumon-Resume.pdf",
  siteUrl: "https://isalim079.github.io",
  social: {
    github: "https://github.com/isalim079",
    linkedin: "https://linkedin.com/in/isalim079",
  },
};

export const navLinks = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export const aboutContent = {
  paragraphs: [
    "Hi there! I'm Salim Reza Sumon, a Mobile App Developer specializing in React Native and Expo, with a strong foundation in full-stack web development. I focus on building performant, accessible, and thoughtfully engineered applications — from production-grade cross-platform mobile apps to scalable web platforms.",
    "Currently at Excel Technologies Ltd, I actively build and maintain production mobile applications using React Native, Expo, and TypeScript. My work powers enterprise apps published on Google Play, including ArcOne (an ERP solution featuring GPS-verified attendance, billing approval workflows, inventory stock checks, and sales dashboards) and ArcPOS (a point-of-sale system featuring thermal receipt printing, real-time transaction sync, and order management), as well as an in-testing Bus Transport Management system for transit operations.",
    "Before diving deep into mobile development, I spent a year as a Front-End Developer at BrandFly building responsive React applications from Figma designs and developing Node.js/MongoDB backends. Earlier, I completed a remote internship at Velocity Digital Inc (Canada), where I built 180+ modular web components and honed international team collaboration skills.",
    "I hold a BSc in Physics from National University and completed intensive software engineering training at Programming Hero. Combining deep expertise in React Native, Expo, and modern full-stack web technologies, I am passionate about clean architecture, snappy mobile performance, hardware integration (GPS, printing, notifications), and shipping software that makes a real impact.",
  ],
  languages: [
    { name: "English", level: "Comfortable" },
    { name: "Bangla", level: "Native" },
    { name: "Hindi", level: "Fluent" },
  ],
  skills: {
    Mobile: [
      "React Native",
      "Expo",
      "TypeScript",
      "JavaScript",
      "Kotlin",
      "Push Notifications",
      "GPS & Geolocation",
      "Real-time Sync",
      "Receipt / Thermal Printing",
    ],
    Frontend: [
      "React",
      "Next.js",
      "Tailwind CSS",
      "Redux Toolkit",
      "Material UI",
      "Framer Motion",
      "HTML5 / CSS3",
    ],
    Backend: [
      "Node.js",
      "Express",
      "MongoDB",
      "Firebase",
      "Mongoose",
      "REST APIs",
      "Stripe Payments",
    ],
  },
  education: [
    {
      degree: "BSc in Physics",
      school: "National University, Bangladesh",
      period: "2018 — 2024",
      note: "CGPA 2.86",
    },
    {
      degree: "Next Level Web Development",
      school: "Programming Hero",
      period: "",
    },
    {
      degree: "Complete Web Development Course",
      school: "Programming Hero",
      period: "",
    },
  ],
};

export const experience = [
  {
    id: 1,
    company: "Excel Technologies Ltd",
    role: "Mobile App Developer",
    period: "Sep 2025 — Present",
    description: [
      "Contribute to production mobile applications including ArcOne (ERP) and ArcPOS (Point of Sale) published on Google Play.",
      "Work with the team on billing, attendance tracking, inventory, sales dashboards, and real-time sync with backend systems.",
      "Contribute to an in-testing bus transport management system, focusing on reliable cross-platform delivery with React Native and TypeScript.",
    ],
    tech: ["React Native", "Expo", "TypeScript", "JavaScript"],
  },
  {
    id: 2,
    company: "BrandFly",
    role: "Front-End Developer · Remote",
    period: "Sep 2024 — Sep 2025",
    description: [
      "Built responsive websites with React and Tailwind CSS from Figma designs.",
      "Implemented UI logic, animations, and interactive fundamentals across client projects.",
      "Developed backends with Node.js, Express, MongoDB, and TypeScript where required.",
    ],
    tech: ["React", "Tailwind CSS", "Node.js", "MongoDB", "TypeScript"],
  },
  {
    id: 3,
    company: "Velocity Digital Inc",
    role: "Front-End Developer · Remote Internship",
    period: "Apr 2024 — Jul 2024",
    location: "British Columbia, Canada",
    description: [
      "Created 180+ responsive website components with HTML, CSS, and JavaScript.",
      "Modified website components and landing pages to match design specifications.",
      "Strengthened communication skills through remote team collaboration.",
    ],
    tech: ["HTML", "CSS", "JavaScript"],
  },
];

export const featuredProjects = [
  {
    id: "arcone",
    title: "ArcOne",
    subtitle: "Excel Technologies Ltd · ERP Mobile Solution",
    description:
      "Team-built ERP mobile app for Sales and HR at Excel Technologies. I contribute to features like billing & order management with approval workflows, GPS-verified attendance, inventory stock checks, customer visit scheduling, sales dashboards, and team notifications.",
    image: null,
    tech: ["React Native", "Expo", "TypeScript", "GPS", "Push Notifications"],
    liveUrl: null,
    playStoreUrl:
      "https://play.google.com/store/apps/details?id=com.arcone.arcone",
    githubUrl: null,
    featured: true,
  },
  {
    id: "arcpos",
    title: "ArcPOS",
    subtitle: "Excel Technologies Ltd · Point of Sale",
    description:
      "Team-built POS solution for restaurants, retail, and service businesses. I contribute to order handling, real-time transactions, receipt printing, menu & inventory management, staff attendance, and cloud-synced reporting across connected devices.",
    image: null,
    tech: ["React Native", "Expo", "TypeScript", "Real-time Sync", "Printing"],
    liveUrl: null,
    playStoreUrl:
      "https://play.google.com/store/apps/details?id=com.excel.arcpos",
    githubUrl: null,
    featured: true,
  },
  {
    id: "bus-transport",
    title: "Bus Transport Management",
    subtitle: "Excel Technologies Ltd · In Testing",
    description:
      "Cross-platform bus transport management system currently in testing. As part of the team, I contribute to routes, schedules, and operational workflows with a focus on reliability and real-time updates across the fleet management pipeline.",
    image: null,
    tech: ["React Native", "Expo", "TypeScript"],
    liveUrl: null,
    playStoreUrl: null,
    githubUrl: null,
    status: "In Testing",
    featured: true,
  },
  {
    id: "librabyte",
    title: "LibraByte",
    subtitle: "Team Project · Online Library Platform",
    description:
      "A full-featured online library management platform built as a team project. Includes user, admin, and author panels with PDF reading, wishlists, borrow requests, chatbot integration, and Stripe payments.",
    image: librabyte,
    tech: ["Next.js", "Tailwind CSS", "Mongoose", "Firebase", "Stripe"],
    liveUrl: "https://libra-byte.vercel.app",
    githubUrl: "https://github.com/isalim079/LibraByte",
    featured: true,
  },
];

export const otherProjects = [
  {
    title: "Chef",
    description:
      "Full-stack recipe sharing community with authentication, cooking tools, premium content, and Stripe payments.",
    tech: ["Next.js", "TypeScript", "MongoDB", "Stripe"],
    liveUrl: "https://chef-client-one.vercel.app",
    githubUrl: "https://github.com/isalim079/chef-client-l2-6",
    image: chef,
  },
  {
    title: "SFORCE",
    description:
      "Sports facility booking system with admin dashboard, Stripe payments, and Redux state management.",
    tech: ["React", "TypeScript", "Redux", "Stripe"],
    liveUrl: "https://sports-facility-client.vercel.app",
    githubUrl: "https://github.com/isalim079/L2-Assignment-5-sports-facility-client",
    image: sportFacility,
  },
  {
    title: "Inventory Management System",
    description: "Full-stack inventory tracking with admin panel and real-time updates.",
    tech: ["React", "Firebase", "Node.js"],
    liveUrl: "https://inventory-management-sys-736fd.web.app",
    githubUrl: "https://github.com/isalim079/Inventory-Management-System",
    image: inventoryProject,
  },
  {
    title: "Genius Books",
    description: "Online bookstore with user authentication and book management.",
    tech: ["React", "Firebase", "Node.js"],
    liveUrl: "https://genius-books-67423.web.app",
    githubUrl: "https://github.com/isalim079/Genius-Books-",
    image: geniusBooks,
  },
  {
    title: "Brand Shop",
    description: "E-commerce platform for tech products with cart and checkout.",
    tech: ["React", "MongoDB", "Express"],
    liveUrl: "https://brand-shop-daf8a.web.app",
    githubUrl: "https://github.com/isalim079/Brand-Shop-Project",
    image: brandShop,
  },
  {
    title: "Gaming Fuzz",
    description: "Gaming community platform with Google and GitHub authentication.",
    tech: ["React", "Firebase", "Tailwind CSS"],
    liveUrl: "https://gaming-fuzz.web.app",
    githubUrl: "https://github.com/isalim079/Gaming-Fuzz",
    image: gamingFuzz,
  },
];
