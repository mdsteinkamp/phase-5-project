class RecipesController < ApplicationController

  def index
    recipes = Recipe.all.order(:name)
    render json: recipes, include: ['ingredients.foodstuff']
  end

  def show
    recipe = Recipe.find_by(id: params[:id])
    render json: recipe,  include: ['ingredients.foodstuff']
  end

  def create
    recipe = Recipe.create!(recipe_params)
    render json: recipe, include: ["ingredients.foodstuff"], status: :created
  end

  private

  def recipe_params
    params.permit(:name, :instructions, ingredients_attributes:[:quantity, :foodstuff_id])
  end

end