"use client";

import { useContext, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AOS from "aos";
import "aos/dist/aos.css";
import expImgWhite from "../../../public/assets/svg/experience/expImgWhite.svg";
import "./Experience.css";
import PropTypes from "prop-types";
import { ThemeContext } from "../../contexts/ThemeContext";
import Image, { StaticImageData } from "next/image";
type ExperienceProps = {
  id: number;
  company: string;
  jobtitle: string;
  startYear: string;
  endYear: string;
  img: StaticImageData | string;
};

const ExperienceCard: React.FC<ExperienceProps> = ({
  id,
  company,
  jobtitle,
  startYear,
  endYear,
  img,
}) => {
  const { theme } = useContext(ThemeContext);
  const useStyles = makeStyles(() => ({
    experienceCard: {
      backgroundColor: theme.primary30,
      "&:hover": {
        backgroundColor: theme.primary50,
      },
    },
  }));
  useEffect(() => {
    AOS.init(); // Exécuter AOS.init() uniquement côté client
  }, []); // [] signifie que cela ne se produira qu'une fois  const { theme } = useContext(ThemeContext);

  const classes = useStyles();

  return (
    <div
      key={id}
      className={`experience-card ${classes.experienceCard}`}
      data-aos="fade-left"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
    >
      <div className="expcard-img" style={{ backgroundColor: theme.primary }}>
        <Image src={img || expImgWhite} alt="" />
      </div>
      <div className="experience-details">
        <h6 style={{ color: theme.primary }}>
          {startYear}-{endYear}
        </h6>
        <h4 style={{ color: theme.tertiary }}>{jobtitle}</h4>
        <h5 style={{ color: theme.tertiary80 }}>{company}</h5>
      </div>
    </div>
  );
};

ExperienceCard.propTypes = {
  id: PropTypes.number.isRequired,
  company: PropTypes.string.isRequired,
  jobtitle: PropTypes.string.isRequired,
  startYear: PropTypes.string.isRequired,
  endYear: PropTypes.string.isRequired,
};

export default ExperienceCard;
