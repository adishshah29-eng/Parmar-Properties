import { NavigationItem } from "@/sections/Header/components/NavigationItem";

export const DesktopNavigation = () => {
  return (
    <nav className="box-border caret-transparent gap-x-[normal] hidden text-[10px] leading-[11.5px] min-h-0 min-w-0 outline-[3px] gap-y-[normal] no-underline m-auto md:gap-x-12 md:flex md:text-[6.66667px] md:leading-[7.66667px] md:min-h-[auto] md:min-w-[auto] md:gap-y-[26.6667px]">
      <NavigationItem
        label="About"
        href="/About"
        itemVariant="items-center box-border caret-transparent gap-x-2.5 flex text-lg font-medium leading-[22.5px] min-h-0 min-w-0 outline-[3px] gap-y-2.5 no-underline overflow-hidden md:gap-x-[6.66667px] md:text-[13.3333px] md:leading-[16.6667px] md:min-h-[auto] md:min-w-[auto] md:gap-y-[6.66667px]"
        isDropdown={false}
      />
      <NavigationItem
        label="Expertise"
        href="/Expertise"
        itemVariant="items-center gap-x-2.5 flex text-lg font-medium leading-[22.5px] gap-y-2.5 overflow-hidden md:gap-x-[6.66667px] md:text-[13.3333px] md:leading-[16.6667px] md:gap-y-[6.66667px]"
        isDropdown={false}
      />
      <NavigationItem
        label="Opportunities"
        href="#"
        itemVariant="text-[10px] leading-[11.5px] md:text-[6.66667px] md:leading-[7.66667px]"
        isDropdown={true}
      />
      <NavigationItem
        label="Contact"
        href="#"
        itemVariant="text-[10px] leading-[11.5px] md:text-[6.66667px] md:leading-[7.66667px]"
        isDropdown={true}
      />
    </nav>
  );
};
