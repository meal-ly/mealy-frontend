import * as React from "react";
import StepDetail from "./StepDetail";
import "../styles.scss";

const HowItWorks = () =>
  <section className="works column container">
    <h2 className="title">¿Cómo funciona?</h2>
    <div className="row step-details">
      <StepDetail
        imgUrl="/assets/dummy2.png"
        title="Selecciona tu receta"
        text="Escoge una de las cientos de recetas que tenemos listas para ti"
      />
      <StepDetail
        imgUrl="/assets/p1.png"
        title="Recibe tus ingredientes"
        text="Te enviamos los ingredientes que necesitas para tu receta"
      />
      <StepDetail
        imgUrl="/assets/p2.png"
        title="Prepara tu receta"
        text="Sigue paso a paso la receta y conviértete en un chef"
      />
      <StepDetail
        imgUrl="/assets/p3.png"
        title="!Disfruta!"
        text="Ya esta todo listo, !Disfruta tu comida!"
      />
    </div>
  </section>;

export default HowItWorks;
