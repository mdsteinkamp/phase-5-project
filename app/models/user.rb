class User < ApplicationRecord
  has_secure_password
  has_many :pantry_items
  has_many :foodstuffs, through: :pantry_items

end
