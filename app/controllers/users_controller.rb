class UsersController < ApplicationController
  def index
    user = User.all.order(created_at: :desc)
    render json: user
  end


  def create
    user = User.create!(user_params)
    if user
      render json: user
    else
      render json: user.errors
    end
  end


  def show
    if user
     render json: user
   else
     render json: user.errors
   end
  end


  def destroy
    user&.destroy
    render json: { message: 'User deleted!' }
  end


  private

  def user_params
    params.permit(:username, :email, :password)
  end
end
