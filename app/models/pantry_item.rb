class PantryItem < ApplicationRecord
  belongs_to :user
  belongs_to :foodstuff, optional: true

  validates :quantity, presence: true

  validates :foodstuff_id, :presence => { message: "Please select an item from the dropdown list"}

  HUMANIZED_ATTRIBUTES = {
    :foodstuff_id => ""
  }

  def self.human_attribute_name(attr, options={})
    HUMANIZED_ATTRIBUTES[attr.to_sym] || super
  end

end
