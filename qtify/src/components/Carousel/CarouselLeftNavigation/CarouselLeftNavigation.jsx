import { ReactComponent as LeftArrow } from "../../../assets/leftIcon.svg";
import { useSwiper } from "swiper/react";
import styles from "./CarouselLeftNavigation.module.css";
import { useState, useEffect } from "react";

const CarouselLeft = () => {
  const swiper = useSwiper();

  const [isBeginning, setIsBeginning] = useState(swiper.isBeginning);

  useEffect(() => {
    swiper.on("slideChange", function () {
      setIsBeginning(swiper.isBeginning);
    });
  }, [swiper]);

  return (
    <div className={styles.leftCarousel}>
      {!isBeginning ? <LeftArrow onClick={() => swiper.slidePrev()} /> : null}
    </div>
  );
};

export default CarouselLeft;
