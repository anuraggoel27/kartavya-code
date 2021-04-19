import React from "react";
import Achievers from "../Acheivers";
import { Card } from "react-bootstrap";
function AchieverCard(props) {
  return (
    <div className="achievers-card">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={props.img} />
        <Card.Body>
          <Card.Title>{props.name}</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}
export default AchieverCard;
