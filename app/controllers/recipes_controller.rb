class RecipesController < ApplicationController

  def index
    recipes = Recipe.all
    render json: recipes, include: ['ingredients.foodstuff']
  end

  def show
    recipe = Recipe.find_by(id: params[:id])
    render json: recipe,  include: ['ingredients.foodstuff']
  end

  def create
    recipe = Recipe.create!(recipe_params)
    # binding.break
    # recipe.ingredients.create!(ingredient_params)
    # recipe_params[:ingredients_attributes].each do |ingredient|
    #   # binding.break
    #   recipe.ingredients.create!(ingredient)
    # end
    render json: recipe, include: ["ingredients"], status: :created
  end

  private

  def recipe_params
    params.permit(:name, :instructions, ingredients_attributes:[:quantity, :foodstuff_id])
  end

end