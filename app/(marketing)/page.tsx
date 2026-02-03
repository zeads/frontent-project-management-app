// import Navbar from "@/components/layout/Navbar";

import Faq from "@/components/layout/Faq";
import Features from "@/components/layout/Features";
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
      <Testimonials />
      <Pricing />
      <Faq />
    </div>
  );
}
