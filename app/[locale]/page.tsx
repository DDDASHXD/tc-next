import React from "react";
import Hero from "@/components/landing/hero";
import About from "@/components/landing/about";
import Footer from "@/components/ui/footer";

const page = async () => {
  return (
    <div className="flex flex-col w-full items-start gap-40">
      <Hero />
      <About />
      <Footer />
    </div>
  );
};

export default page;
