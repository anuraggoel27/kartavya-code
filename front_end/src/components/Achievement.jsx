import React from "react";
import Particle from "./Particle";
import AchieverCard from "./Card";
import Achievers from "../Acheivers";
function AchievementContent() {
  return (
    <div className="achievement">
      {/* <Particle
        shapeColor="#FFFFFF"
        linkColor="#FFFFFF"
        strokeColor="#FFFFFF"
      /> */}
      <h1 className="achievers-heading">Our Achievers</h1>
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
          src="/KartavyaAcademy/images/man.png"
          alt="University"
        ></img>
        <div className="achievers-card-section">
      {Achievers.map(Achiever=>{
        return <AchieverCard name={Achiever.Name} img={Achiever.imgUrl} text={Achiever.about} />
      })}
      </div>
    </div>
  );
}
export default AchievementContent;
