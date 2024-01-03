class PantryItem < ApplicationRecord
  belongs_to :user
  belongs_to :foodstuff

  # validates :quantity, numericality: { greater_than: 0}

  # validates :foodstuff_id, presence: true
end
