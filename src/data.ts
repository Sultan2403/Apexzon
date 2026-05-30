import type { IconType } from "react-icons";
import {
  FaChartLine,
  FaEnvelope,
  FaFacebookF,
  FaGoogle,
  FaHandshake,
  FaInstagram,
  FaLinkedinIn,
  FaMagnifyingGlassChart,
  FaRocket,
  FaScrewdriverWrench,
  FaWandMagicSparkles,
} from "react-icons/fa6";

export const navItems = ["Home", "About", "Services", "Contact"] as const;

export type IconContent = {
  icon: IconType;
  label: string;
};

export type ProcessStep = {
  number: string;
  icon: IconType;
  title: string;
  text: string;
  featured: boolean;
};

export const services = [
  { icon: FaGoogle, label: "Google Ads" },
  { icon: FaFacebookF, label: "Facebook Ads" },
  { icon: FaInstagram, label: "Instagram Ads" },
  { icon: FaLinkedinIn, label: "LinkedIn Ads" },
  { icon: FaMagnifyingGlassChart, label: "SEO Mastery" },
  { icon: FaWandMagicSparkles, label: "Content Strategy" },
  { icon: FaEnvelope, label: "Email Marketing" },
  { icon: FaChartLine, label: "Market Analysis" },
] satisfies IconContent[];

export const processSteps = [
  {
    number: "01",
    icon: FaHandshake,
    title: "Contact",
    text: "We begin with a high-level consultation to audit your current market position and identify untapped leverage points.",
    featured: false,
  },
  {
    number: "02",
    icon: FaScrewdriverWrench,
    title: "Strategy",
    text: "A bespoke tactical blueprint is engineered, focusing on aggressive scalability and sustainable brand authority.",
    featured: true,
  },
  {
    number: "03",
    icon: FaRocket,
    title: "Launch",
    text: "Rapid deployment of multi-channel campaigns monitored in real-time for continuous precision optimization.",
    featured: false,
  },
] satisfies ProcessStep[];

export const footerLinks = {
  Agency: ["Home", "About", "Services", "Contact"],
  Legal: ["Privacy Policy", "Terms of Service", "Cookie Policy"],
} as const;

export type FooterLink = (typeof footerLinks)[keyof typeof footerLinks][number];
