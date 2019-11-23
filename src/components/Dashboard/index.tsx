import * as React from "react";
import { useComponentState } from "./hooks";
import "./styles.scss";
import Tags from "./components/Tags";
import RecipeCard from "./components/RecipeCard";
import Loading from "../Common/Loading";

const Dashboard = () => {
  const [search, setSearch] = React.useState("");
  const { fetchRecipes, isLoadingRecipes, recipes, tag } = useComponentState();

  React.useEffect(() => {
    fetchRecipes();
  }, [],
  );

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
      {isLoadingRecipes &&
        <div className="container row loading-container">
          <Loading />
        </div>
        }
      <div key={tag} className="recipes-grid container">
        {!isLoadingRecipes && recipes &&
          recipes.map((recipe) =>
            <RecipeCard recipe={recipe} key={recipe._id} />,
        )}
      </div>
    </div>
  );
};

export default Dashboard;
