import * as React from "react";
import Typing from "./Typing";
import Button from "../../Common/Button/";

const About = () =>
  <section className="about row container">
    <div className="box"></div>
    <div className="about-info">
      <h1 className="title-big">
        Mealy es tu&nbsp;
        <span className="animated">
          <Typing />
        </span>
      </h1>
      <p className="text-medium about-text">
        Las mejores recetas, los mejores ingredientes, en la puerta de tu casa.
      </p>
      <Button variant="classic">
        ¡Empieza Ahora!
      </Button>
    </div>
    <img
      src="/assets/dummy1.png"
      alt="about"
      width="348"
    />
  </section>;

export default About;
