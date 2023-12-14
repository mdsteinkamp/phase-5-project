class FoodstuffSerializer < ActiveModel::Serializer
  attributes :id, :name, :unit, :category
  has_many :pantry_items
end
