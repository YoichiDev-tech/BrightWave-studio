import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import FieldingRye from "./pages/templates/FieldingRye";
import NovaCloud from "./pages/templates/NovaCloud";
import BloomMarket from "./pages/templates/BloomMarket";
import ScrollToTop from "./components/ScrollToTop";
// import Testimonials from "./pages/Testimonials";
import LiveChat from "./components/LiveChat";

import BloomMarketCaseStudy from "./pages/case-studies/BloomMarketCaseStudy";
import PalettePreview from "./pages/palette-preview";

export default function App() {
  return (
    <>
      <ScrollToTop />
      <LiveChat />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work/fielding-and-rye" element={<FieldingRye />} />
        <Route path="/work/nova-cloud" element={<NovaCloud />} />
        <Route path="/work/bloom-market" element={<BloomMarket />} />

        <Route path="/work/bloom-market/case-study" element={<BloomMarketCaseStudy />} />
        <Route path="/palette-preview" element={<PalettePreview />} />
      </Routes>
    </>
  );
}