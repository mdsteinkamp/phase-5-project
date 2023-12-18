class RecipesController < ApplicationController

  def index
    recipes = Recipe.all
    render json: recipes
  end

  def create
    recipe = Recipe.create!(recipe_params)
    render json: recipe, status: :created
  end

  private

  def recipe_params
    params.permit(:name, :instructions)
  end
end