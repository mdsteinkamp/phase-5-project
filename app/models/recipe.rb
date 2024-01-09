class Recipe < ApplicationRecord
  has_many :ingredients, dependent: :destroy
  has_many :foodstuffs, through: :ingredients

  validates :name, presence: true
  validates :instructions, presence: true
end
