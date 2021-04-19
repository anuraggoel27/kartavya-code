import React from "react";
import { Row, Col } from "react-bootstrap";
import Particle from "./Particle";
function ContactContent() {
  return (
    <div className="contact-content">
      <Particle
        shapeColor="#000000"
        lineColor="#000000"
        strokeColor="#000000"
      />
      <h1 className="contact-heading">Contact Us</h1>
      <Row className="contact-row">
        <Col>
          <Row>
            <h3 className="contact-type">Mobile</h3>
          </Row>
          <Row>
            <h5 className="contact-detail">Anuj Goel: 194119419</h5>
          </Row>
          <Row>
            <h5 className="contact-detail">Anuj Goel: 194119419</h5>
          </Row>
          <Row>
            <h5 className="contact-detail">Anuj Goel: 194119419</h5>
          </Row>
          <Row>
            <h5 className="contact-detail">Anuj Goel: 194119419</h5>
          </Row>
        </Col>
        <Col>
          <Row>
            <h3 className="contact-type">Email</h3>
          </Row>
          <Row>
            <h5 className="contact-detail">Anuj Goel: anuj@gmail.com</h5>
          </Row>
          <Row>
            <h5 className="contact-detail">Anuj Goel: anuj@gmail.com</h5>
          </Row>
          <Row>
            <h5 className="contact-detail">Anuj Goel: anuj@gmail.com</h5>
          </Row>
        </Col>
        <Col>
          <Row>
            <h3 className="contact-type">Address</h3>
          </Row>
          <Row>
            <h5 className="contact-detail">Avas Vikas , Gonda</h5>
          </Row>
        </Col>
      </Row>
    </div>
  );
}
export default ContactContent;
