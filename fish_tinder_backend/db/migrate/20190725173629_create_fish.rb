class CreateFish < ActiveRecord::Migration[5.2]
  def change
    create_table :fish do |t|
      t.string :name
      t.integer :age
      t.text :enjoys
      t.text :species

      t.timestamps
    end
  end
end
