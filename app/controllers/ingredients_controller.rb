class IngredientsController < ApplicationController

  def index
    ingredients = Ingredient.all
    render json: ingredients
  end

  def show
    if params[:recipe_id]
      recipe = Recipe.find_by(id: params[:recipe_id])
      ingredient = recipe.ingredients.find_by(id: params[:id])
    else
      ingredient = Ingredient.find_by(id: params[:id])
    end
    if ingredient
      render json: ingredient
    else
      render json: { errors: ["Ingredient not found"] }, status: :not_found
    end
  end

  def create
    ingredient = Ingredient.create!(ingredient_params)
    render json: ingredient, status: :created
  end
  
  private

  def ingredient_params
    params.permit(:quantity, :recipe_id, :foodstuff_id)
  end


end
