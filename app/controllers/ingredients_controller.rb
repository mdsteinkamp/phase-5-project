class IngredientsController < ApplicationController
  belongs_to :recipe
  belongs_to :foodstuff
end
