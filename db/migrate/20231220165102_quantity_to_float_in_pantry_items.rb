class QuantityToFloatInPantryItems < ActiveRecord::Migration[7.1]
  def change
    change_column :pantry_items, :quantity, :float
  end
end
