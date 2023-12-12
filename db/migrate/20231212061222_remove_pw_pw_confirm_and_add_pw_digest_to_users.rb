class RemovePwPwConfirmAndAddPwDigestToUsers < ActiveRecord::Migration[7.1]
  def change
    remove_column :users, :password
    remove_column :users, :password_confirmation
    add_column :users, :password_digest, :string
  end
end
