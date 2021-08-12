import React from "react";
import Particle from "./Particle";
import GalleryCard from "./GalleryCard";
import links from "./galleryPhotosLink";
function GalleryContent() {
  return (
    <div className="achievement">
      {/* <Particle
        shapeColor="#FFFFFF"
        linkColor="#FFFFFF"
        strokeColor="#FFFFFF"
      /> */}
      <h1 className="achievers-heading">Gallery</h1>
      <p className="achievers-paragraph">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <img
          className="achievers-main-image"
          src="/images/gallery.png"
          alt="Gallery"
        ></img>
        <div className="gallery-card-section">
      {links.map(function(Link, index){
        return <GalleryCard key={index} img={Link.imgUrl} text={Link.description} />
      })}
      </div>
    </div>
  );
}
export default GalleryContent;
