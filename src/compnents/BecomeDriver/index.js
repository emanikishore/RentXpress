import React from "react";
import "./index.css";
import { Container, Row, Col } from "reactstrap";



const BecomeDriver = () => {
  return (
    <section className="become__driver">
      <Container>
        <Row>
          <Col lg="6" md="6" sm="12" className="become__driver-img">
            <img src="https://freepngimg.com/save/36423-classic-car-transparent-background/998x267" alt="drive-image" className="driver-image-section w-100" />
          </Col>

          <Col lg="6" md="6" sm="12">
            <h2 className="section__title become__driver-title">
              Do You Want to Earn With Us? So Don't Be Late
            </h2>

            <button className="become__driver-btn mt-4">
              Become a Driver
            </button>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default BecomeDriver;
