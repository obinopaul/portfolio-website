export interface Honor {
  name: string;
}

export interface Activity {
  name: string;
}

export interface Education {
  degree: string;
  school: string;
  location: string;
  startDate: string;
  endDate: string;
  gpa?: string; // Made gpa optional
  honors?: Honor[]; // Made honors optional
  activities?: Activity[]; // Made activities optional
}

export const education: Education[] = [
  {
    degree: "Ph.D. in Data Science and Analytics",
    school: "University of Oklahoma",
    location: "USA",
    startDate: "January 2025",
    endDate: "Present",
    gpa: "3.5",
    honors: [
      {name: "2024 IEEE Big Data Conference Paper Publication"}
    ],
    activities: [
      { name: "OU Data Science Club" }, // Added activity
    ],

  },
  {
    degree: "M.S. in Data Science and Analytics",
    school: "University of Oklahoma",
    location: "USA",
    startDate: "August 2023",
    endDate: "December 2024",
    gpa: "3.5",
    honors: [
      {name: "2024 IEEE Big Data Conference Paper Publication"}
      ],
    activities: [
      { name: "Graduate Research Assistant" },
      { name: "National Science Foundation (NSF) Agric AI coding challenge Winner" }, // Added activity
      {name: "TeamElectra in the Air Selangor Data & Digital Hackathon 2024 in Malaysia (Finalist)"}
    ],
  },
  {
    degree: "M.S. in Petroleum Engineering and Project Development",
    school: "University of Port Harcourt",
    location: "Nigeria",
    startDate: "November 2018",
    endDate: "November 2019",
    gpa: "4.6",
    honors: [
      {name: "2024 IEEE Big Data Conference Paper Publication"}
      ],
    activities: [
      {name: "TeamElectra in the Air Selangor Data & Digital Hackathon 2024 in Malaysia (Finalist)"}
      ],
  },
  {
    degree: "B.S. in Petroleum and Gas Engineering",
    school: "University of Lagos",
    location: "Nigeria",
    startDate: "October 2012",
    endDate: "December 2016",
    gpa: "3.54",
    honors: [
      {name: "2024 IEEE Big Data Conference Paper Publication"}
      ],
    activities: [
      {name: "TeamElectra in the Air Selangor Data & Digital Hackathon 2024 in Malaysia (Finalist)"}
      ],
  },
];