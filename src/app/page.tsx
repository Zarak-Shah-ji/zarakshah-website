import Link from "next/link";
import { Divider } from "@/components/Divider";

export default function Home() {
  return (
    <div className="pb-12">
      <section className="prose">
        <div data-show="work">
          <p>
            Engineer &amp; entrepreneur. Currently working on schematic traces
            at HP and denied claims at Yeam.
          </p>
          <p>
            In past lives I&rsquo;ve done data science at BMW, co-founded
            OpenBio, and graduated valedictorian.
          </p>
        </div>

        <div data-show="life">
          <p>I tinker and I train.</p>
          <p>
            Over time I&rsquo;ve built cold-outreach pipelines, an agent that
            generates LinkedIn carousels, a bot I keep meaning to retire. Small
            tools for the parts of life I&rsquo;d rather not do myself.
          </p>
          <p>
            I train at the gym and sometimes film the journey to share on
            Instagram — progress, workouts, and behind-the-scenes.
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
