class PantryItemSerializer < ActiveModel::Serializer
  attributes :id, :quantity, :user_id, :foodstuff_id
  belongs_to :foodstuff
end
