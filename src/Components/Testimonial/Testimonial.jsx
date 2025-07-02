import React from "react";
import Slider from "react-slick";
import Profile1 from "../../assets/testimonial-image.jpg";
import Profile2 from "../../assets/testimonial-image.jpg";
import Profile3 from "../../assets/testimonial-image.jpg";
import Profile4 from "../../assets/testimonial-image.jpg";
import Profile5 from "../../assets/testimonial-image.jpg";
import { FaStar } from "react-icons/fa6";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Testimonial.css";

export default function Testimonial() {
  const renderTestimonialData = testimonialsData.map((review) => {
    return (
      <div className="card" key={review.id}>
        <div className="flex gap-2">
          <div className="profile">
            <img src={review.image} />
          </div>
          <div>
            <h4>{review.name}</h4>
            <p>{review.title}</p>
            <span>
              {Array.from({ length: review.rating }, (_, i) => (
                <FaStar key={i} className="rating-star" />
              ))}
            </span>
          </div>
        </div>
        <div>
          <p className="para">{review.text}</p>
        </div>
      </div>
    );
  });

  return (
    <section id="testimonials">
      <div className="wrapper p-block-9 border-btm">
        <div className="text-center">
          <span
            className="sub-text overlay-text middle"
            datatype="Client Testimonials"
          >
            Client Testimonials
          </span>
          <h2>
            Testimonials that <br />
            <span className="green-text">Speaks to my result</span>
          </h2>
        </div>
        <Slider {...settings} className="mt-5">
          {renderTestimonialData}
        </Slider>
      </div>
    </section>
  );
}

const testimonialsData = [
  {
    name: "Alex Alex",
    title: "CEO, Software company",
    image: Profile1,
    rating: 5,
    text: " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam tempora harum sed doloribus ea placeat",
  },
  {
    name: "Joe Joe",
    title: "CEO, Software company",
    image: Profile2,
    rating: 5,
    text: " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam tempora harum sed doloribus ea placeat",
  },
  {
    name: "Prince Prince",
    title: "CEO, Software company",
    image: Profile3,
    rating: 4,
    text: " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam tempora harum sed doloribus ea placeat",
  },
  {
    name: "Daniel Daniel",
    title: "CEO, Software company",
    image: Profile4,
    rating: 5,
    text: " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam tempora harum sed doloribus ea placeat",
  },
  {
    name: "Seth Seth",
    title: "CEO, Software company",
    image: Profile5,
    rating: 3,
    text: " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam tempora harum sed doloribus ea placeat",
  },
];

var settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 790,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};
