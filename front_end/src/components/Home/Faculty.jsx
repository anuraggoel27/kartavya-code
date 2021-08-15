import React from "react";
import {  Card, Form, Col } from "react-bootstrap";
function Faculty(){
    return (
        <div className="Faculty">
        <h1 className="faculty-heading">Faculty</h1>
        <Card className="card1 faculty-card" style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            
            src="/images/Faculty/anuj.jpeg"
          />
          <Card.Body>
            <Card.Title>Anuj Goel</Card.Title>
            <Card.Text className="card-desc">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>

        <Card className="card2 faculty-card" style={{ width: "18rem" }}>
          <Card.Img
            
            variant="top"
            src="/images/Faculty/atul.jpeg"
          />
          <Card.Body>
            <Card.Title>Atul Kumar Pandey</Card.Title>
            <Card.Text className="card-desc">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="card3 faculty-card" style={{ width: "18rem" }}>
          <Card.Img
            
            variant="top"
            src="/images/Faculty/Faculty-3.jpeg"
          />
          <Card.Body>
            <Card.Title>Raj Maurya</Card.Title>
            <Card.Text className="card-desc">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    );
}
export default Faculty;