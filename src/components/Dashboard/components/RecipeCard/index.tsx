import * as React from "react";
import UserIcon from "../../../Icons/User";
import HeartIcon from "../../../Icons/Heart";
import "./styles.scss";

const RecipeCard = () => {
  return (
    <div className="recipe-card">
      <img
        src="/assets/recipe.jpg"
        alt="recipe-image"
      />
      <div className="recipe-details column">
        <h3>Bocados de tostadas Gourmet</h3>
        <div className="recipe-details-info row">
          <div className="recipe-time row">
            <HeartIcon />
            <p className="recipe-card-text">30 min</p>
          </div>
          <div className="recipe-people row">
            <UserIcon width={12.17} height={13.24} />
            <p className="recipe-card-text">4</p>
          </div>
          <div className="recipe-likes row">
            <HeartIcon />
            <p className="recipe-card-text">126</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
