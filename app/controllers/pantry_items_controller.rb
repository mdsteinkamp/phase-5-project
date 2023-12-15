class PantryItemsController < ApplicationController

  def index
    pantry_items = PantryItem.all
    render json: pantry_items
  end

  def create
    pantry_item = PantryItem.create!(pantry_item_params)
    render json: pantry_item, status: :created
  end

  def destroy
    pantry_item = @current_user.pantry_items.find_by(id: params[:id])
    if pantry_item
      pantry_item.destroy
      head :no_content
    else render json: { error: "Not authorized to remove this item" }, status: :unauthorized
  end

  private

  def pantry_item_params
    params.permit(:quantity, :user_id, :foodstuff_id)
  end

end
