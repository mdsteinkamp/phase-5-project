class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :password, :password_confirmation
  has_many :pantry_items
end
