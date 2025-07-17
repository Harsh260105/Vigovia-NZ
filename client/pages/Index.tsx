import React from "react";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import HeroSection from "../components/sections/HeroSection";
import AboutSection from "../components/sections/AboutSection";
import ToursSection from "../components/sections/ToursSection";
import InformationSection from "../components/sections/InformationSection";
import ActivitiesSection from "../components/sections/ActivitiesSection";
import SeasonsSection from "../components/sections/SeasonsSection";
import BlogSection from "../components/sections/BlogSection";
import FaqSection from "../components/sections/FaqSection";
import ExploreMore from "../components/sections/ExploreMore";

import {
  visaOptions,
  featureCards,
  tours,
  activities,
  seasons,
  faqs,
  blogPosts,
  exploreDestinations
} from "../components/data/newZealandData.tsx";

export default function Index() {
  return (
    <div className="min-h-screen bg-violet-50/50">
      {/* Header */}
      <Header/>

      {/* Hero Section */}
      <HeroSection />

      {/* About New Zealand Section */}
      <AboutSection featureCards={featureCards} />

      {/* All Tours Section */}
      <ToursSection tours={tours} />

      {/* Must-Know Information Section */}
      <InformationSection />

      {/* Top Activities and Attractions */}
      <ActivitiesSection activities={activities} />

      {/* Special Seasonal Info */}
      <SeasonsSection seasons={seasons} />

      {/* Blog Section */}
      <BlogSection posts={blogPosts} />

      {/* FAQ Section */}
      <FaqSection faqs={faqs} />

      {/* Explore More Section */}
      <ExploreMore destinations={exploreDestinations} />

      {/* Footer */}
      <Footer />
    </div>
  );
}