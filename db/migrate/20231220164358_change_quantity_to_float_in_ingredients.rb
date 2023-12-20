class ChangeQuantityToFloatInIngredients < ActiveRecord::Migration[7.1]
  def change
    change_column :ingredients, :quantity, :float
  end
end
