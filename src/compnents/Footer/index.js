import React from "react";

import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";
import "./index.css";

const quickLinks = [
  {
    path: "/about",
    display: "About",
  },

  {
    path: "#",
    display: "Privacy Policy",
  },

  {
    path: "/cars",
    display: "Car Listing",
  },
  {
    path: "/blogs",
    display: "Blog",
  },

  {
    path: "/contact",
    display: "Contact",
  },
];

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer className="footer">
      <div className="app-container">
      <div className="container1">
            <div className="footer__logo">
              <h1><span className='project-name'>RentXpress</span> </h1>
            </div>
            <p className="footer__logo-content">
            Discover seamless car rentals with RentXpress. Effortlessly find the perfect vehicle for your needs, whether it's a weekend getaway or a business trip. Trust us for clean cars, exceptional service, and hassle-free journeys. Unlock convenience and reliability with RentXpress today.
            </p>
            </div>
          

          
            <div className="container2">
              <h5 className="footer__link-title">Quick Links</h5>
              <ListGroup>
                {quickLinks.map((item, index) => (
                  
                    <Link to={item.path} className="quick__link ">{item.display}</Link>
                 
                ))}
              </ListGroup>
            </div>
            <div className="container3">
              <h5 className="footer__link-title">Head Office</h5>
              <p className="office__info">17/29 Ongole,Andhra Pradesh</p>
              <p className="office__info">Phone: +91 63044 33712</p>

              <p className="office__info">Email: O18team52@gmail.com</p>

              <p className="office__info">Office Time: 24*7</p>
            </div>
            <div className="container4">
              <h1 className="footer-follow">Follow Us</h1>
            </div>
          </div> 
         
          
            <div className="footer__bottom">
              <p className="section__description d-flex align-items-center justify-content-center gap-1 pt-4">
                <i class="ri-copyright-line"></i>Copyright {year}, Developed by
                O18 Team 52. All rights reserved.
              </p>
            </div>

    </footer>
  );
};

export default Footer;
