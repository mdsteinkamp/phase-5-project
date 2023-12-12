class CreateIngredients < ActiveRecord::Migration[7.1]
  def change
    create_table :ingredients do |t|
      t.integer :quantity
      t.integer :recipe_id
      t.integer :foodstuff_id

      t.timestamps
    end
  end
end
