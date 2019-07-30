class Fish < ApplicationRecord
  validates :name, :age, :enjoys, :species, presence: true
  validates :enjoys, length: { minimum: 5, too_short: "Please tell us more!" }
end
