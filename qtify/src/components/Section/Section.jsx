import { useEffect, useState } from "react";
import styles from "./Section.module.css";
import axios from "axios";
import CardComponent from "../card/card";
import { StyledEngineProvider } from "@mui/material/styles";
import { Card } from "@mui/material";

const Section = ({ title, data, type }) => {
  // const [data, setData] = useState([]);
  const [buttonToggle, setbuttonToggle] = useState(true);

  const handleToggle = () => {
    setbuttonToggle((prevState) => !prevState);
  };

  // useEffect(() => {
  //   fetchData();
  // }, []);

  // const fetchData = async () => {
  //   try {
  //     const res = await axios.get(
  //       "https://qtify-backend-labs.crio.do/albums/top"
  //     );
  //     setData(res.data);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  return (
    <div>
      <div className={styles.sectionTop}>
        <span className={styles.sectionHeading}>{title}</span>
        <button className={styles.sectionButton} onClick={handleToggle}>
          Collapse
        </button>
      </div>
      <div className={styles.gridContainer}>
        {data.map((item) => (
          <CardComponent data={item} type={type} />
        ))}
      </div>
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
