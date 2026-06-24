import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "@/sections/Header/index";
import { Main } from "@/sections/Main/index";
import { Footer } from "@/sections/Footer/index";
import { BlogPage } from "@/pages/BlogPage";
import { Agentation } from "agentation";

const HomePage = () => (
  <div className="w-full flex flex-col text-black font-instrument_sans">
    <Header />
    <Main />
    <Footer />
    {import.meta.env.DEV && <Agentation />}
  </div>
);

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/*" element={<BlogPage />} />
      </Routes>
    </BrowserRouter>
  );
};
