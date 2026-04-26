import type { Mode } from "./mode";

export type Project = {
  name: string;
  blurb: string;
  href: string;
  mode: Mode | "both";
};

export const projects: Project[] = [
  {
    name: "yeam-agent-system",
    blurb:
      "Five-agent EHR system. SOAP note drafting, claim scrubbing, billing appeals, NL analytics.",
    href: "https://github.com/Zarak-Shah-ji/yeam-agent-system",
    mode: "professional",
  },
  {
    name: "Driver-Drowsiness-Detection",
    blurb:
      "Compares techniques for detecting driver fatigue via face and eye movement.",
    href: "https://github.com/Zarak-Shah-ji/Driver-Drowsiness-Detection",
    mode: "professional",
  },
  {
    name: "DeathStar",
    blurb:
      "Microservices security project — CNN-based intrusion detection in C.",
    href: "https://github.com/Zarak-Shah-ji/DeathStar",
    mode: "professional",
  },
  {
    name: "TYPE2HEART",
    blurb:
      "Notebooks exploring cardiovascular risk in patients with Type 2 diabetes.",
    href: "https://github.com/Zarak-Shah-ji/TYPE2HEART",
    mode: "professional",
  },
  {
    name: "crazyCrypto",
    blurb:
      "Crypto news with charts and tables — built so the data reads at a glance.",
    href: "https://github.com/Zarak-Shah-ji/crazyCrypto",
    mode: "personal",
  },
  {
    name: "yander-ecom",
    blurb: "An e-commerce front-end built for fun.",
    href: "https://github.com/Zarak-Shah-ji/yander-ecom",
    mode: "personal",
  },
];
