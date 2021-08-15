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
                src="/images/ImageCarousel/image1.jpeg"
                alt="First slide"
              />
              {/* <Carousel.Caption>
                <h3>First slide label</h3>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Carousel.Caption> */}
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="carousel-image d-block w-100"
                src="/images/ImageCarousel/image2.jpeg"
                alt="Second slide"
              />

              {/* <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption> */}
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="carousel-image d-block w-100"
                src="/images/ImageCarousel/image3.jpeg"
                alt="Third slide"
              />

              {/* <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
                </p>
              </Carousel.Caption> */}
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="carousel-image d-block w-100"
                src="/images/ImageCarousel/image4.jpeg"
                alt="Third slide"
              />

              {/* <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
                </p>
              </Carousel.Caption> */}
            </Carousel.Item>
          </Carousel>
        </div>
    );
}
export default ImageCarousel;