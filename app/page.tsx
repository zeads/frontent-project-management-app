// import Navbar from "@/components/layout/Navbar";

import Faq from "@/components/layout/Faq";
import Features from "@/components/layout/Features";
import Footer from "@/components/layout/Footer";
import HomePage from "@/components/layout/HomePage";
import Howitworks from "@/components/layout/Howitworks";
import Pricing from "@/components/layout/Pricing";
import Testimonials from "@/components/layout/Testimonials";

export default function Home() {
  return (
    <div>
      <HomePage />
      <Features />
      <Howitworks />
      <Pricing />
      <Testimonials />
      <Faq />
    </div>
  );
}
