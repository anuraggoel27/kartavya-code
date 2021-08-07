import React from "react";
import Particle from "./Particle";
import QueryForm from "./Home/QueryForm";
import ImageCarousel from "./Home/ImageCarousel";
import Download from "./Home/Download";
import Welcome from "./Home/Welcome";
import Faculty from "./Home/Faculty";
function Content() {
  return (
    <div className="content">
      <Particle />
      <div className="top">
        <ImageCarousel />
        <QueryForm />
      </div>
      <Welcome />
      <Faculty />
      <Download />
    </div>
  );
}
export default Content;
