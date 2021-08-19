class CreateBrandEvents < ActiveRecord::Migration[6.1]
  def change
    create_table :brand_events do |t|
      t.integer :brand_id
      t.integer :event_id
      t.timestamps
    end
  end
end
