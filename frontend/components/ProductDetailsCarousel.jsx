import Image from "next/image";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
const ProductDetailsCarousel = () => {
  return (
    <div>
      <Carousel
        infiniteLoop={true}
        showIndicators={false}
        showStatus={false}
        thumbWidth={60}
        className="productCarousel"
        >
            <img src="/p1.png" />
            <img src="/p2.png" />
            <img src="/p3.png" />
            <img src="/p4.png" />
            <img src="/p5.png" />
            <img src="/p6.png" />
            <img src="/p7.png" />
      </Carousel>
    </div>
  );
};

export default ProductDetailsCarousel;
