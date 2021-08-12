import React from "react";
function AboutContent() {
  return (
    <div className="about-body">
      <div className="course-content">
        <h1 className="about-heading">About Us</h1>
        <p className="about-paragraph">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <img
          className="course-main-image"
          src="/images/university.png"
          alt="University"
        ></img>
      </div>
    </div>
  );
}
export default AboutContent;
