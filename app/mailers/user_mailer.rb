class UserMailer < ApplicationMailer

  def welcome_email
    # binding.break
    @user = params[:user]
    mail(to: @user.email, subject: "Welcome to Pantron 5000!")
  end
end
