"use client";
import React, { useContext, useEffect, useState } from "react";
import { IoIosArrowDropupCircle } from "react-icons/io";
import { makeStyles } from "@material-ui/core/styles";
import { ThemeContext } from "../../contexts/ThemeContext";
import "./BackToTop.css";
import { ThemeType } from "@/app/types/types";

const BackToTop: React.FC = () => {
  const [visible, setVisible] = useState<boolean>(false);

  const { theme } = useContext<ThemeType>(ThemeContext);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const toggleVisible = () => {
      const scrolled = document.documentElement.scrollTop;
      if (scrolled > 300) {
        setVisible(true);
      } else if (scrolled <= 300) {
        setVisible(false);
      }
    };

    // Attache l'écouteur d'événement ici
    window.addEventListener("scroll", toggleVisible);

    // Nettoie l'écouteur d'événement lors du démontage du composant
    return () => {
      window.removeEventListener("scroll", toggleVisible);
    };
  }, []);

  const useStyles = makeStyles(() => ({
    icon: {
      fontSize: "3rem",
      color: theme.tertiary,
    },
  }));

  const classes = useStyles();

  return (
    <div style={{ display: visible ? "inline" : "none" }} className="backToTop">
      <button onClick={scrollToTop} aria-label="Back to top">
        <IoIosArrowDropupCircle className={classes.icon} />
      </button>
    </div>
  );
};

export default BackToTop;
