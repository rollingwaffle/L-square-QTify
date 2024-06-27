import { useEffect, useState } from "react";
import styles from "./Section.module.css";
import axios from "axios";
import CardComponent from "../card/card";
import { StyledEngineProvider } from "@mui/material/styles";
import { Card } from "@mui/material";
import Carousel from "../Carousel/Carousel";
import Filter from "../Filter/Filter";

const Section = ({ title, data, type, genres }) => {
  // const [data, setData] = useState([]);
  console.log("genres", genres);
  const [CarouselToggle, setCarouselToggle] = useState(true);
  const [filters, SetFilter] = useState([{ key: "All", label: "All" }]);
  const [filteredIndex, setFilteredIndex] = useState(0);

  const handleToggle = () => {
    setCarouselToggle((prevState) => !prevState);
  };

  useEffect(() => {
    if (genres && filters.length < genres.length + 1) {
      SetFilter([...filters, ...genres]);
    }
  }, [genres]);

  const showFilters = type === "songs";

  const cardsToRender = data.filter((card) =>
    showFilters && filteredIndex > 0
      ? card.genre.key === filters[filteredIndex].key
      : card
  );

  return (
    <div>
      <div className={styles.sectionTop}>
        <span className={styles.sectionHeading}>{title}</span>
        <button className={styles.sectionButton} onClick={handleToggle}>
          {type === "album" ? (CarouselToggle ? "Show All" : "Collapse") : null}
        </button>
      </div>
      {showFilters ? (
        <div className={styles.filterWrapper}>
          <Filter
            filters={filters}
            filteredIndex={filteredIndex}
            setFilteredIndex={setFilteredIndex}
          />
        </div>
      ) : null}
      {CarouselToggle ? (
        <Carousel data={cardsToRender} type={type} />
      ) : (
        <div className={styles.gridContainer}>
          {cardsToRender.map((item, index) => (
            <CardComponent key={index} data={item} type={type} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Section;
