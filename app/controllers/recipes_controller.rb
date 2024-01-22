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
    ingredient_params['ingredients'].each do |ingredient|
      # binding.break
      recipe.ingredients.create!(quantity: ingredient[:quantity], foodstuff_id: ingredient[:foodstuff_id], recipe_id: recipe.id)
    end
    render json: recipe, include: ["ingredients"], status: :created
  end

  private

  def recipe_params
    params.permit(:name, :instructions)
  end

  def ingredient_params
    params.permit(:ingredients => [:quantity, :foodstuff_id])
  end
end