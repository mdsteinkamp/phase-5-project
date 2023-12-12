class IngredientSerializer < ActiveModel::Serializer
  attributes :id, :quantity, :recipe_id, :foodstuff_id
end
