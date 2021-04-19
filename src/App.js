import "./styles.css";
import Home from "./Home";
import Contact from "./Contact";
import Achievement from "./Achievement";
import TestPage from "./TestPage";
import Courses from "./Courses";
import About from "./About";
import AOS from "aos";
import { Route } from "react-router-dom";
import "aos/dist/aos.css";

AOS.init();
export default function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Home} />
      <Route  path="/Contact" exact component={Contact} />
      <Route exact path="/Achievement" component={Achievement} />
      <Route exact path="/TestPage" component={TestPage} />
      <Route exact path="/Courses" component={Courses} />
      <Route exact path="/About" component={About} />
    </div>
  );
}
