import React from "react";
import links from "./galleryPhotosLink";
import { Card } from "react-bootstrap";
function GalleryCard(props) {
  return (
    <div className="gallery-card">
      <Card >
        <Card.Img variant="top" src={props.img} className="gallery-image"/>
        <Card.Body className="gallery-card-body">
          <Card.Text className="gallery-text overlay">
            {props.text}
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}
export default GalleryCard;
