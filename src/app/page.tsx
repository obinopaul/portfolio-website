import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { FeaturedProjects } from "@/components/sections/featured-projects";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Paul Okafor - Data Scientist & Machine Learning Engineer",
  description:
    "Portfolio of Paul Okafor, a Data Scientist and AI Engineer specializing in AI/ML solutions, GenAI innovation, with expertise in machine learning, LLM/GenAI, .",
  openGraph: {
    type: 'website',
    title: 'Paul Okafor - Data Scientist & AI Engineer',
    description: 'Portfolio of Paul Okafor, a Data Scientist and AI Engineer specializing in AI/ML solutions, and GenAI innovations',
    images: [{
      url: '/screenshots/hero-preview.jpg',
      width: 1200,
      height: 630,
      alt: 'Paul Okafor - Portfolio Hero Section'
    }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Paul Okafor - Data Scientist & AI Engineer',
    description: 'Portfolio of Paul Okafor, a Data Scientist and AI Engineer specializing in AI/ML solutions, and GenAI innovation',
    images: ['/screenshots/hero-preview.jpg']
  }
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Hero />
      <About />
      <FeaturedProjects />
    </main>
  );
}
