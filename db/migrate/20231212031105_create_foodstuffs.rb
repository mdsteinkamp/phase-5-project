class CreateFoodstuffs < ActiveRecord::Migration[7.1]
  def change
    create_table :foodstuffs do |t|
      t.string :name
      t.string :unit
      t.string :type

      t.timestamps
    end
  end
end
