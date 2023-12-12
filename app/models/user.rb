class User < ApplicationRecord
  has_secure_password
  validates :username, presence: true, uniqueness: true
  has_many :pantry_items
  has_many :foodstuffs, through: :pantry_items
end
