"use client";

import { makeStyles } from "@material-ui/core/styles";
import { FaPlay, FaCode } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import placeholder from "../../../../public/assets/png/placeholder.webp";
import "./SingleProject.css";
import { useContext, useEffect } from "react";
import { ThemeType } from "../../../types/types";
import { ThemeContext } from "../../../contexts/ThemeContext";
import PropTypes from "prop-types";
import Image, { StaticImageData } from "next/image";

type SingleProjectProps = {
  id: number;
  name: string;
  desc: string;
  tags: string[];
  code?: string;
  demo: string;
  imageProject: StaticImageData | string;
};

const SingleProject: React.FC<SingleProjectProps> = ({
  id,
  name,
  desc,
  tags,
  code,
  demo,
  imageProject,
}) => {
  const { theme } = useContext<ThemeType>(ThemeContext);
  const useStyles = makeStyles(() => ({
    iconBtn: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: 40,
      height: 40,
      borderRadius: 50,
      border: `2px solid ${theme.tertiary}`,
      color: theme.tertiary,
      transition: "all 0.2s",
      "&:hover": {
        backgroundColor: theme.secondary,
        color: theme.primary,
        transform: "scale(1.1)",
        border: `2px solid ${theme.secondary}`,
      },
    },
    icon: {
      fontSize: "1.1rem",
      transition: "all 0.2s",
      "&:hover": {},
    },
  }));

  const classes = useStyles();
  useEffect(() => {
    AOS.init(); // Exécuter AOS.init() uniquement côté client
  }, []); // [] signifie que cela ne se produira qu'une fois  const { theme } = useContext(ThemeContext);
  return (
    <div
      className="singleProjectContainer"
      data-aos="fade-left"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
    >
      <div
        key={id}
        className="singleProject"
        style={{ backgroundColor: theme.primary400 }}
      >
        <div className="projectContent">
          <h2
            id={name.replace(" ", "-").toLowerCase()}
            style={{ color: theme.tertiary }}
          >
            {name}
          </h2>
          <Image src={imageProject ? imageProject : placeholder} alt={name} />
          <div className="project--showcaseBtn">
            <a
              href={demo}
              target="_blank"
              rel="noreferrer"
              className={classes.iconBtn}
              aria-labelledby={`${name.replace(" ", "-").toLowerCase()} ${name
                .replace(" ", "-")
                .toLowerCase()}-demo`}
            >
              <FaPlay
                id={`${name.replace(" ", "-").toLowerCase()}-demo`}
                className={classes.icon}
                aria-label="Demo"
              />
            </a>
            <a
              href={code}
              target=""
              rel="noreferrer"
              className={classes.iconBtn}
              aria-labelledby={`${name.replace(" ", "-").toLowerCase()} ${name
                .replace(" ", "-")
                .toLowerCase()}-code`}
            >
              <FaCode
                id={`${name.replace(" ", "-").toLowerCase()}-code`}
                className={classes.icon}
                aria-label="Code"
              />
            </a>
          </div>
        </div>
        <p
          className="project--desc"
          style={{
            background: theme.secondary,
            color: theme.tertiary,
          }}
        >
          {desc}
        </p>
        <div
          className="project--lang"
          style={{
            background: theme.secondary,
            color: theme.tertiary80,
          }}
        >
          {tags.map((tag, id) => (
            <span key={id}>{tag}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

SingleProject.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  tags: PropTypes.array.isRequired,
  code: PropTypes.string,
  demo: PropTypes.string.isRequired,
};

export default SingleProject;
