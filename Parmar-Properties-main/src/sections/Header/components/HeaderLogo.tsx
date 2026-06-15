import logo from "assets/Parmar logo without bg.png";

export const HeaderLogo = () => {
  return (
    <div className="items-center box-border caret-transparent flex outline-[3px] no-underline">
      <a
        href="/"
        className="box-border caret-transparent block outline-[3px] no-underline"
      >
        <img
          src={logo}
          alt="Parmar Properties Logo"
          className="box-border caret-transparent inline outline-[3px] no-underline h-[84px] md:h-[52px] w-auto object-contain object-left scale-[1.6] md:scale-[2.2] origin-left"
        />
      </a>
    </div>
  );
};
