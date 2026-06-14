import { Header } from "@/sections/Header/index";
import { Main } from "@/sections/Main/index";
import { Footer } from "@/sections/Footer/index";

export const App = () => {
  return (
    <div className="w-full flex flex-col text-black font-instrument_sans">
      <Header />
      <Main />
      <Footer />
    </div>
  );
};
