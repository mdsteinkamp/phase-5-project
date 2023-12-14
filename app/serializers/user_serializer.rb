class UserSerializer < ActiveModel::Serializer
  attributes :id, :username
  has_many :pantry_items
end
