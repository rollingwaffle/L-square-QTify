import * as React from "react";
import img from "../../assets/Rectangle 2138 (1).png";
import Chip from "@mui/material/Chip";
import styles from "./card.module.css";
import { StyledEngineProvider } from "@mui/material/styles";

const CardComponent = ({ data, type }) => {
  const { title, follows, image } = data;
  return (
    <StyledEngineProvider injectFirst>
      <div className={styles.card}>
        <img className={styles.cardImg} src={image} alt={title} />
        <div className={styles.bottomCard}>
          <Chip
            label={`${follows} ${type === "album" ? "Follows" : "Likes"}`}
            className={styles.chip}
          />
        </div>
        <span className={styles.cardText}>{title}</span>
      </div>
    </StyledEngineProvider>
  );
};

export default CardComponent;
