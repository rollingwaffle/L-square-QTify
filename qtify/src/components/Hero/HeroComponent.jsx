import Hero from "../../assets/vibrating-headphone 1.png";
import styles from "./Hero.module.css";

const HeroComponent = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.heroText}>
        <span>100 Thousand Songs, ad-free</span>
        <span>Over thousands podcast episodes</span>
      </div>
      <img src={Hero} alt="heroImage" />
    </div>
  );
};

export default HeroComponent;
