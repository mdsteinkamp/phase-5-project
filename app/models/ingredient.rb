class Ingredient < ApplicationRecord
  belongs_to :recipe
  belongs_to :foodstuff

  validates :quantity, presence: true
end
