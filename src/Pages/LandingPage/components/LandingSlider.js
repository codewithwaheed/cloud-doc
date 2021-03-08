import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import SearchComponent from "./SearchComponent";

export default function LandingSlider(props) {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 600 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 600, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  return (
    <div>
      <div className="d-none d-md-inline">
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
          transitionDuration={500}
          //   containerClass="carouselContainerProvider"
          // customLeftArrow={<CustomLeftArrow />}
          // customRightArrow={<CustomRightArrow />}
          removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
          deviceType={props.deviceType}
          // dotListClass="custom-dot-list-style"
          itemClass="centerFlex"
        >
          <div className="landingSliderImg"></div>
          <div className="landingSliderImg"></div>
          <div className="landingSliderImg"></div>
        </Carousel>
      </div>
      <div className="landingSlider ">
        <div className="basicLandingRow">
          <div className="title">Find and book the best doctors near you</div>

          <SearchComponent inputStyle={{ border: "none" }} />
        </div>
      </div>
    </div>
  );
}
