import { useEffect, useState } from "react";
import styles from "./Section.module.css";
import axios from "axios";
import CardComponent from "../card/card";
import { StyledEngineProvider } from "@mui/material/styles";
import { Card } from "@mui/material";
import Carousel from "../Carousel/Carousel";

const Section = ({ title, data, type }) => {
  // const [data, setData] = useState([]);
  const [CarouselToggle, setCarouselToggle] = useState(true);

  const handleToggle = () => {
    setCarouselToggle((prevState) => !prevState);
  };

  return (
    <div>
      <div className={styles.sectionTop}>
        <span className={styles.sectionHeading}>{title}</span>
        <button className={styles.sectionButton} onClick={handleToggle}>
          {CarouselToggle ? "Show All" : "Collapse"}
        </button>
      </div>
      {CarouselToggle ? (
        <Carousel data={data} />
      ) : (
        <div className={styles.gridContainer}>
          {data.map((item) => (
            <CardComponent data={item} type={type} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Section;

{
  /* console.log("item", item);
          return (
            <div className={styles.gridItem}>
              <CardComponent data={item} />
            </div>
          ); */
}
