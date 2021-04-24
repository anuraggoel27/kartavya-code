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
            <h2 className="brand-footer">Kartavya Academy</h2>
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
            <Row className="row-links">
              <a href="/about" target="_blank">
                About us
              </a>
            </Row>
            <Row className="row-links">
              <a href="/courses" target="_blank">
                Courses
              </a>{" "}
            </Row>
            <Row className="row-links">
              <a href="/contact" target="_blank">
                Contact Us
              </a>
            </Row>
          </Col>
          <Col>
            <div className="icon-links">
              <a href="https://www.facebook.com/kartavyacademy" target="_blank"><FacebookIcon className="icons" /></a>
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
