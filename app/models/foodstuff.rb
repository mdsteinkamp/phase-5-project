class Foodstuff < ApplicationRecord
  has_many :pantry_items
  has_many :users, through: :pantry_items
  validates :name, :unit, :category, presence: true
  validates :name, uniqueness: true
end
