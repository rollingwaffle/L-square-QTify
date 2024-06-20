import styles from "./SearchBar.module.css";
import SearchIcon from "@mui/icons-material/Search";

const SearchBar = ({ placeholder }) => {
  return (
    <div className={styles.searchBar}>
      <input
        className={styles.inputTag}
        type="text"
        placeholder={placeholder}
      />
      <button className={styles.searchButton}>
        <SearchIcon />
      </button>
    </div>
  );
};

export default SearchBar;
