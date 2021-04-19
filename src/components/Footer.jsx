import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import MailIcon from "@material-ui/icons/Mail";
function Footer() {
  return (
    <div data-aos="fade-up" data-aos-duration="1000" className="footer">
      <Container>
        <Row>
          <Col>
            <h2 className="brand-footer">KARTAVYA ACADEMY</h2>
          </Col>
        </Row>
        <Row>
          <Col className="quick-links">
            <Row className="row-heading">Quick Links</Row>
            <Row className="row-links">
              <a href="/achievement" target="_blank">
                Achievements
              </a>
            </Row>
            <Row className="row-links">About us</Row>
            <Row className="row-links">Fee Structure and payment </Row>
            <Row className="row-links">
              <a href="/contact" target="_blank">
                Contact Us
              </a>
            </Row>
          </Col>
          <Col>
            <div className="iconLinks">
              <FacebookIcon className="icons" />
              <InstagramIcon className="icons" />
              <MailIcon className="icons" />
            
              <h6 className="copyright">&#169; KARTAVYA ACADEMY LTD.</h6>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default Footer;
