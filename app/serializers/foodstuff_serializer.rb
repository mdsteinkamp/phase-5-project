class FoodstuffSerializer < ActiveModel::Serializer
  attributes :id, :name, :unit, :category
end
