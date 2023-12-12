class FoodstuffSerializer < ActiveModel::Serializer
  attributes :id, :name, :unit, :type
end
