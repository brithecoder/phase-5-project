class CreateUserBrands < ActiveRecord::Migration[6.1]
  def change
    create_table :user_brands do |t|
      t.integer :user_id
      t.integer :brand_id

      t.timestamps
    end
  end
end
