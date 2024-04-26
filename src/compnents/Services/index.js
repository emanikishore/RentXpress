import React from "react";
import { Col } from "reactstrap";
import "./index.css";
import { FaLocationDot } from "react-icons/fa6"
import { FaCity } from "react-icons/fa";
import { FaCarSide } from "react-icons/fa";
import { TbBrandBooking } from "react-icons/tb";
import { FaLocationArrow } from "react-icons/fa";
import { MdLocalAirport } from "react-icons/md";
import ServiceItem from "../ServiceItem"

const serviceData = [
  {
    id: 1,
    title: "City Transfer",
    icon: <FaLocationDot />,
    desc: "Convenient city transport for meetings or exploring. Enjoy comfortable rides with our professional drivers.",
  },
  {
    id: 2,
    title: "Whole City Tour",
    icon: <FaCity />,
    desc: "Explore the city's landmarks with expert guides. Dive into local culture and history along the way.",
  },
  {
    id: 3,
    title: "Unlimited Miles Car Rental",
    icon: <FaCarSide />,
    desc: "Explore freely with no mileage restrictions. Choose from our diverse fleet for any journey.",
  },
  {
    id: 4,
    title: "Fast & Easy Booking",
    icon: <TbBrandBooking />,
    desc: "Streamlined reservation system for hassle-free booking. Book with confidence, anytime, anywhere.",
  },
  {
    id: 5,
    title: "Many Pickup Locations",
    icon: <FaLocationArrow />,
    desc: "Flexible pickup options from various city locations. Start your journey conveniently and stress-free.",
  },
  {
    id: 6,
    title: "Airport Transfer",
    icon: <MdLocalAirport />,
    desc: "Reliable transportation to and from the airport. Ensure punctuality and comfort for your travels.",
  },
];





const Services = () => (
    <div className="popular-services">
        <h1 className="services-main-heading">Popular Services</h1>
        <ul className="popular-services-container">
            {serviceData.map(eachItem => (
                <ServiceItem eachItem = {eachItem} key = {eachItem.id}/>
            ))}
        </ul>
    </div>
)

export default Services

/*

const Services = () => {
  return (
    <>
      {servicesData.map((item) => (
        <ServiceItem item={item} key={item.id} />
      ))}
    </>
  );
};

const ServiceItem = ({ item }) => (
  <Col lg="4" md="4" sm="6" className="mb-3">
    <div className="service__item">
      <span className="mb-3 d-inline-block">
        <i class={item.icon} />
      </span>

      <h6>{item.title}</h6>
      <p className="section__description">{item.desc}</p>
    </div>
  </Col>
);

export default Services;
*/