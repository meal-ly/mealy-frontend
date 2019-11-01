export interface Recipe {
  id: string;
  title: string;
  imgUrl: string;
  time: string;
  people: number;
  likes: number;
}

export interface IRecipeProps {
  recipe: Recipe;
}
