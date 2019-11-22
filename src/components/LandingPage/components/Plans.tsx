import * as React from "react";
import PlanCard from "./PlanCards";

const Plans = () =>
  <section className="plans column">
    <h2 className="title">Nuestros planes</h2>
    <div className="row plan-cards">
      <PlanCard
        imgUrl="/assets/gratis.png"
        title="Gratis siempre"
        text="Puedes ver algunas de nuestras recetas"
      />
      <PlanCard
        imgUrl="/assets/premium.png"
        title="Premium - $10 / mes"
        text="Disfruta todas las recetas y envíos gratis de todos tus ingredientes"
      />
    </div>
  </section>;

export default Plans;
