import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function ProviderSec(props) {
  const data = [
    "/images/provider1.svg",
    "/images/provider2.svg",
    "/images/provider3.svg",
    "/images/provider4.svg",
    "/images/provider5.svg",
  ];
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 600 },
      items: 3,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 600, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  return (
    <div className="basicLandingRow providerSec">
      <div className="title">
        We accept insurance from all the famous providers
      </div>
      <div className="providerSlider">
        <Carousel
          // swipeable={false}
          // draggable={false}
          // showDots={true}
          responsive={responsive}
          infinite={true}
          autoPlay={true}
          // autoPlaySpeed={1000}
          // keyBoardControl={true}
          // customTransition="all .5"
          draggable={false}
          transitionDuration={300}
          containerClass="carouselContainerProvider"
          // customLeftArrow={<CustomLeftArrow />}
          // customRightArrow={<CustomRightArrow />}
          removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
          deviceType={props.deviceType}
          // dotListClass="custom-dot-list-style"
          itemClass="centerFlex"
        >
          {data &&
            data.map((item, index) => {
              return (
                <div key={index}>
                  <img className="img" alt="provider" src={item}></img>
                </div>
              );
            })}
        </Carousel>
      </div>
    </div>
  );
}
