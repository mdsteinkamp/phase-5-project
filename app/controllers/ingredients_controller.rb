class IngredientsController < ApplicationController
  belongs_to :recipe
  belogns_to :foodstuff
end
