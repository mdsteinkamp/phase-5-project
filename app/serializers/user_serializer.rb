class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :email
  has_many :pantry_items
end
