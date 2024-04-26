
import React, { useRef } from "react";

import { Container, Row, Col } from "reactstrap";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { FiPhoneCall } from "react-icons/fi";
import { FaCar } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaRegClock } from "react-icons/fa";

import "./index.css";


const Header = () => {
  const menuRef = useRef(null);

  return (
    <header className="header">
      {/* ============ header top ============ */}
      <div className="header__top">
        <Container className="total-header">
          <div className="login-registers-wrapper">
            <div className="header__top__left">
              <span>Need Help?</span>
              <span className="header__top__help">
                <FiPhoneCall /> +91 6304433712
              </span>
            </div>

            <div className="header__top__right">
              <Link to="/login" className=""> Login  </Link>
              <Link to="/signup" className=""> Register </Link>
            </div>
          </div>
        </Container>
      </div>


      {/* =============== header middle =========== */}
      <div className="header__middle">
        <Container>
          <Row className="middle-nav">
            <Col lg="4" md="3" sm="4">
              <div className="logo">
                <h1>
                  <Link to="/home" className="">
                    <img src="https://i.ibb.co/5KxCC9p/Design-a-logo-for-Rent-Xpress-a-car-rental-proje-2.jpg" className="logo" alt="logo"/>
                    {/* <img src="https://i.ibb.co/cQLRSsp/Design-a-logo-for-Rent-Xpress-a-car-rental-proje-3.jpg" className="logo" alt="logo"/> */}
                  </Link>
                </h1>
              </div>
            </Col>

            <Col lg="3" md="3" sm="4">
              <div className="header__location-place">
                <span className="location">
                <FaLocationDot className="location" />
                </span>
                <div className="header__location-content-place">
                  <h4>Ongole</h4>
                  <h6>Andhra Pradesh</h6>
                </div>
              </div>
            </Col>

            <Col lg="3" md="3" sm="4">
              <div className="header__location">
                <div className="header__location-content">
                  <div><FaRegClock className="clock" /></div>
                  <div><h4 className="header-time">24*7</h4></div>
                </div>
              </div>
            </Col>

            <Col
              lg="2"
              md="3"
              sm="0"
              className=" d-flex align-items-center justify-content-end "
            >
              <button className="header__btn">
                <Link to="/contact">
                  <i class="ri-phone-line"></i> Request a call
                </Link>
              </button>
            </Col>
          </Row>
        </Container>
      </div>

      {/* ========== main navigation =========== */}

      <nav className="navbar">
        <div className="navbar-left">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/cars">Cars</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
        <div className="navbar-right">
          <input type="search" placeholder="Search" className="search-bar" />
        </div>
      </nav>


    </header>
  );
};

export default Header;
