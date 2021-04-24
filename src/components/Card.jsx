import React from "react";
import Achievers from "../Acheivers";
import { Card } from "react-bootstrap";
function AchieverCard(props) {
  return (
    <div className="achievers-card">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={props.img} className="achiever-image"/>
        <Card.Body>
          <Card.Title className="achiever-title">{props.name}</Card.Title>
          <Card.Text className="achiever-text">
            {props.text}
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}
export default AchieverCard;
