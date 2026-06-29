import { footer, brand } from "@/content/content";

export const FooterLegal = () => {
  return (
      <div className="col-span-full flex flex-col md:flex-row justify-between items-start md:items-center text-white/40 text-sm md:text-xs font-medium mt-8 md:mt-5 gap-6 md:gap-5">
        <div className="flex flex-col md:flex-row gap-6 md:gap-5">
          {footer.legalLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
          {footer.legalNotices.map((notice) => (
            <span key={notice}>{notice}</span>
          ))}
        </div>
        <div className="flex flex-col md:flex-row gap-2 md:gap-6 mt-4 md:mt-0">
          <div>{brand.name}</div>
          <div>Copyright © {brand.copyrightYear}</div>
        </div>
      </div>
  );
};
  