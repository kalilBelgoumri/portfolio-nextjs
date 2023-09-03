"use client";

import { useContext, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { ThemeContext } from "../../../contexts/ThemeContext";
import PropTypes from "prop-types";
import "./SingleService.css";
import { ThemeType } from "../../../types/types";

type SingleServicetProps = {
  id: number;
  title: string;
  icon: JSX.Element;
};

const SingleService: React.FC<SingleServicetProps> = ({ id, title, icon }) => {
  useEffect(() => {
    AOS.init(); // Exécuter AOS.init() uniquement côté client
  }, []); // [] signifie que cela ne se produira qu'une fois

  const { theme } = useContext<ThemeType>(ThemeContext);
  return (
    <div
      data-aos="fade-left"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
      key={id}
      className="single-service"
      style={{ backgroundColor: theme.primary400 }}
    >
      <div className="service-content" style={{ color: theme.tertiary }}>
        <i className="service-icon">{icon}</i>
        <h4 style={{ color: theme.tertiary }}>{title}</h4>
      </div>
    </div>
  );
};

SingleService.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  icon: PropTypes.element.isRequired,
};

export default SingleService;
