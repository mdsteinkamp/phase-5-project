class TypeToCategoryInFoodstuffs < ActiveRecord::Migration[7.1]
  def change
    rename_column :foodstuffs, :type, :category
  end
end
