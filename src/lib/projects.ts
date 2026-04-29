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
    href: "https://yeamagentsystem.vercel.app/",
    mode: "work",
  },
  {
    name: "Cold_connect",
    blurb:
      "Lightweight Python outreach pipeline — scrapes contacts, composes personalized emails, and sequences follow-ups.",
    href: "https://github.com/Zarak-Shah-ji/Cold_connect",
    mode: "work",
  },
  {
    name: "Driver-Drowsiness-Detection",
    blurb:
      "Compares techniques for detecting driver fatigue via face and eye movement.",
    href: "https://github.com/Zarak-Shah-ji/Driver-Drowsiness-Detection",
    mode: "work",
  },
  {
    name: "DeathStar",
    blurb:
      "Microservices security project — CNN-based intrusion detection in C.",
    href: "https://github.com/Zarak-Shah-ji/DeathStar",
    mode: "work",
  },
  {
    name: "TYPE2HEART",
    blurb:
      "Notebooks exploring cardiovascular risk in patients with Type 2 diabetes.",
    href: "https://github.com/Zarak-Shah-ji/TYPE2HEART",
    mode: "work",
  },
  {
    name: "mcp_client",
    blurb:
      "Q&A agent that routes questions through MCP tools and AI-powered agents.",
    href: "https://huggingface.co/spaces/ZarakShah/mcp_client",
    mode: "work",
  },
  {
    name: "mcp_sentiment_analysis",
    blurb:
      "Web UI hooked into AI models via MCP for live sentiment scoring.",
    href: "https://huggingface.co/spaces/ZarakShah/mcp_sentiment_analysis",
    mode: "work",
  },
  {
    name: "mcp_tools",
    blurb:
      "Gradio MCP server exposing text-processing utilities as callable tools.",
    href: "https://huggingface.co/spaces/ZarakShah/mcp_tools",
    mode: "work",
  },
  {
    name: "First_agent_template",
    blurb:
      "Starter template for building smolagents — ships with a timezone lookup tool.",
    href: "https://huggingface.co/spaces/ZarakShah/First_agent_template",
    mode: "work",
  },
  {
    name: "Agents (collection)",
    blurb:
      "Curated HF collection on LLM agent research — executable code actions and beyond.",
    href: "https://huggingface.co/collections/ZarakShah/agents",
    mode: "work",
  },
  {
    name: "AlfredAgent",
    blurb:
      "Batman-themed AI agent for Gotham — built on smolagents with custom tools.",
    href: "https://huggingface.co/spaces/ZarakShah/AlfredAgent",
    mode: "life",
  },
  {
    name: "crazyCrypto",
    blurb:
      "Crypto news with charts and tables — built so the data reads at a glance.",
    href: "https://github.com/Zarak-Shah-ji/crazyCrypto",
    mode: "life",
  },
  {
    name: "yander-ecom",
    blurb: "An e-commerce front-end built for fun.",
    href: "https://github.com/Zarak-Shah-ji/yander-ecom",
    mode: "life",
  },
];
