"use client";

import { useContext } from "react";
import Marquee from "react-fast-marquee";
import { ThemeContext } from "../../contexts/ThemeContext";
import { skillsData } from "../../data/skillsData";
import "./Skills.css";
import { skillsImage } from "@/app/utils/skillsImage";
import Image from "next/image";

const Skills: React.FC = () => {
  const { theme } = useContext(ThemeContext);

  const skillBoxStyle = {
    backgroundColor: theme.secondary,
    boxShadow: `0px 0px 30px ${theme.primary30}`,
  };

  return (
    <div className="skills" style={{ backgroundColor: theme.secondary }}>
      <div className="skillsHeader">
        <h2 style={{ color: theme.primary }}>Skills</h2>
      </div>
      <div className="skillsContainer">
        <div className="skill--scroll">
          <Marquee
            gradient={false}
            speed={70}
            pauseOnHover={true}
            pauseOnClick={true}
            delay={0}
            play={true}
            direction="right"
          >
            {skillsData.map((skill, id) => (
              <div className="skill--box" key={id} style={skillBoxStyle}>
                <Image src={skillsImage(skill)} alt={skill} />
                <h3 style={{ color: theme.tertiary }}>{skill}</h3>
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default Skills;
