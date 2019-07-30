class FishesController < ApplicationController
  def index
    fishes = Fish.all
    render json: fishes
  end

  def create
    # Create a Fish
    fish = Fish.create(fish_params)
    if fish.valid?
      # Respond with the new fish
      render json: fish
    else
      render json: fish.errors, status: :unprocessable_entity
    end
  end

  def show
    fish = Fish.find(:id)
    render json:fish
  end

  # Handle strong params, so we are secure
  def fish_params
    params.require(:fish).permit(:name, :age, :enjoys, :species)
  end
end
