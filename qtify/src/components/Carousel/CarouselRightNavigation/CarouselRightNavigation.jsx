import { ReactComponent as RightArrow } from "../../../assets/rightIcon.svg";
import { useSwiper } from "swiper/react";
import styles from "./CarouselRightNavigation.module.css";
import { useState, useEffect } from "react";

const CarouselRight = () => {
  const swiper = useSwiper();
  const [isEnd, setIsEnd] = useState(false);

  useEffect(() => {
    // console.log("isEnd", isEnd);
    const handleSlideChange = () => {
      setIsEnd(swiper.isEnd);
    };

    swiper.on("slideChange", handleSlideChange);
    swiper.on("reachEnd", handleSlideChange);
    swiper.on("fromEdge", handleSlideChange);
  }, []);

  return (
    <div className={styles.rightCarousel}>
      {!isEnd && <RightArrow onClick={() => swiper.slideNext()} />}
    </div>
  );
};

export default CarouselRight;
