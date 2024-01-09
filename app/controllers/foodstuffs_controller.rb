class FoodstuffsController < ApplicationController
  skip_before_action :authorize, only: :index

  def index
    foodstuffs = Foodstuff.all
    render json: foodstuffs
  end
  
  def create
    foodstuff = Foodstuff.create!(foodstuff_params)
    render json: foodstuff, status: :created
  end

  private

  def foodstuff_params
    params.permit(:name, :unit, :category)
  end

end
