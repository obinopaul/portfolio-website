import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import StructuredData from "@/components/structured-data";

const inter = Inter({ subsets: ["latin"] });

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export const metadata: Metadata = {
  title: {
    template: "%s | Paul Okafor",
    default: 'Paul Okafor - Data Scientist & AI Engineer',
  },
  description:
    'Data Scientist and AI Engineer specializing in AI/ML solutions, GenAI innovations and modern development.',
  icons: {
    icon: '/headshot/headshot-2024.jpg',
    apple: '/headshot/headshot-2024.jpg',
  },
  openGraph: {
    type: 'website',
    title: 'Paul Okafor - Data Scientist & AI Engineer',
    description: 'Data Scientist and AI Engineer specializing in AI/ML solutions, GenAI innovations and modern development.',
    images: [{
      url: '/screenshots/hero-preview.jpg',
      width: 1200,
      height: 630,
      alt: 'Bjorn Melin - Portfolio Hero Section'
    }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Paul Okafor - Data Scientist & AI Engineer',
    description: 'Data Scientist and AI Engineer specializing in AI/ML solutions, GenAI innovations and modern development.',
    images: ['/screenshots/hero-preview.jpg']
  },
  keywords: [
    "Deep Learning",
    "AI Agents",
    "Machine Learning",
    "AWS Machine Learning Engineer",
    "MLOps",
    "Data Science",
    "Python",
    "TypeScript",
    "FastAPI",
    "Flask",
    "Streamlit",
    "React.js",
    "Next.js",
    "React",
    "Neural Networks",
    "TensorFlow",
    "PyTorch",
    "LangChain",
    "LangGraph",
    "CloudFormation",
    "Kubernetes",
    "Docker",
    "CI/CD",
    "GitHub Actions",
    "Vector Databases",
    "Statistical Modeling",
    "Clustering Algorithms",
    "PCA",
    "Feature Engineering",
    "Databricks",
    "AWS SageMaker",
    "Generative AI",
    "Large Language Models",
    "Serverless",
    "Innovation",
    "Node.js",
    "Full-Stack Development",
  ],
  authors: [{ name: "Paul Okafor" }],
  creator: "Paul Okafor",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>
          <div className="relative min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow container mx-auto px-4 pt-16 pb-8">
              {children}
            </main>
            <Footer />
          </div>
        </Providers>
        <StructuredData type="both" />
      </body>
    </html>
  );
}
