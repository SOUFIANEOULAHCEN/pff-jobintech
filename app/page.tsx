"use client";
import Header from "@/components/Soufiane/Header";
import HeroSection from "@/components/Soufiane/HeroSection";
import CategoryCards from "@/components/Soufiane/CategoryCards";
import TrendingSection from "@/components/Soufiane/TrendingSection";
import CreatorsSection from "@/components/Soufiane/CreatorsSection";
import NewsletterSection from "@/components/Soufiane/NewsletterSection";
import Footer from "@/components/Soufiane/Footer";

export default function Home() {
  return (
    <main className="w-full bg-gray-50">
      <Header />
      <HeroSection />
      <CategoryCards />
      <TrendingSection />
      <CreatorsSection />
      <NewsletterSection />
      <Footer />
    </main>
  );
}
