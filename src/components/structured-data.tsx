export function generatePersonSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Paul Okafor",
    url: "https://obinopaul.com",
    jobTitle: "Data Scientist & AI Engineer",
    description:
      "Data Scientist and AI Engineer specializing in GenAI and AI Agents, deep learning, MLOps, and AI research on healthcare. Doctorate student in Data Science and Analytics with expertise in AI engineering, and modern development practices.",
    sameAs: [
      "https://github.com/obinopaul",
      "https://linkedin.com/in/obinopaul",
      "https://orcid.org/0000-0002-6399-1601",
    ],
    knowsAbout: [
      "Deep Learning",
      "AI Agents",
      "Machine Learning Engineering",
      "MLOps",
      "Data Science",
      "Full Stack Development",
      "Python Development",
      "TensorFlow & PyTorch",
      "LangChain, LangGraph & Vector Databases",
      "CI/CD & Infrastructure as Code",
      "Kubernetes & Docker",
      "Next.js & React Development",
      "Node.js Development",
      "Statistical Modeling",
      "Clustering & Dimensionality Reduction",
      "Innovation & Cloud Computing",
    ],
  };
}

export function generateWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Paul Okafor - Portfolio",
    url: "https://obinopaul.com",
    description:
      "Personal portfolio of Paul Okafor, Data Scientist and AI Engineer specializing in GenAI and AI Agents, deep learning, MLOps, and AI research on healthcare.",
    author: {
      "@type": "Person",
      name: "Paul Okafor",
    },
  };
}

interface StructuredDataProps {
  type: "person" | "website" | "both";
}

export default function StructuredData({ type }: StructuredDataProps) {
  const schemas = [];

  if (type === "person" || type === "both") {
    schemas.push(generatePersonSchema());
  }

  if (type === "website" || type === "both") {
    schemas.push(generateWebsiteSchema());
  }

  return (
    <>
      {schemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}
