class UsersController < ApplicationController
  skip_before_action :authorize, only: [:index, :create]

  def index
    users = User.all
    render json: users
  end

  def show
    user = @current_user
    if user
      render json: user
    else
      render json: { error: "User not found" }, status: :not_found
    end
  end

  def create 
    user = User.create!(user_params)
    session[:user_id] = user.id
    render json: user, status: :created
  end

  private

  def user_params
    params.permit(:username, :password, :password_confirmation)
  end
end
