class CreateBrands < ActiveRecord::Migration[6.1]
  def change
    create_table :brands do |t|
      t.string :name
      t.string :bio
      t.text :image_url
      t.string :city
      t.string :state
      t.boolean :yelp
      t.integer :likes

      t.timestamps
    end
  end
end
