import { ShoppingListService } from 'src/app/services/shopping-list.service';
import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from '../recipes/recipes.model';
import { Ingredient } from '../shared/ingredient.model';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is simply a test 1',
      'https://assets.bonappetit.com/photos/5c2f8fe26558e92c8a622671/1:1/w_2700,h_2700,c_limit/bolognese-1.jpg',
      [new Ingredient('Meat', 1), new Ingredient('FrenchFries', 20)]
    ),
    new Recipe(
      'A Test Recipe',
      'This is simply a test 2',
      'https://assets.bonappetit.com/photos/5c2f8fe26558e92c8a622671/1:1/w_2700,h_2700,c_limit/bolognese-1.jpg',
      [new Ingredient('Meat', 1), new Ingredient('FrenchFries', 20)]
    ),
    new Recipe(
      'A Test Recipe',
      'This is simply a test 3',
      'https://assets.bonappetit.com/photos/5c2f8fe26558e92c8a622671/1:1/w_2700,h_2700,c_limit/bolognese-1.jpg',
      [new Ingredient('Meat', 1), new Ingredient('FrenchFries', 20)]
    ),
  ];

  getRecipe(index: number) {
    return this.recipes[index];
  }
  getRecipes() {
    return this.recipes;
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }
  constructor(private shoppingListService: ShoppingListService) {}
}
