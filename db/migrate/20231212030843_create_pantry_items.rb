class CreatePantryItems < ActiveRecord::Migration[7.1]
  def change
    create_table :pantry_items do |t|
      t.integer :quantity
      t.integer :user_id
      t.integer :foodstuff_id

      t.timestamps
    end
  end
end
