import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Rating from "../../../components/Rating/Rating";
export default function PatientReview(props) {
  const data = [
    {
      rating: "3",
      text:
        "A very helpful app for booking appointments and searching for the required doctors. Has made my life a lot easy. I would strongly recommend this toall",
      author: "Britanny Nelson",
    },
    {
      rating: "5",
      text:
        "A very helpful app for booking appointments and searching for the required doctors. Has made my life a lot easy. I would strongly recommend this toall",
      author: "Britanny Nelson",
    },
    {
      rating: "4",
      text:
        "A very helpful app for booking appointments and searching for the required doctors. Has made my life a lot easy. I would strongly recommend this toall",
      author: "Britanny Nelson",
    },
    {
      rating: "2",
      text:
        "A very helpful app for booking appointments and searching for the required doctors. Has made my life a lot easy. I would strongly recommend this toall",
      author: "Britanny Nelson",
    },
  ];

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 600 },
      items: 2,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 600, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  return (
    <div className="patientReviewBg">
      <div className="basicLandingRow patientReview">
        <div className="patientReviewFlex">
          <div className="titleSec mb-5 mb-xl-0">
            <div>
              <div className="basicLandingTitle">
                Patients love using The Cloud Doc
              </div>
              <div className="text">What our users have to say</div>
            </div>
          </div>
          <div className="sliderSec">
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
              {data &&
                data.map((item, index) => {
                  return (
                    <Card
                      key={index}
                      rating={item.rating}
                      text={item.text}
                      author={item.author}
                    />
                  );
                })}
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
}

const Card = ({ rating, text, author }) => {
  return (
    <div className="patientReviewCard">
      <div>
        <Rating
          sizeClass="reviewStar"
          color="#EECE00"
          borderColor="#EECE00"
          readOnly
          fixRating={rating}
        />
      </div>
      <div className="message">{text}</div>
      <div className="flexCenter">
        <div className="divider"></div>
        <div className="authorText">{author}</div>
      </div>
    </div>
  );
};
