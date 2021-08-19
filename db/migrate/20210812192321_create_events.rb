class CreateEvents < ActiveRecord::Migration[6.1]
  def change
    create_table :events do |t|
      t.string :name
      t.text :image_url
      t.datetime :date
      t.integer :likes
      t.integer :joins
      t.timestamps
    end
  end
end
