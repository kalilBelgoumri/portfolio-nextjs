import { useContext } from "react";
import "./About.css";
import { ThemeContext } from "../../contexts/ThemeContext";
import { aboutData } from "../../data/aboutData";
import { ThemeType } from "../../types/types";
import Image from "next/image";
type AboutDataType = {
  title: string;
  description1: string;
  description2: string;
  image: number;
};

const typedAboutData: AboutDataType = aboutData;

const About: React.FC = () => {
  const { theme } = useContext<ThemeType>(ThemeContext);
  return (
    <div
      className="about"
      id="about"
      style={{ backgroundColor: theme.secondary }}
    >
      <div className="line-styling">
        <div
          className="style-circle"
          style={{ backgroundColor: theme.primary }}
        ></div>
        <div
          className="style-circle"
          style={{ backgroundColor: theme.primary }}
        ></div>
        <div
          className="style-line"
          style={{ backgroundColor: theme.primary }}
        ></div>
      </div>
      <div className="about-body">
        <div className="about-description">
          <h2 style={{ color: theme.primary }}>{typedAboutData.title}</h2>
          <p style={{ color: theme.tertiary80 }}>
            {typedAboutData.description1}
            <br />
            <br />
            {typedAboutData.description2}
          </p>
        </div>
        <div className="about-img">
          <Image
            src={typedAboutData.image === 1 ? theme.aboutimg1 : theme.aboutimg2}
            alt="Profile"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
