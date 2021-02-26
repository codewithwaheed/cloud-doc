import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

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
          transitionDuration={300}
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
          {/* <img
            src="/images/landingBg.png"
            className="landingSliderImg"
            alt="landingSliderImg"
          ></img>
          <img
            src="/images/landingBg.png"
            className="landingSliderImg"
            alt="landingSliderImg"
          ></img>
          <img
            src="/images/landingBg.png"
            className="landingSliderImg"
            alt="landingSliderImg"
          ></img> */}
        </Carousel>
      </div>
      <div className="landingSlider ">
        <div className="basicLandingRow">
          <div className="title">
            Find local doctors who take your insurance
          </div>

          {/* mobile search */}
          <div className="mainInputDiv d-block d-md-none">
            <div className="inputDiv">
              <div>
                <img
                  className="iconM"
                  alt="icon"
                  src="/images/searchIcon.png"
                ></img>
              </div>
              <input
                className="inputM"
                placeholder="Conditions, Procedures, Doctors"
              ></input>
            </div>
            <div className="inputDiv pt-4">
              <div>
                <img
                  className="iconM"
                  alt="icon"
                  src="/images/markerIcon.png"
                ></img>
              </div>
              <input
                className="inputM "
                placeholder="City, State or Zip Code"
              ></input>
            </div>

            <button className="searchBtnM">Search</button>
          </div>

          {/* desktop search */}
          <div className="mainSearchDiv d-none d-md-flex">
            <div className="searchSec">
              <div className="inputDivD">
                <div>
                  <img
                    className="icon"
                    alt="icon"
                    src="/images/searchIcon.png"
                  ></img>
                </div>
                <input
                  className="input"
                  placeholder="Conditions, Procedures, Doctors"
                ></input>
              </div>
              <div className="divider"></div>
              <div className="inputDivD">
                <div>
                  <img
                    className="icon"
                    alt="icon"
                    src="/images/markerIcon.png"
                  ></img>
                </div>
                <input
                  className="input"
                  placeholder="City, State or Zip Code"
                ></input>
              </div>
            </div>
            <button className="searchBtn">Search</button>
          </div>
        </div>
      </div>
    </div>
  );
}
