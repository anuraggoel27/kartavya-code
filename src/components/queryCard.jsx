import React from "react";
import { Card } from "react-bootstrap";
function QueryCard(props) {
  return (
    <div className="achievers-card">
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Text className="achiever-title">Name: {props.name}</Card.Text>
          <Card.Text className="achiever-text">
            Email: {props.email}
            
          </Card.Text>
          <Card.Text className="achiever-text">
            Contact:{props.contact}
            
          </Card.Text>
          <Card.Text className="achiever-text">
            Course: {props.course}
            
          </Card.Text>
         
        </Card.Body>
      </Card>
    </div>
  );
}
export default QueryCard;
