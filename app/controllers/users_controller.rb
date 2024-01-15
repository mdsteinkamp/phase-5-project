class UsersController < ApplicationController
  skip_before_action :authorize, only: [:index, :create]

  def index
    users = User.all
    render json: users, include: ['pantry_items', 'pantry_items.foodstuff']
  end

  def show
    user = @current_user
    if user
      render json: user, include: ['pantry_items', 'pantry_items.foodstuff']
    else
      render json: { error: "User not found" }, status: :not_found
    end
  end

  def create 
    @user = User.new(user_params)
    if @user.save!
      session[:user_id] = @user.id
      UserMailer.with(user: @user).welcome_email.deliver_now!
      render json: @user, status: :created
    end
  end

  private

  def user_params
    params.permit(:username, :email, :password, :password_confirmation)
  end
end
