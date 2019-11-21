import { Tags } from "../../types";

export interface Ingredients {
  name: string;
  quantity: {
    number: number,
    unit: string,
  };
  price: number;
}

export interface Recipe {
  _id: string;
  title: string;
  imgUrl: string;
  description: string;
  instructions: string;
  tag: Tags;
  time: {
    number: number,
    unit: string,
  };
  people: number;
  likes: number;
  ingredients: Ingredients[];
}

export interface IRecipeProps {
  recipe: Recipe;
}
