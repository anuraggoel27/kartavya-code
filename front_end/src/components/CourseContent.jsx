import React from "react";
function CourseContent() {
  return (
    <div className="course-body">
      <div className="CourseContent">
        <h1 className="course-heading">Courses</h1>
        <p className="course-paragraph">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <img
          className="main-image"
          src="/images/videoconference.png"
        ></img>
      </div>
      <div className="course-cards">
        <div className="course-card">
          <h2 className="card-heading course-card1">Foundation</h2>
          <h5 className="card-subheading">
            For students of classes 9th and 10th
          </h5>
          <div className="card-content">
            <p className="card-about">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <img src="/images/student.png" className="card-image"></img>
          </div>
        </div>

        <div className="course-card course-card3">
          <h2 className="card-heading">Boards</h2>
          <h5 className="card-subheading">
            For students of classes 11th and 12th
          </h5>
          <p className="card-about">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <img src="/images/graduate.png" className="card-image"></img>
        </div>

        <div className="course-card">
          <h2 className="card-heading course-card5">
            JEE Mains/Advanced
          </h2>
          <h5 className="card-subheading">Best institute for JEE preparation in the city</h5>
          <p className="card-about">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <img src="/images/competitive.png" className="card-image"></img>
        </div>
        <div className="course-card">
          <h2 className="card-heading course-card5">NEET</h2>
          <h5 className="card-subheading"> Eiusmod tempor incididunt ut labore et</h5>
          <p className="card-about">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <img src="/images/hospital.png" className="card-image"></img>
        </div>
      </div>
    </div>
  );
}
export default CourseContent;
