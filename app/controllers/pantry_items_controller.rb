class PantryItemsController < ApplicationController
  belongs_to :user
  belongs_to :foodstuff
end
