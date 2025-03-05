export interface EarlyAdopterBadge {
  name: string;
  image: string;
  link: string;
  issuedDate: string;
}

export interface Certification {
  name: string;
  image: string;
  link: string;
  issuedBy: string;
  issuedDate: string;
  earlyAdopterBadge?: EarlyAdopterBadge;
}

export const certifications: Certification[] = [
  {
    name: "Advanced Google Analytics Certificate",
    image: "/certifications/google.jpg",
    link: "https://drive.google.com/file/d/15uLUyo12fmr96PFyg3AwJcb32X2OPRce/view?usp=sharing",
    issuedBy: "Google Digital Academy (Skillshop)",
    issuedDate: "Sept 25th, 2023",
  }, 
  
  {
    name: "R for Data Science: Analysis and Visualization",
    image: "/certifications/linkedin_logo.jpg",
    link: "https://www.linkedin.com/learning/certificates/29160f7572396b23d851d97d0db9dc495025758ad45f257d806f2fe6d208f0cb?accountId=2150050&u=2150050&success=true&authUUID=qIW9t3VvS9CZrwlUPvd2GQ%3D%3D",
    issuedBy: "Barton Poulson (LinkedIn Learning)",
    issuedDate: "Sept 21st, 2023",
  }, 
  // {
  //   name: "Generative AI Fundamentals Accreditation",
  //   image: "/certifications/databricks-genai-fund.png",
  //   link: "https://www.credential.net/401e9f8b-77b3-4580-a533-d2d892f6b117#acc.OHQbpY3s",
  //   issuedBy: "Databricks",
  //   issuedDate: "January 24th, 2025",
  // },
  // {
  //   name: "AWS Machine Learning Engineer Associate",
  //   image: "/certifications/aws-mle.png",
  //   link: "https://www.credly.com/badges/5e5045a6-689d-4939-9ab4-9216b2642801/public_url",
  //   issuedBy: "Amazon Web Services",
  //   issuedDate: "December 13th, 2024",
  //   earlyAdopterBadge: {
  //     name: "AWS Certified Machine Learning Engineer - Associate Early Adopter",
  //     image: "/certifications/aws-mle-early.png",
  //     link: "https://www.credly.com/badges/b8e68f44-d709-4668-a9d0-6ce3b4168ae6/public_url",
  //     issuedDate: "December 13th, 2024",
  //   },
  // },
  // {
  //   name: "AWS SysOps Administrator Associate",
  //   image: "/certifications/aws-soa.png",
  //   link: "https://www.credly.com/badges/0c2d762d-d8e0-44f8-b135-6108647a8f1d/public_url",
  //   issuedBy: "Amazon Web Services",
  //   issuedDate: "November 26th, 2024",
  // },
  // {
  //   name: "AWS Solutions Architect Associate",
  //   image: "/certifications/aws-saa.png",
  //   link: "https://www.credly.com/badges/b616dc7b-6660-4f8e-a1fd-1a7c33daa04c/public_url",
  //   issuedBy: "Amazon Web Services",
  //   issuedDate: "November 11th 2024",
  // },
  // {
  //   name: "AWS Developer Associate",
  //   image: "/certifications/aws-dva.png",
  //   link: "https://www.credly.com/badges/2720213f-937a-48c8-9eb8-6f762338ab27/public_url",
  //   issuedBy: "Amazon Web Services",
  //   issuedDate: "August 18th, 2022",
  // },
  // {
  //   name: "AWS AI Practitioner",
  //   image: "/certifications/aws-aip.png",
  //   link: "https://www.credly.com/badges/a27f942f-9e21-46b9-b319-9fa2f19d7891/public_url",
  //   issuedBy: "Amazon Web Services",
  //   issuedDate: "November 21st, 2024",
  //   earlyAdopterBadge: {
  //     name: "AWS Certified AI Practitioner Early Adopter",
  //     image: "/certifications/aws-aip-early.png",
  //     link: "https://www.credly.com/badges/120b967e-fd07-4853-9d3d-083462bf62cc/public_url",
  //     issuedDate: "November 21st, 2024",
  //   },
  // },
  // {
  //   name: "AWS Cloud Practitioner",
  //   image: "/certifications/aws-cp.png",
  //   link: "https://www.credly.com/badges/80883f97-e12d-4b5f-8502-ec75b6e1e3c1/public_url",
  //   issuedBy: "Amazon Web Services",
  //   issuedDate: "October 21st, 2024",
  // },
];
