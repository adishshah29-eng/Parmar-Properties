export type NavigationItemProps = {
  label: string;
  href: string;
  itemVariant: string;
  isDropdown: boolean;
  dropdownItems?: { label: string; href: string }[];
};

export const NavigationItem = ({ label, href, itemVariant, isDropdown, dropdownItems }: NavigationItemProps) => {
  const customStyle = {
    fontFamily: '"Instrument Sans", "Instrument Sans", sans-serif',
  };

  return (
    <div className={`group relative py-2 ${itemVariant}`}>
      {isDropdown ? (
        <>
          <button
            type="button"
            className="flex items-center gap-1.5 text-base font-semibold text-neutral-900 transition-colors duration-200"
            style={customStyle}
          >
            <span className="relative">
              {label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-neutral-900 transition-all duration-300 group-hover:w-full"></span>
            </span>
            <svg 
              className="w-3.5 h-3.5 transition-transform duration-300 group-hover:rotate-180" 
              viewBox="0 0 24 24" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg" 
              aria-hidden="true"
            >
              <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          
          {/* Dropdown Menu */}
          {dropdownItems && dropdownItems.length > 0 && (
            <div className="absolute top-full left-0 mt-2 bg-white border border-neutral-100/80 shadow-[0_10px_30px_rgba(0,0,0,0.08)] rounded-2xl py-4 min-w-[240px] opacity-0 -translate-y-2 pointer-events-none transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto z-50 flex flex-col gap-1.5 px-2 before:content-[''] before:absolute before:top-[-12px] before:left-0 before:right-0 before:h-[12px]">
              {dropdownItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="block px-4 py-2.5 text-[15px] font-medium text-neutral-900 hover:text-neutral-500 hover:bg-neutral-50/50 rounded-xl transition-all duration-200 text-left"
                  style={customStyle}
                >
                  {item.label}
                </a>
              ))}
            </div>
          )}
        </>
      ) : (
        <a
          href={href}
          className="block text-base font-semibold text-neutral-900 transition-colors duration-200"
          style={customStyle}
        >
          <span className="relative">
            {label}
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-neutral-900 transition-all duration-300 group-hover:w-full"></span>
          </span>
        </a>
      )}
    </div>
  );
};
  