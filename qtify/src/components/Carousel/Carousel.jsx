import styles from "./Carousel.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import CardComponent from "../card/card";
import CarouselLeft from "./CarouselLeftNavigation/CarouselLeftNavigation";
import { useSwiper } from "swiper/react";
import { useEffect } from "react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import CarouselRight from "./CarouselRightNavigation/CarouselRightNavigation";

const Carousel = ({ data }) => {
  return (
    <div className={styles.carousel}>
      <Swiper
        style={{ margin: "0px 30px" }}
        slidesPerView={"auto"}
        spaceBetween={40}
        modules={[Navigation]}
        initialSlide={0}
        allowTouchMove
      >
        <CarouselLeft />
        <CarouselRight />

        {data.map((item, index) => (
          <SwiperSlide className={styles.slide} key={index}>
            <CardComponent data={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
export default Carousel;
