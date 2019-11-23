import * as React from "react";
import { Recipe } from "../../Dashboard/components/RecipeCard/types";
import { NavLink } from "react-router-dom";
import UserIcon from "../../Icons/User";
import HeartIcon from "../../Icons/Heart";
import TimeIcon from "../../Icons/Time";
import Enter from "../../Icons/Enter";
import Button from "../../Common/Button";

interface IRecipeDetailsProps {
  recipe: Recipe;
}

const RecipeDetails = (props: IRecipeDetailsProps) => {
  const { recipe } = props;
  return (
    <div className="container column recipe-page">
      <NavLink to="/" className="row back-link-container" >
        <Enter />
        <p>Volver al dashboard</p>
      </NavLink>
      <img
        src="/assets/cooking.png"
        alt="recipe-pic"
      />
      <h1>{recipe.title}</h1>
      <div className="numbers row">
        <div className="recipe-time row">
          <TimeIcon />
          <p className="recipe-numbers-text">{recipe.time.number}</p>
        </div>
        <div className="recipe-people row">
          <UserIcon width={22.17} height={13.24} />
          <p className="recipe-numbers-text">{recipe.people}</p>
        </div>
        <div className="recipe-likes row">
          <HeartIcon />
          <p className="recipe-numbers-text">{recipe.likes}</p>
        </div>
      </div>
      <section className="recipe-section column">
        <h2>Ingredientes</h2>
        <p>Selecciona los ingredientes que te hagan falta y te los enviaremos a tu casa.</p>
        <div className="ingredients-container">
          { recipe.ingredients.map((ingredient) => {
            return (
              <div className="ingredient row"  key={ingredient.name}>
                <input type="checkbox" className="checkbox" value={ingredient.name} />
                <label>
                  {`${ingredient.quantity.number} ${ingredient.quantity.unit} ${ingredient.quantity.unit.length > 0 ? "de" : ""} ${ingredient.name}`}
                </label>
              </div>
            );
          })}
        </div>
        <Button variant="rounded" >
          Pedir ingredientes
        </Button>
      </section>
      <section className="recipe-section column">
        <h2>Preparación</h2>
        <p>{recipe.instructions}</p>
      </section>
      <section className="recipe-section column" style={{border: "none"}}>
        <h2>Emplatado</h2>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/nYkhg_lD4nE" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"></iframe>
      </section>
    </div>
  );
};

export default RecipeDetails;
