class RecipesController < ApplicationController

  def index
    recipes = Recipe.all
    render json: recipes, include: ['ingredients.foodstuff']
  end

  def show
    recipe = recipe.find_by(id: params[:id])
    render json: recipe
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