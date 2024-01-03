class PantryItem < ApplicationRecord
  belongs_to :user
  belongs_to :foodstuff

  validates :quantity, presence: true

  # validates :foodstuff_id, presence: true
end
