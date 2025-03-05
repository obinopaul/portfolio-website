export interface Achievement {
  text: string;
}

export interface Skill {
  name: string;
}

export interface Experience {
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  isRemote?: boolean;
  achievements: Achievement[];
  skills: Skill[];
}

export const experiences: Experience[] = [
  {
    title: "Graduate Research Assistant",
    company: "University of Oklahoma",
    location: "Norman, OK, USA",  // More specific location
    startDate: "August 2023",
    endDate: "Present",
    achievements: [
      {
        text:
          "Developed cost-sensitive online learning models for control chart pattern recognition, improving real-time monitoring and anomaly detection in manufacturing processes, and significantly reducing misclassification costs.", // Keep concise
      },
      {
        text:
          "Applied interpretable machine learning (IML) techniques, including SHAP (SHapley Additive exPlanations) and LIME (Local Interpretable Model-agnostic Explanations), to optimize recombinant protein titer production in *E. coli* fermentations, contributing to advancements in biomanufacturing.", // Added IML specifics
      },
      {
        text: "Co-authored and presented research on advanced filtering techniques (Kalman Filter, Particle Filter) for titer estimation at the 2024 IEEE Big Data Conference, demonstrating improved accuracy in recombinant protein production using fermentation data.",
      }

    ],
    skills: [
      { name: "Python" },
      { name: "PyTorch" },
      { name: "TensorFlow" }, // Added TensorFlow
      { name: "Machine Learning" },
      { name: "Deep Learning" },
      { name: "Cost-Sensitive Learning" },
      { name: "Online Learning" },
      { name: "Control Chart Pattern Recognition" },
      { name: "Anomaly Detection" },
      { name: "Interpretable Machine Learning (IML)" }, // More specific
      { name: "SHAP" },  // Added SHAP
      { name: "LIME" },   // Added LIME
      { name: "Time Series Analysis" },
      { name: "Data Analysis" },
      { name: "Filtering Techniques" },
      { name: "Kalman Filter" },
      { name: "Particle Filter" },
      { name: "Biomanufacturing" },
      { name: "Statistical Modeling"}, //added statistical modeling
      { name: "R"} // added R
    ],
  },
  {
    title: "Data Scientist",
    company: "Backyard Innovations Limited",
    location: "Nigeria",
    startDate: "September 2020",
    endDate: "July 2023",
    achievements: [
      {
        text:
          "Led the development and deployment of predictive analytics models for smart home energy systems, using advanced machine learning techniques (e.g., time series forecasting with LSTM networks) to predict hourly energy consumption. This resulted in a 20% improvement in system efficiency and reduced energy waste.", // Added specific techniques
      },
      {
        text:
          "Performed comprehensive analysis of weather data (temperature, humidity, solar radiation) and energy consumption data from smart homes to identify optimization opportunities, leading to significant operational cost savings and improved energy usage patterns.", // Added specific data types
      },
      {
          text: "Developed and maintained data pipelines to ingest, process, and store large volumes of time-series data from smart home devices, ensuring data quality and availability for analysis and modeling."
      },
      {
          text: "Created interactive dashboards and reports using Power BI to visualize key performance indicators (KPIs) and communicate insights to stakeholders, facilitating data-driven decision-making."
      }
    ],
    skills: [
      { name: "Python" },
      { name: "Machine Learning" },
      { name: "Predictive Analytics" },
      { name: "Time Series Forecasting" },
      { name: "LSTM Networks" }, // Added specific technique
      { name: "Data Modeling" },
      { name: "Data Analysis" },
      { name: "Power BI" },     // Added Power BI
      { name: "Data Pipelines" }, // Added Data Pipelines
      { name: "ETL" },          // Added ETL
      { name: "SQL" },           //Added SQL
        {name: "Data Visualization"}
    ],
  },
  {
    title: "Technical Sales Engineer",
    company: "Fortizo Energy Resources Limited",
    location: "Nigeria",
    startDate: "February 2020",
    endDate: "July 2020",
    achievements: [
      {
        text:
          "Developed and delivered technical bids and proposals, resulting in a significant increase in the company's contract win rate and improved client satisfaction.", // Clarified impact
      },
      {
        text:
          "Utilized expertise in process designs, equipment lists, and heat/material balances to ensure the accuracy and efficiency of project deliverables.  Built and maintained strong client relationships to drive sales targets and revenue growth.", // Combined for better flow
      },
        {
            text: "Conducted market research and competitive analysis to identify new business opportunities and inform sales strategies."
        }
    ],
    skills: [
      { name: "Technical Sales" },
      { name: "Proposal Writing" },
      { name: "Process Design" },
      { name: "Client Relationship Management" },
      { name: "Communication" },
      { name: "Market Research" },  // Added Market Research
      { name: "Competitive Analysis" }, // Added Competitive Analysis
      { name: "Presentation Skills" } //added presentation skills

    ],
  },
];
