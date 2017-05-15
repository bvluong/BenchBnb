# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Bench.destroy_all

Bench.create(description:"Bench1", lat:37.790892 ,lng:-122.424605 )
Bench.create(description:"Bench2", lat:37.78 ,lng:-122.41 )
Bench.create(description:"Bench3", lat:37.787729 ,lng:-122.423316 )
