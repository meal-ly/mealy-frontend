import * as React from "react";
import { useSelector as useMappedState } from "react-redux";
import { IAppState } from "../../store/types";
import "./styles.scss";
import Tags from "./components/Tags";

const Dashboard = () => {
  return (
    <div className="container column dashboard">
      <h2 className="title">
        Busca tu receta por categoría
      </h2>
      <Tags />
    </div>
  );
};

export default Dashboard;
