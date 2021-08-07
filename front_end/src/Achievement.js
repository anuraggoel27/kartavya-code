import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AchievementContent from "./components/Achievement";
import { Row, Col } from "react-bootstrap";
function Achievement() {
  return (
    <div>
      <Header />
      <AchievementContent />
      <Footer className="achievement-footer" />
    </div>
  );
}
export default Achievement;
