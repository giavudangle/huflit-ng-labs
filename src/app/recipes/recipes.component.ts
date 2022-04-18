import { RecipeService } from './../services/recipe.service';
import { Recipe } from './recipes.model';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
})
export class RecipesComponent implements OnInit {
  constructor(private recipeService: RecipeService) {}
  selectedRecipe: Recipe;
  ngOnInit(): void {
    this.recipeService.recipeSelected.subscribe((recipe: Recipe) => {
      this.selectedRecipe = recipe;
    });
  }
}
