import * as React from "react";
import { useComponentState } from "./hooks";
import "./styles.scss";
import Loading from "../Common/Loading";

const Recipe = (props: any) => {
  const recipeId = props.match.params.recipeId;

  const { fetchRecipe, isLoadingRecipe, recipe } = useComponentState();

  React.useEffect(() => {
    fetchRecipe(recipeId);
    }, [recipeId],
  );

  return (
    <div className="container column recipe">
      {isLoadingRecipe &&
        <Loading />
      }
      {!isLoadingRecipe && recipe &&
        <div>
          Recipe Details
        </div>
      }
    </div>
  );
};

export default Recipe;
