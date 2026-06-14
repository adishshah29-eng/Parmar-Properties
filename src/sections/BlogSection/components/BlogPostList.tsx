import { BlogPostItem } from "./BlogPostItem";
import { ScrollReveal } from "@/components/ScrollReveal";

export const BlogPostList = () => {
  return (
    <div className="box-border caret-transparent gap-x-[60px] grid text-[10px] leading-[11.5px] outline-neutral-900 outline-[3px] gap-y-[60px] no-underline mt-10 border-b-black border-b-0 md:border-b-neutral-900/10 md:gap-x-0 md:text-[6.66667px] md:leading-[7.66667px] md:gap-y-0 md:mt-[66.6667px] md:border-b">
      <ScrollReveal delay={0}>
        <BlogPostItem
          href="/blog/Q1-2026-NYC-Market-Report"
          date="2026-04-13"
          title="Q1 2026 NYC Market Report"
          description="Q1 2026 saw strong rental demand, active sales, and shifting pricing across NYC. Here’s what it means heading into the spring market."
          imageSrc="https://c.animaapp.com/mq3zczchi8fb7N/assets/nyc_604e40fa02.png"
          imageAlt="Q1 2026 NYC Market Report"
          imageClassName="box-border caret-transparent text-[10px] h-full leading-[11.5px] min-h-[auto] min-w-[auto] object-cover outline-neutral-900 outline-[3px] no-underline w-full md:text-[6.66667px] md:leading-[7.66667px]"
          showImageOverlay="false"
        />
      </ScrollReveal>
      <ScrollReveal delay={100}>
        <BlogPostItem
          href="/blog/blog-post-1"
          date="2026-04-01"
          title="Philly Real Estate: A Winter Chill or a Spring Opportunity?"
          description="Record-low listings and steady price growth define a unique February for the Philadelphia Metro."
          imageSrc=""
          imageAlt="Philly Real Estate: A Winter Chill or a Spring Opportunity?"
          imageClassName="box-border caret-transparent text-[10px] h-full leading-[11.5px] min-h-[auto] min-w-[auto] object-cover aspect-[3/2] bg-neutral-100 outline-neutral-900 outline-[3px] no-underline w-full md:text-[6.66667px] md:leading-[7.66667px]"
          showImageOverlay="true"
        />
      </ScrollReveal>
      <ScrollReveal delay={200}>
        <BlogPostItem
        href="/blog/What-1M-Buys-in-Different-NYC-Neighborhoods"
        date="2026-03-09"
        title="What $1M Buys in Different NYC Neighborhoods"
        description="Curious what $1M can still buy in today’s NYC market? Explore a snapshot of available listings across Manhattan and discover the surprising range of options at this key price point."
        imageSrc=""
          imageAlt="What $1M Buys in Different NYC Neighborhoods"
          imageClassName="box-border caret-transparent text-[10px] h-full leading-[11.5px] min-h-[auto] min-w-[auto] object-cover aspect-[3/2] bg-neutral-100 outline-neutral-900 outline-[3px] no-underline w-full md:text-[6.66667px] md:leading-[7.66667px]"
          showImageOverlay="true"
        />
      </ScrollReveal>
    </div>
  );
};
