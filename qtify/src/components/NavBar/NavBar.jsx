import { Link } from "react-router-dom";
import Logo from "../Logo/Logo";
import styles from "./NavBar.module.css";
import SearchBar from "../SearchBar/SearchBar";
import ButtonComponent from "../Button/ButtonComponent";

const NavBar = () => {
  return (
    <nav className={styles.navBar}>
      <Link to="./">
        <Logo />
      </Link>
      <SearchBar placeholder="Search a song of your choice" />
      <ButtonComponent name="Give Feedback" />
    </nav>
  );
};

export default NavBar;
