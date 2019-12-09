class ReviewsController < ApplicationController
  def index
    review = Review.all.order(created_at: :desc)
    render json: review
  end


  def create
    review = Review.create!(review_params)
    if review
      render json: review
    else
      render json: review.errors
    end
  end


  def show
    if review
     render json: review
   else
     render json: review.errors
   end
  end


  def destroy
    review&.destroy
    render json: { message: 'Review deleted!' }
  end


  private

  def review_params
    params.permit(:title, :body, :rating, :recommend)
  end
end
