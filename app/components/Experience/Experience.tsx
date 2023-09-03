"use client";
import { useContext } from "react";
import Image from "next/image";
import { ThemeContext } from "../../contexts/ThemeContext";

import "./Experience.css";

import { experienceData } from "../../data/experienceData";
import ExperienceCard from "./ExperienceCard";

const Experience: React.FC = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div
      className="experience"
      id="experience"
      style={{ backgroundColor: theme.secondary }}
    >
      <div className="experience-body">
        <div className="experience-image">
          <Image src={theme.expimg} alt="" />
        </div>
        <div className="experience-description">
          <h1 style={{ color: theme.primary }}>Experience</h1>
          {experienceData.map((exp) => (
            <ExperienceCard
              key={exp.id}
              id={exp.id}
              img={exp.img}
              jobtitle={exp.jobtitle}
              company={exp.company}
              startYear={exp.startYear}
              endYear={exp.endYear}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
