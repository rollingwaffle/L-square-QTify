import React from "react";
import styles from "./Filter.module.css";
import { Tab, Tabs } from "@mui/material";

function Filter({ filters, filteredIndex, setFilteredIndex }) {
  const handleChange = (event, newValue) => {
    setFilteredIndex(newValue);
  };

  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }

  return (
    <div>
      <Tabs
        value={filteredIndex}
        onChange={handleChange}
        aria-label="song filter tabs"
        TabIndicatorProps={{
          style: {
            backgroundColor: "var(--color-primary)",
          },
        }}
      >
        {filters.map((ele, idx) => (
          <Tab className={styles.tab} label={ele.label} {...a11yProps(idx)} />
        ))}
      </Tabs>
    </div>
  );
}

export default Filter;
