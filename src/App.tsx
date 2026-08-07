import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import FieldingRye from "./pages/templates/FieldingRye";
import NovaCloud from "./pages/templates/NovaCloud";
import BloomMarket from "./pages/templates/BloomMarket";
import ScrollToTop from "./components/ScrollToTop";
import Testimonials from "./pages/Testimonials";
import LiveChat from "./components/LiveChat";

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
        <Route path="/testimonials" element={<Testimonials />} />
      </Routes>
    </>
  );
}