
import React from "react";
function contactContent() {
  return (
    <div className="contact-body">
      <div className="contactContent">
        <h1 className="contact-heading">Contact Us</h1>
        <p className="contact-paragraph">
          If you have any queries, complaints or suggestions, make sure to
          contact us.
        </p>
        <img className="contact-main-image" src="/images/contact.png"></img>
      </div>
      <div className="contact-cards">
        <div className="contact-card">
          <h2 className="card-heading contact-card1">Phone</h2>
          <div className="contact-card-detail">
          <h5 className="contact-card-about">Anuj Sir: 1234567890</h5>
          <h5 className="contact-card-about">Anuj Sir: 1234567890</h5>
          <h5 className="contact-card-about">Anuj Sir: 1234567890</h5>
          <h5 className="contact-card-about">Anuj Sir: 1234567890</h5>
          </div>
          <div className="contact-card-image">
            <img src="/images/phone.png"></img>
          </div>
          
        </div>
        <div className="contact-card">
          <h2 className="card-heading contact-card1">Email</h2>
          <div className="contact-card-detail">
          <h5 className="contact-card-about">Anuj Sir: anuj@gmail.com</h5>
          <h5 className="contact-card-about">Anuj Sir: anuj@gmail.com</h5>
          <h5 className="contact-card-about">Anuj Sir: anuj@gmail.com</h5>
          <h5 className="contact-card-about">Anuj Sir: anuj@gmail.com</h5>
          </div>
          <div className="contact-card-image">
            <img src="/images/mail-inbox-app.png"></img>
          </div>
          
        </div>
        <div className="contact-card">
          <h2 className="card-heading contact-card1">Address</h2>
          <div className="contact-card-detail">
          <h5 className="contact-card-about">H.no. 132,</h5>
          <h5 className="contact-card-about">Near pushpanjali sweets,</h5>
          <h5 className="contact-card-about">Avas Vikas,</h5>
          <h5 className="contact-card-about">Gonda,271002</h5>
          </div>
          <div className="contact-card-image card-image-3">
            <img src="/images/house.png"></img>
          </div>
          
        </div>
      </div>
    </div>
  );
}
export default contactContent;
