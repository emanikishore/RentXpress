import React from "react";
import Slider from "react-slick";

import "./index.css";

const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    swipeToSlide: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (

      <div className="testimonial-main-container">
        <h1 className="testimonial-heading">What Clients Say</h1>
        <Slider {...settings}>
          <div className="testimonial-container">
            <p className="testimonial-description">
            Effortless car rentals with RentXpress. Your key to convenient and reliable transportation.
            </p>
            <div className="testimonial-bottom-container">
              <img src="https://i.ibb.co/YXmy7Ch/1696741828069.jpg" className="user-image"/>
              <div className="details">
                <h3 className="testimonial-name-head">Mani</h3>
              </div>
            </div>
          </div>
          <div className="testimonial-container">
            <p className="testimonial-description">
            RentXpress made our vacation truly hassle-free! From booking to dropoff, everything was seamless.
            </p>
            <div className="testimonial-bottom-container">
              <img src="https://i.ibb.co/L14qNhq/Whats-App-Image-2024-03-06-at-23-21-26-ed14124b.jpg" className="user-image"/>
              <div className="details">
                <h3 className="testimonial-name-head">Vaseema</h3>
              </div>
            </div>
          </div>
          <div className="testimonial-container">
            <p className="testimonial-description">
            As a frequent traveler, I've tried many car rental services, but RentXpress stands out for its convenience and affordability.
            </p>
            <div className="testimonial-bottom-container">
              <img src="https://i.ibb.co/rZz3ms2/Whats-App-Image-2024-03-07-at-12-20-43-5f6025c0.jpg" className="user-image"/>
              <div className="details">
                <h3 className="testimonial-name-head">Vijaya</h3>
              </div>
            </div>
          </div>
          <div className="testimonial-container">
            <p className="testimonial-description">
            I've been using RentXpress for all my business trips, and they never disappoint.
            </p>
            <div className="testimonial-bottom-container">
              <img src="https://i.ibb.co/g96t76D/Whats-App-Image-2024-04-12-at-13-41-42-41085788.jpg" className="user-image"/>
              <div className="details">
                <h3 className="testimonial-name-head">Chitralekha</h3>
              </div>
            </div>
          </div>
          <div className="testimonial-container">
            <p className="testimonial-description">
            Their user-friendly platform and transparent pricing make renting a car a breeze. I wouldn't go anywhere else!
            </p>
            <div className="testimonial-bottom-container">
              <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="user-image"/>
              <div className="details">
                <h3 className="testimonial-name-head">Chandler</h3>
              </div>
            </div>
          </div>
          <div className="testimonial-container">
            <p className="testimonial-description">
            The car was clean, well-maintained, and exactly what we needed for exploring the area. Highly recommended!
            </p>
            <div className="testimonial-bottom-container">
              <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="user-image"/>
              <div className="testimonial-details">
                <h3 className="testimonial-name-head">Joe</h3>
              </div>
            </div>
          </div>
      </Slider>
    </div>
    
    
    
  );
};

export default Testimonial;
