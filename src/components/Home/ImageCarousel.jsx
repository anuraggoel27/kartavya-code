import React from "react";
import { Carousel, Card, Form, Col } from "react-bootstrap";
import { Button } from "@material-ui/core";
function ImageCarousel(){
    return (
        <div className="Carousel">
          <Carousel>
            <Carousel.Item>
              <img
                className="carousel-image d-block w-100"
                src="https://2firkl1qsbue2ashgy21ze4i-wpengine.netdna-ssl.com/wp-content/uploads/coaching_employees1200x600-848x400.png"
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="carousel-image d-block w-100"
                src="https://d19d5sz0wkl0lu.cloudfront.net/dims4/default/89f2f93/2147483647/resize/800x%3E/quality/90/?url=https%3A%2F%2Fatd-brightspot.s3.amazonaws.com%2F46%2F1b%2F138879e2481e9261724d2200bbc7%2Fadobestock-74990328.jpeg"
                alt="Second slide"
              />

              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="carousel-image d-block w-100"
                src="https://media.istockphoto.com/photos/coaching-in-business-concept-picture-id1029723898?k=6&m=1029723898&s=612x612&w=0&h=1_MOmEA0zhvZ2nP5dvnuAGAxQYfMbw6nGjw31hoSq88="
                alt="Third slide"
              />

              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
    );
}
export default ImageCarousel;