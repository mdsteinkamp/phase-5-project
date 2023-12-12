class Recipe < ApplicationRecord
  has_many :ingredients
  has_many :foodstuffs, through: :ingredients
end
