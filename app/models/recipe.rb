class Recipe < ApplicationRecord
  has_many :ingredients
  has_many :foodstuffs, through: :ingredients

  validates :name, presence: true
end
