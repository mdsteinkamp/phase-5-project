class IngredientsController < ApplicationController

  def index
    ingredients = Ingredient.all
    render json: ingredients
  end

  def show
    ingredient = Ingredient.find_by(id: params[:id])
    if ingredient
      render json: ingredient
    else
      render json: { errors: ["Ingredient not found"] }, status: :not_found
    end
  end

  def create
    # binding.break
    # params.each do |ingred|
      ingredient = Ingredient.create!(ingredient_params)
      render json: ingredient, status: :created
    # end
  end
  
  private

  def ingredient_params
    params.require(:_json).map do |param|
      param.permit(:quantity, :recipe_id, :foodstuff_id)
    end
  end


end
