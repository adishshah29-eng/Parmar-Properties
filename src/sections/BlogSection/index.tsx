import { BlogHeader } from "@/sections/BlogSection/components/BlogHeader";
import { BlogPostList } from "@/sections/BlogSection/components/BlogPostList";

export const BlogSection = () => {
  return (
    <section className="bg-zinc-100 box-border caret-transparent text-[10px] leading-[11.5px] outline-neutral-900 outline-[3px] no-underline py-[60px] md:text-[6.66667px] md:leading-[7.66667px] md:py-[100px]">
      <div className="box-border caret-transparent text-[10px] leading-[11.5px] max-w-[1280px] outline-neutral-900 outline-[3px] no-underline mx-auto px-[25px] md:text-[6.66667px] md:leading-[7.66667px] md:px-[66.6667px]">
        <BlogHeader />
        <BlogPostList />
      </div>
    </section>
  );
};
