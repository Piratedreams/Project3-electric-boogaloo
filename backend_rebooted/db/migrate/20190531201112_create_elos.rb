class CreateElos < ActiveRecord::Migration[5.2]
  def change
    create_table :elos do |t|
      t.string :rank
      t.number :division

      t.timestamps
    end
  end
end
