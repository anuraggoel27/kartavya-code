import React from "react";
import Particles from "react-particles-js";
function Particle(props) {
  return (
    <div className="particles-js">
      <Particles
        params={{
          particles: {
            number: {
              value: 50
            },
            color: {
              value: props.shapeColor
            },
            shape: {
              type: "circle",
              stroke: { width: 0, color: props.stokeColor },
              polygon: { nb_sides: 5 },
              image: { src: "img/github.svg", width: 100, height: 100 }
            },
            opacity: {
              value: 1,
              random: false,
              anim: { enable: true, speed: 1, opacity_min: 0.1, sync: false }
            },
            size: {
              value: 3,
              random: true,
              anim: { enable:false, speed: 40, size_min: 0.1, sync: false }
            },
            line_linked: {
              enable: true,
              distance: 150,
              color: props.lineColor,
              opacity: 0.4,
              width: 1
            },
            move: {
              enable: true,
              speed: 1,
              direction: "none",
              random: false,
              straight: false,
              out_mode: "out",
              bounce: false,
              attract: { enable: false, rotateX: 600, rotateY: 1200 }
            }
          },
          interactivity: {
            events: {
              onhover: {
                enable: true,
                mode: "grab"
              }
            }
          }
        }}
      />
    </div>
  );
}
export default Particle;
