import React from "react";

import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import MailIcon from "@material-ui/icons/Mail";
function Footer() {
  return (
    <div data-aos="fade-up" data-aos-duration="1000" className="footer">
    <div >  
    <h2 className="brand-footer">Kartavya Academy</h2>
    </div>

      <div className="quick-links">
        <div className="row-heading">Quick Links</div>
        <div className="row-links">
          <a href="/achievement" target="_blank">
            Achievements
          </a>
        </div>
        <div className="row-links">
          <a href="/about" target="_blank">
            About us
          </a>
        </div>
        <div className="row-links">
          <a href="/courses" target="_blank">
            Courses
          </a>{" "}
        </div>
        <div className="row-links">
          <a href="/contact" target="_blank">
            Contact Us
          </a>
        </div>
      </div>
        <div className="icon-links">
          <a href="https://www.facebook.com/kartavyacademy" target="_blank">
            <FacebookIcon className="icons" />
          </a>
          <InstagramIcon className="icons" />
          <MailIcon className="icons" />

          <h6 className="copyright">&#169; KARTAVYA ACADEMY LTD.</h6>
        </div>

    </div>
  );
}
export default Footer;
