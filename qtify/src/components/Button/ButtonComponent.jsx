import styles from "./Button.module.css";

const ButtonComponent = ({ name }) => {
  return <button className={styles.button}>{name}</button>;
};

export default ButtonComponent;
