import * as React from "react";
import { useComponentState } from "./hooks";
import "./styles.scss";
import Tags from "./components/Tags";
import RecipeCard from "./components/RecipeCard";

const Dashboard = () => {
  const [search, setSearch] = React.useState("");
  const { fetchRecipes, isLoadingRecipes, recipes } = useComponentState();

  React.useEffect(() => {
    fetchRecipes();
  }, [recipes],
  );

  if (isLoadingRecipes) {
    return <div>Loading...</div>;
  }

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
        {recipes && recipes.map((recipe) =>
          <RecipeCard recipe={recipe} />,
        )}
      </div>
    </div>
  );
};

export default Dashboard;
