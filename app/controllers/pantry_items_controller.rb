class PantryItemsController < ApplicationController

  def index
    pantry_items = PantryItem.all
    render json: pantry_items
  end

  def create
    pantry_item = PantryItem.create!(pantry_item_params)
    render json: pantry_item, status: :created
  end

  private

  def pantry_item_params
    params.permit(:name, :unit, :quantity, :category)
  end

end
