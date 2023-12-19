class IngredientSerializer < ActiveModel::Serializer
  attributes :id, :quantity
  belongs_to :recipe
  belongs_to :foodstuff
end
