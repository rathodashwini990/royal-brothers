import Carousel, { CarouselItem } from "./Carousel";
import React from "react";
import styles from "./HomeCarousel.module.css";

function CarouselApp() {
  return (
    <Carousel autoplay className="App" >
      <CarouselItem className={styles.Carousel__solo}>
        <img
          alt="sliderOne"
          src="https://d36g7qg6pk2cm7.cloudfront.net/assets/icons/slide-one-8c7f76cbbc58a89e95e8fcc1ab03d3d4cf12ef680989755fcf01f3a725d5d775.jpg"
        ></img>
      </CarouselItem>
      <CarouselItem className={styles.Carousel__solo}>
        <img
          alt="sliderTwo"
          src="https://d36g7qg6pk2cm7.cloudfront.net/assets/icons/slide-two-2d63ed83b9f2b4003344ac868bb2a42d29efe841bb2c5894ac53bd6af85adb86.jpg"
        ></img>
      </CarouselItem>
      <CarouselItem className={styles.Carousel__solo}>
        <img
          alt="sliderThree"
          src="https://d36g7qg6pk2cm7.cloudfront.net/assets/icons/slide-three-a8787ad27e9ea8ab39d164f233b0995c76d59c4a517c0313e11a4122d6309038.jpg"
        ></img>
      </CarouselItem>
    </Carousel>
  );
}

export default CarouselApp;