import * as React from "react";
import img from "../../assets/Rectangle 2138 (1).png";
import Chip from "@mui/material/Chip";
import styles from "./card.module.css";
import { StyledEngineProvider } from "@mui/material/styles";

const CardComponent = ({ data, type }) => {
  const { title, image } = data;
  let followsOrLikes = 0;

  if (type === "album") {
    followsOrLikes = data.follows;
  } else {
    followsOrLikes = data.likes;
  }
  // console.log("data", data, type);
  return (
    <StyledEngineProvider injectFirst>
      <div className={styles.card}>
        <img className={styles.cardImg} src={image} alt={title} />
        <div className={styles.bottomCard}>
          <Chip
            label={`${followsOrLikes} ${
              type === "album" ? "Follows" : "Likes"
            }`}
            className={styles.chip}
          />
        </div>
        <span className={styles.cardText}>{title}</span>
      </div>
    </StyledEngineProvider>
  );
};

export default CardComponent;
