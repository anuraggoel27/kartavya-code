import React from "react";
import FileUpload from "../FileUpload";
import {  Button } from "react-bootstrap";
function StudyMaterialContent() {
  return (
    <div className="course-body">
      <div className="course-content">
        <h1 className="course-heading">Study Material</h1>
        <p className="course-paragraph">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <img
          className="course-main-image"
          src="/images/book.png"
          alt="book"
        ></img>
        {/* <div className="file-upload-section">
        <FileUpload/>
        </div> */}
        
      </div>
    </div>
  );
}
export default StudyMaterialContent;
