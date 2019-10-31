import * as React from "react";
import { useSelector as useMappedState } from "react-redux";
import { IAppState } from "../../store/types";
import "./styles.scss";
import Tags from "./components/Tags";
import RecipeCard from "./components/RecipeCard";

const Dashboard = () => {
  const [search, setSearch] = React.useState("");
  return (
    <div className="container column dashboard">
      <h2 className="title">
        Busca tu receta por categoría
      </h2>
      <Tags />
      <input
        name="text"
        onChange={(e) => setSearch(e.target.value)}
        value={search}
        placeholder="Busca aquí la receta que viste el otro día :)"
      />
      <div className="recipes-grid container">
        <RecipeCard />
      </div>
    </div>
  );
};

export default Dashboard;
