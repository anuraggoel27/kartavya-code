import React from "react";
import { Card } from "react-bootstrap";
function QueryCard(props) {
  return (
    <div className="query-card">
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Text className="achiever-text"><b>Name</b>: {props.name}</Card.Text>
          <Card.Text className="achiever-text">
            <b>Email</b>: {props.email}
            
          </Card.Text>
          <Card.Text className="achiever-text">
            <b>Contact</b>: {props.contact}
            
          </Card.Text>
          <Card.Text className="achiever-text">
            <b>Course</b>: {props.course}
            
          </Card.Text>
          <Card.Text className="achiever-text">
            <b>Date</b>: {props.date}
            
          </Card.Text>
         
        </Card.Body>
      </Card>
    </div>
  );
}
export default QueryCard;
