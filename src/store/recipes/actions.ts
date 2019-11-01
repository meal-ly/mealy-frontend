import actionCreatorFactory from "typescript-fsa";
import { asyncFactory } from "typescript-fsa-redux-thunk";
import { IAppState } from "../types";
import { Recipe } from "../../components/Dashboard/components/RecipeCard/types";

const createAction = actionCreatorFactory("RECIPES");
const createAsyncAction = asyncFactory<IAppState>(createAction);

const fakeRecipes = [
  {
    id: "1",
    title: "Bocados de tostadas Gourmet",
    imgUrl: "/assets/recipe.jpg",
    likes: 3,
    people: 4,
    time: "30 min",
  },
  {
    id: "2",
    title: "Bocados de tostadas Gourmet",
    imgUrl: "/assets/recipe.jpg",
    likes: 3,
    people: 4,
    time: "30 min",
  },
  {
    id: "2",
    title: "Bocados de tostadas Gourmet",
    imgUrl: "/assets/recipe.jpg",
    likes: 3,
    people: 4,
    time: "30 min",
  },
  {
    id: "4",
    title: "Bocados de tostadas Gourmet",
    imgUrl: "/assets/recipe.jpg",
    likes: 3,
    people: 4,
    time: "30 min",
  },
  {
    id: "5",
    title: "Bocados de tostadas Gourmet",
    imgUrl: "/assets/recipe.jpg",
    likes: 3,
    people: 4,
    time: "30 min",
  },
  {
    id: "6",
    title: "Bocados de tostadas Gourmet",
    imgUrl: "/assets/recipe.jpg",
    likes: 3,
    people: 4,
    time: "30 min",
  },
];

export const fetchRecipes = createAsyncAction<void, Recipe[], Error>(
  "FETCH_PROFILE",
  async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return fakeRecipes;
});
