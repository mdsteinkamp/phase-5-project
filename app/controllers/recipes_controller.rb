class RecipesController < ApplicationController

  def index
    recipes = Recipe.all
    render json: recipes
  end

  def create
    foodstuff = Foodstuff.create!(foodstuff_params)
    render json: foodstuff, status: :created
  end

  private

  def recipe_params
    params.permit(:name, :instructions)
  end
end