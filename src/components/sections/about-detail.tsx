"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  Brain,
  Cloud,
  Code,
  Building2,
  GraduationCap,
  Award,
  Sparkles,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { certifications } from "@/data/certifications";
import { experiences} from "@/data/experience";
import { education } from "@/data/education";
import { hobbies } from "@/data/hobbies";
import { skillCategories } from "@/data/skills";

export function AboutDetail() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-primary/5 to-background">
      <div className="container mx-auto px-4 py-24">
        {/* Profile Section - First thing recruiters see */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-20"
        >
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-primary/10">
              <Image
                src="/headshot/headshot-2024.jpg"
                alt="Paul Okafor"
                fill
                sizes="192px"
                priority
                className="object-cover"
              />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Paul Okafor</h1>
              <p className="text-xl text-muted-foreground mb-4">
                Data Scientist & AI Engineer
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="bg-primary/10">
                  <Cloud className="w-3 h-3 mr-2" /> Computer Vision Enthusiast
                </Badge>
                <Badge variant="outline" className="bg-primary/10">
                  <Brain className="w-3 h-3 mr-2" /> AI/ML Expert
                </Badge>
                <Badge variant="outline" className="bg-primary/10">
                  <Sparkles className="w-3 h-3 mr-2" /> LLM/GenAI and AI Agent Engineer
                </Badge>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Professional Summary - Quick overview of value proposition */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-20"
        >
          <Card className="p-8 backdrop-blur-xl bg-card/50 border-primary/10">
            <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
              <Building2 className="w-6 h-6 text-primary" />
              Professional Summary
            </h2>
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
            <p>
                Paul Okafor is a highly skilled Data Scientist and AI Engineer with a strong foundation in
                machine learning, deep learning, and natural language processing (NLP).  He excels at
                developing and deploying AI-powered solutions, with experience spanning computer vision,
                LLM, AI Research, and the creation of intelligent AI agents. Paul has a proven ability to leverage data to solve complex problems, as demonstrated by his work on
                projects addressing healthcare challenges, unemployment, and the digital lending landscape in Africa.
              </p>
              <p>
                His technical expertise encompasses a wide range of tools and technologies, including Python,
                Streamlit, TensorFlow, PyTorch, scikit-learn, and various cloud platforms.  Paul&apos;s projects,
                such as his sentiment analysis of Nigerian digital lending platforms and his contributions to
                hackathons focused on African health and unemployment, highlight his commitment to using data
                science for social impact.  He is proficient in building end-to-end machine learning pipelines,
                from data collection and preprocessing to model development, deployment, and visualization.
              </p>
              <p>
                Passionate about continuous learning and contributing to the open-source community, Paul is also focused on developing cutting-edge AI solutions for healthcare, including cost-sensitive
                online learning models for anomaly detection in real-time monitoring and interpretable machine learning
                models for optimizing biomanufacturing processes. His research has been published at the 2024 IEEE Big Data
                Conference, demonstrating his commitment to advancing the field.
                He is adept at transforming complex data into actionable insights and is driven by the
                potential of AI to create positive change. His experience includes building custom LLM chatbots,
                license plate detection systems, and predictive models for disease classification, showcasing
                his versatility and adaptability across different domains.
              </p>
            </div>
          </Card>
        </motion.div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-2">
            <Code className="w-8 h-8 text-primary" />
            Skills & Expertise
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skillCategories.map((category) => (
              <Card
                key={category.name}
                className="p-6 backdrop-blur-xl bg-card/50 border-primary/10"
              >
                <div className="flex items-center gap-3 mb-4">
                  <category.Icon className={`w-6 h-6 ${category.color}`} />
                  <h3 className="text-xl font-semibold">{category.name}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="outline"
                      className={`${category.color}`}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </motion.div>

        {/* Work Experience - Most important for recruiters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-2">
            <Building2 className="w-8 h-8 text-primary" />
            Work Experience
          </h2>
          <div className="space-y-6">
            {experiences.map((exp) => (
              <Card key={`${exp.title}-${exp.startDate}`} className="p-6 backdrop-blur-xl bg-card/50 border-primary/10">
                <div className="flex flex-col md:flex-row justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold">{exp.title}</h3>
                    <p className="text-primary">{exp.company}</p>
                    <p className="text-sm text-muted-foreground">
                      {exp.location}{exp.isRemote ? " (Remote)" : ""}
                    </p>
                  </div>
                  <p className="text-sm text-muted-foreground">{exp.startDate} - {exp.endDate}</p>
                </div>
                <ul className="space-y-2 text-muted-foreground ml-4">
                  {exp.achievements.map((achievement, index) => (
                    <li key={index} className="flex">
                      <span className="mr-2">•</span>
                      <span className="flex-1">{achievement.text}</span>
                    </li>
                  ))}
                </ul>
                {exp.skills.length > 0 && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {exp.skills.map((skill, index) => (
                      <Badge key={index} variant="outline" className="bg-primary/5">
                        {skill.name}
                      </Badge>
                    ))}
                  </div>
                )}
              </Card>
            ))}
          </div>
        </motion.div>

        {/* Certifications - Shows current skills and continuous learning */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-2">
            <Award className="w-8 h-8 text-primary" />
            Certifications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert) => (
              <motion.div
                key={cert.name}
                whileHover={{ scale: 1.02 }}
                className="relative"
              >
                <Card className="p-6 backdrop-blur-xl bg-card/50 border-primary/10 hover:border-primary/30 transition-colors">
                  <div className="flex flex-col gap-4">
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-start gap-4"
                    >
                      <Image
                        src={cert.image}
                        alt={cert.name}
                        width={60}
                        height={60}
                        className="rounded-lg"
                      />
                      <div>
                        <h3 className="font-semibold mb-1">{cert.name}</h3>
                        <p className="text-sm text-muted-foreground">
                          {cert.issuedBy}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          Issued: {cert.issuedDate}
                        </p>
                      </div>
                    </a>

                    {cert.earlyAdopterBadge && (
                      <>
                        <div className="border-t border-primary/10 my-2" />
                        <a
                          href={cert.earlyAdopterBadge.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-3"
                        >
                          <Image
                            src={cert.earlyAdopterBadge.image}
                            alt={cert.earlyAdopterBadge.name}
                            width={40}
                            height={40}
                            className="rounded-lg"
                          />
                          <div>
                            <Badge variant="outline" className="bg-primary/5 mb-1">
                              Early Adopter
                            </Badge>
                            <p className="text-xs text-muted-foreground">
                              {cert.earlyAdopterBadge.name}
                            </p>
                          </div>
                        </a>
                      </>
                    )}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Education - Supporting qualifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-2">
            <GraduationCap className="w-8 h-8 text-primary" />
            Education
          </h2>
          <div className="space-y-6">
            {/* Iterate over the education array and create a Card for each entry*/}
            {education.map((edu, eduIndex) => (
              <Card key={eduIndex} className="p-6 backdrop-blur-xl bg-card/50 border-primary/10">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-2">
                  <div>
                    <h3 className="font-semibold text-lg">{edu.degree}</h3>
                    <p className="text-muted-foreground">{edu.school}</p>
                  </div>
                  <div className="text-right mt-1 md:mt-0">
                    <p className="text-sm text-muted-foreground">
                      {edu.startDate} - {edu.endDate}
                    </p>
                    {/* Conditionally render GPA if it exists */}
                    {edu.gpa && (
                      <p className="text-sm font-medium text-primary">
                        GPA: {edu.gpa}
                      </p>
                    )}
                  </div>
                </div>
                {/* Conditionally render honors if they exist */}
                {edu.honors && edu.honors.length > 0 && (
                  <div className="mt-3 flex flex-wrap gap-2">
                    {edu.honors.map((honor, index) => (
                      <Badge
                        key={index}
                        variant="outline"
                        className="bg-primary/5"
                      >
                        {honor.name}
                      </Badge>
                    ))}
                  </div>
                )}

                {/* Conditionally render activities if they exist */}
                {edu.activities && edu.activities.length > 0 && (
                  <div className="mt-4">
                    <p className="text-sm font-medium mb-2">Activities and Societies:</p>
                    <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1 ml-2">
                      {edu.activities.map((activity, index) => (
                        <li key={index}>{activity.name}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </Card>
            ))}
          </div>
        </motion.div>

        {/* Hobbies & Interests - Personal side */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Card className="p-8 backdrop-blur-xl bg-card/50 border-primary/10">
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-6 h-6 text-primary"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
              Hobbies & Interests
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {hobbies.map((hobby, index) => (
                <div key={index} className="space-y-2">
                  <Badge variant="outline" className="bg-primary/5 text-base py-2 px-3">
                    {hobby.emoji} {hobby.name}
                  </Badge>
                  <p className="text-sm text-muted-foreground pl-2">
                    {hobby.description}
                  </p>
                </div>
              ))}
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
