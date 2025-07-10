import React from "react";
import HeroSection from "./HeroSection/HeroSection";
import StatsSection from "./StatsSection/StatsSection";
import FeaturedProducts from "./FeaturedProducts/FeaturedProducts";
import ProductCategories from "./ProductCategories/ProductCategories";
import AboutSection from "./AboutSection/AboutSection";
import ResearchSection from "./ResearchSection/ResearchSection";
import ProductShowcase from "../Products/ProductShowcase";

function Home() {
  return (
    <div>
      <HeroSection />
      <ProductShowcase />
      <ProductCategories />
      <StatsSection />
      <FeaturedProducts />
      <AboutSection />
      <ResearchSection />
    </div>
  );
}

export default Home;
