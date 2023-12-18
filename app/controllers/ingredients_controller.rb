class IngredientsController < ApplicationController

  def index
    ingredients = Ingredient.all
    render json: ingredients
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
