import {
  CategoriesAPIResponseSchema,
  DrinksAPIResponseSchema,
  RecipeAPIResponseSchema,
} from "../utils/recipes-schema";
import { Drink, SearchFilter } from "../types";
import api from "../lib/axios";

export async function getCategories() {
  const url = "/list.php?c=list";  
  const { data: data } = await api(url);  
  const result = CategoriesAPIResponseSchema.safeParse(data);
  if (result.success) {
    return result.data;
  }
}

export async function getRecipes(searchFilter: SearchFilter) {
  const url = `/filter.php?c=${searchFilter.category}&i=${searchFilter.ingredient}`;
  const { data } = await api(url);
  const result = DrinksAPIResponseSchema.safeParse(data);
  if (result.success) {
    return result.data;
  }
}

export async function getRecipeById(id: Drink["idDrink"]) {
  const url = `/lookup.php?i=${id}`;
  const { data } = await api(url);
  const result = RecipeAPIResponseSchema.safeParse(data.drinks[0]);
  if (result.success) {
    return result.data;
  }
}
