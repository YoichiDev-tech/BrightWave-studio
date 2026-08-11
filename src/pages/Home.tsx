import { useState, useEffect } from "react";
import Nav from "../components/Nav";
import Hero from "../components/Hero";
import SignsOutdated from "../components/SignsOutdated";
import Services from "../components/Services";
import BuildYourIdea from "../components/BuildYourIdea";
import Portfolio from "../components/Portfolio";
import WhyChooseUs from "../components/WhyChooseUs";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
// import TestimonialsPreview from "../components/TestimonialsPreview";
// import ReviewPopup from "../components/ReviewPopup";
import Pricing from "../components/Pricing";
import FAQ from "../components/FAQ";
import About from "../components/About";
import Calendly from "../components/Calendly";
import Process from "../components/Process";

export type Intent = "audit" | "build";

export default function Home() {
  // Shared across the whole page: whichever CTA the visitor clicks first
  // (audit vs. build) pre-selects the matching path in the contact form
  const [intent, setIntent] = useState<Intent | null>(null);
  const [showReviewPopup, setShowReviewPopup] = useState(false);

  // Trigger timer to show the review popup after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowReviewPopup(true);
    }, 30000); // Show the review popup after 30 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Nav onSelectIntent={setIntent} />
      <main>
        <Hero onSelectIntent={setIntent} />
        <SignsOutdated onSelectIntent={setIntent} />
        <Services />
        <Process />
        <Pricing />
        <BuildYourIdea onSelectIntent={setIntent} />
        <Portfolio />
        <WhyChooseUs />
        <FAQ />
        <About />
        <Calendly />
        <Contact intent={intent} onIntentChange={setIntent} />
      </main>
      <Footer />
    </>
  );
}