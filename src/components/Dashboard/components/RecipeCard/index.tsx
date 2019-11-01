import * as React from "react";
import UserIcon from "../../../Icons/User";
import HeartIcon from "../../../Icons/Heart";
import "./styles.scss";
import { IRecipeProps } from "./types";

const RecipeCard = (props: IRecipeProps) => {
  const { recipe } = props;
  return (
    <div className="recipe-card">
      <img
        src={recipe.imgUrl}
        alt="recipe-image"
      />
      <div className="recipe-details column">
        <h3>{recipe.title}</h3>
        <div className="recipe-details-info row">
          <div className="recipe-time row">
            <HeartIcon />
            <p className="recipe-card-text">{recipe.time}</p>
          </div>
          <div className="recipe-people row">
            <UserIcon width={12.17} height={13.24} />
            <p className="recipe-card-text">{recipe.people}</p>
          </div>
          <div className="recipe-likes row">
            <HeartIcon />
            <p className="recipe-card-text">{recipe.likes}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
