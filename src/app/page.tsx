import Link from "next/link";
import { Divider } from "@/components/Divider";

export default function Home() {
  return (
    <div className="pb-12">
      <section className="prose">
        <div data-show="work">
          <p>
            Advanced AI Scientist at HP. The work I care about most is what
            I&rsquo;m building as co-founder of Yeam.ai and OpenBio.
          </p>
          <p>
            I come from a hard software engineering and AI background, and I
            build ML systems and agents for things that have to actually work,
            the unglamorous infrastructure most products quietly run on.
          </p>
          <p style={{ color: "var(--muted)" }}>
            Most of what I make ends up in production. I like finding a better
            way to solve a problem, then making sure it holds up once it&rsquo;s
            real.
          </p>
        </div>

        <div data-show="life">
          <p>Outside of the day job I tinker.</p>
          <p>
            Over time I&rsquo;ve built cold-outreach pipelines, an agent that
            generates LinkedIn carousels, an Instagram bot I keep meaning to
            retire. Small tools for the parts of life I&rsquo;d rather not do
            myself.
          </p>
          <p style={{ color: "var(--muted)" }}>
            I write occasionally about what I&rsquo;ve learned, usually
            after I&rsquo;ve broken something twice.
          </p>
        </div>
      </section>

      <section className="mt-16 text-xl">
        <Divider />
        <Link
          href="/writing"
          className="flex items-baseline justify-between py-3"
        >
          <span>Writing</span>
          <span style={{ color: "var(--muted)" }}>notes &amp; posts</span>
        </Link>
        <Divider />
        <Link
          href="/projects"
          className="flex items-baseline justify-between py-3"
        >
          <span>Projects</span>
          <span style={{ color: "var(--muted)" }}>things I&rsquo;ve shipped</span>
        </Link>
      </section>
    </div>
  );
}
