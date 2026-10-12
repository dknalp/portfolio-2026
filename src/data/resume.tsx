import React from "react";
import { HomeIcon, NotebookIcon } from "lucide-react";
import { FaEnvelope, FaGithub, FaInstagram } from "react-icons/fa6";
import { ReactLight } from "@/components/ui/svgs/reactLight";

export const DATA = {
  name: "Dogukan",
  initials: "G",
  url: "https://gabriel.design",
  location: "Remote",
  locationLink: "https://www.google.com/maps/search/remote",
  description:
    "Full stack software engineer. I build web apps, desktop apps, API services, automations and AI systems. Started out in web design so I care about how things look too.",
  summary:
    "I build things for the web. Background in design, so I care about how it looks too.",
  avatarUrl: "/avatar.jpg",
  skills: [
    { name: "Figma", icon: null as any },
    { name: "Framer", icon: null as any },
    { name: "Adobe XD", icon: null as any },
    { name: "Webflow", icon: null as any },
    { name: "Tailwind CSS", icon: null as any },
    { name: "HTML/CSS", icon: null as any },
    { name: "React", icon: ReactLight },
    { name: "Spline", icon: null as any },
    { name: "After Effects", icon: null as any },
    { name: "Lottie", icon: null as any },
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "dogukanalpt@gmail.com",
    tel: "",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/dknalp",
        icon: FaGithub,
        navbar: true,
      },
      Instagram: {
        name: "Instagram",
        url: "https://www.instagram.com/dknalp/",
        icon: FaInstagram,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:dogukanalpt@gmail.com",
        icon: FaEnvelope,
        navbar: false,
      },
    },
  },
  work: [
    {
      company: "Pixel Studio",
      href: "#",
      badges: [],
      location: "Remote",
      title: "Senior Software Engineer",
      logoUrl: "",
      start: "2023",
      end: "Present",
      description:
        "Worked on UI/UX design for client projects — design systems, motion, and responsive interfaces.",
    },
    {
      company: "Bloom Agency",
      href: "#",
      badges: [],
      location: "Remote",
      title: "UI Designer",
      logoUrl: "",
      start: "2020",
      end: "2023",
      description:
        "Designed marketing websites and product dashboards for SaaS startups.",
    },
  ],
  education: [
    {
      school: "Design & Technology Institute",
      href: "#",
      degree: "B.A. Visual Communication Design",
      logoUrl: "",
      start: "2016",
      end: "2020",
    },
  ],
  projects: [
    {
      title: "Kiwimi Studios",
      href: "https://kiwimi.co/",
      dates: "",
      active: true,
      description: "A design studio I've been contributing to.",
      technologies: [],
      links: [],
      image: "/kiwimi.png",
      video: "",
    },
    {
      title: "Esaytech",
      href: "https://esaytech.com.tr",
      dates: "",
      active: true,
      description: "Esaytech is a healthcare and consultancy company that needed a complete digital overhaul.",
      technologies: [],
      links: [],
      image: "/esaytech.webp",
      video: "",
    },
  ],
  hackathons: [] as { title: string; dates: string; location: string; description: string; image?: string; mlh?: string; links: { title: string; href: string; icon: React.ReactNode }[] }[],
} as const;
