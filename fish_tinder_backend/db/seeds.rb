# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

fish_attributes = [
  {
    name: "Mr. Krabs",
    age: 47,
    enjoys: "$$$",
    species: "🦀"
  },
  {
    name: "Dory",
    age: 27,
    enjoys: "I can't remember...",
    species: "🐠"
  }
]

fish_attributes.each do |attributes|
  Fish.create(attributes)
end
