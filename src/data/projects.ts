import { Project } from "@/types/project";

export const projectsData: Project[] = [

  // SportSphere AI Agent
  {
    id: "1", // Unique ID
    title: "SportSphere AI Agent",
    description:
      "A conversational AI agent/assistant for sports enthusiasts, providing real-time information on MLB, NBA and Global Soccer.  Interact via voice or text to get live scores, team rosters, player statistics, and league standings.",
    image: "/projects/sportsphere.png",  //  provide your own image path
    technologies: [
      "Python",
      "React.js",
      "AI",
      "AI Agent",
      "LangChain",
      "LangGraph",
      "OpenAI",
      "FastAPI",
      "Stats API", // Add specific API if known
      "NBA API",   // Assuming NBA API is used
      "API Football", // Assuming API Football is used
      "Speech Recognition",
      "Text-to-Speech (TTS)",
      "Real-Time Data",
      "MLB API", // Add specific API if known
      "OpenAI API", // Assuming OpenAI is used
      "FastAPI",   // Assuming FastAPI is used
      "Multimodal AI",
    ],
    category: "AI & Machine Learning",
    links: {
      github: "https://github.com/obinopaul/sportsphere-ai",
      // live: "URL_TO_LIVE_DEMO", // Add a live demo URL if/when available
    },
    featured: true, //  set to true if you want it featured
  },

  {
    id: "2", // New ID for Pocket Traveler
    title: "Pocket Traveler",
    description:
      "Pocket Traveler is an AI-powered personal travel assistant that creates fully customized itineraries based on your preferences.  Input your travel details (origin, destination, dates, and more) via text or voice, and Pocket Traveler handles the rest, generating personalized flight options, accommodation suggestions, activities, dining recommendations, local insights, and even safety tips.  The complete itinerary is delivered directly to your inbox.",
    image: "/projects/pocket_traveller.png", //  your image path
    technologies: [
      "AI",
      "LLM",
      "AI Agents",
      "LangChain",
      "OpenAI",
      "LangGraph",
      "Elevenlabs API", // Add specific API if known
      "FastAPI", // Confirmed from your GitHub
      "Python",
      "HTML",       // From your GitHub
      "CSS",        // From your GitHub
      "JavaScript", // From your GitHub
      "Speech Recognition API", // From your description
      "Google Maps API",      // From your description
      "Flatpickr",      // From your description
    ],
    category: "AI & Machine Learning", // Appropriate category
    links: {
      github: "https://github.com/obinopaul/pocket",
      live: "https://pocket-1.onrender.com/", //  live demo link!
    },
    featured: true, // Set as you prefer
  },
  {
    id: "3", // New ID
    title: "CustomGPT",
    description:
      "CustomGPT is a versatile LLM chatbot built with Streamlit that integrates multiple language models (OpenAI, DeepSeek, HuggingFace, and Ollama) and implements Retrieval-Augmented Generation (RAG) techniques (both Simple RAG and LightRAG).  It supports various RAG operations, including document uploads, web link analysis, GitHub repository context, and research paper integration.  It utilizes Pinecone and Chroma for vector databases and stores chat history in MongoDB.",
    image: "/projects/custom_gpt.png", // Replace with your image path
    technologies: [
      "Streamlit",
      "Python",
      "AI",
      "LLM",
      "RAG",
      "OpenAI API",
      "DeepSeek",
      "HuggingFace",
      "Ollama",
      "LangChain", //  add LangChain
      "LightRAG",  //  add LightRAG
      "Pinecone",   //  add Pinecone
      "ChromaDB",   //  add ChromaDB
      "MongoDB",     //  add MongoDB
      "Jupyter Notebook", // From GitHub
    ],
    category: "AI & Machine Learning",
    links: {
      github: "https://github.com/obinopaul/CustomGPT",
      live: "https://custom-gpt-azcw.onrender.com/", // Add a live demo link if you have one!
    },
    featured: true, // Set as you prefer
  },
  {
    id: "4", // New ID
    title: "Ovarian Cancer ML Classification",
    description:
      "This project applies machine learning techniques to classify ovarian cancer stages, aiming to aid in early detection and personalized treatment strategies.  Predictive models are trained using patient data and biomarkers to accurately identify cancer subtypes.",
    image: "/projects/ovarian.jpg", //  your image path
    technologies: [
      "Python",
      "Machine Learning",
      "Classification",
      "Predictive Modeling",
      "Streamlit", //  added Streamlit
      "scikit-learn", //  add scikit-learn if used
      "Jupyter Notebook", // From the GitHub languages
      "Data Preprocessing", //  best practices
    ],
    category: "AI & Machine Learning", //  category
    links: {
      github: "https://github.com/obinopaul/Ovarian-Cancer-ML-Classification",
      // live: "URL_TO_LIVE_APP", // If you deploy the Streamlit app, add the URL here
    },
    featured: false, // Set as you prefer
  },
  {
    id: "5", // New ID
    title: "License Plate Detection",
    description:
      "A Streamlit-powered application for license plate detection using YOLOv8.  The app allows users to upload images or videos, and it detects and highlights license plates within the provided media. The training data was sourced from Roboflow.",
    image: "/projects/plate.jpg", //  your image path
    technologies: [
      "Python",
      "YOLOv8",
      "Object Detection",
      "Streamlit",
      "Computer Vision",
      "Image Processing",
      "Video Processing",
      "Roboflow", // Mention Roboflow
      "Jupyter Notebook",
    ],
    category: "AI & Machine Learning", // Or "Computer Vision"
    links: {
      github: "https://github.com/obinopaul/licence-plate-detection",
      // live: "URL_TO_LIVE_APP", // Add if you deploy it
    },
    featured: true, // Set as you prefer
  },

  {
    id: "6",
    title: "Portfolio Website",
    description:
      "A modern portfolio website built with Next.js and AWS services.",
    image: "/projects/portfolio.png",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "AWS"],
    category: "Web Development",
    links: {
      github: "https://github.com/obinopaul/portfolio-website.git",
      live: "https://obinopaul.com",
    },
    featured: false,
  },
  {
    id: "7", // New ID
    title: "Unravelling the Challenges of Unemployment in Africa",
    description:
      "A data-driven analysis of unemployment in Africa, exploring regional disparities, gender differences, and the impact of factors like education funding, private sector growth, and infrastructure development.  This project was an entry for the 10Alytics Hackathon 2023.",
    image: "/projects/10analytics.png", //  your image path
    technologies: [
      "Python",
      "Data Analysis",
      "Data Visualization",
      "Jupyter Notebook",
      "Statistical Analysis",
      "Pandas",          // Likely used
      "Matplotlib",     // Likely used
      "Seaborn",        // Likely used
    ],
    category: "Data Analysis", //  appropriate category
    links: {
      github: "https://github.com/obinopaul/Unravelling-the-challenges-of-Unemployment-in-Africa-10Alytics-Hackathon-2023",
      // live: "NBVIEWER_LINK", // If you have an nbviewer link, add it here
    },
    featured: false, // Set as you prefer
  },
  {
    id: "8",
    title: "Sentiment Analysis of Digital Lending Platforms in Nigeria",
    description:
      "This project performs sentiment analysis on customer reviews of six digital lending platforms in Nigeria (Quickcredit, Carbon, Newcredit, Fairmoney, Branch, and Palmcredit) collected from the Apple App Store and Google Play Store. Inspired by a Premium Times article on data privacy breaches, the project uses machine learning and natural language processing (NLP) to gauge customer sentiment towards these services.",
    image: "/projects/sentiment_analysis.png", //  your image
    technologies: [
      "Python",
      "Machine Learning",
      "Sentiment Analysis",
      "Natural Language Processing (NLP)",
      "NLTK",        // From your README
      "scikit-learn", // From your README
      "pandas",      // Likely used
      "numpy",       // Likely used
      "matplotlib",  // Likely used
      "seaborn",     // Likely used
      "Jupyter Notebook",
    ],
    category: "AI & Machine Learning", //  appropriate category
    links: {
      github: "https://github.com/obinopaul/Sentiment-Analysis-Loan-App",
      // live: "URL_TO_NOTEBOOK", //  add an nbviewer link if you have one!
    },
    featured: false, // Set as you prefer
  },
  {
    id: "9",
    title: "Tackling the Health Crisis in Africa",
    description:
      "A data analysis project focused on improving health outcomes in Africa.  The project explores data related to major causes of death, including cardiovascular diseases, HIV/AIDS, and malaria, to identify trends and provide insights for addressing these health challenges. This project was created for the 10Alytics Hackathon in 2023.",
    image: "/projects/tackling.png", //  your image path!
    technologies: [
      "Python",
      "Data Analysis",
      "Data Visualization",
      "Jupyter Notebook",
      "pandas",
      "plotly", // From your README
      "matplotlib",
      "seaborn", // Likely used
    ],
    category: "Data Analysis",
    links: {
      github:
        "https://github.com/obinopaul/Tackling-the-Health-Crises-in-Africa",
      // live: "NBVIEWER_LINK", // Add if available
    },
    featured: false, // Set as you prefer
  },
];
