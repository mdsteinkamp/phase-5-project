class PantryItem < ApplicationRecord
  belongs_to :user
  belongs_to :foodstuff
end
