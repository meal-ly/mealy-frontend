import * as React from "react";
import About from "./components/About";
import HowItWorks from "./components/HowItWorks";
import Plans from "./components/Plans";
import "./styles.scss";

const Home = () => {
  return (
    <div>
      <About />
      <HowItWorks />
      <Plans />
    </div>
  );
};

export default Home;
