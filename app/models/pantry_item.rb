class PantryItem < ApplicationRecord
  belongs_to :user
  belongs_to :foodstuff, optional: true

  validates :quantity, presence: true

  validates :foodstuff_id, presence: true
end
