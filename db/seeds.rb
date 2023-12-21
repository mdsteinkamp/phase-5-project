puts "seeding..."

Recipe.destroy_all
Foodstuff.destroy_all
Ingredient.destroy_all
PantryItem.destroy_all


bolo = Recipe.create(name: "Bolognese", instructions: "do this then this then this etc")
taco_salad = Recipe.create(name: "Taco Salad", instructions: "do this then this then this etc")

evoo = Foodstuff.create(name: "Extra Virgin Olive Oil", unit: "Cup", category: "Cooking Liquid")
white_onion = Foodstuff.create(name: "White Onion", unit: "Item", category: "Vegetable")
carrot = Foodstuff.create(name: "Carrot", unit: "Item", category: "Vegetable")
celery = Foodstuff.create(name: "Celery", unit: "item", category: "Vegetable")
garlic = Foodstuff.create(name: "Garlic", unit: "Clove", category: "Vegetable")
ground_beef = Foodstuff.create(name: "Ground Beef", unit: "Lb", category: "Meat")
white_wine = Foodstuff.create(name: "White Wine", unit: "Cup", category: "Alcohol")
san_marzano_tomatoes = Foodstuff.create(name: "San Marzano Tomatoes", unit: "Ounce", category: "Fruit")
chicken_stock = Foodstuff.create(name: "Chicken Stock", unit: "Cup", category: "Cooking Liquid")
thyme = Foodstuff.create(name: "Thyme", unit: "Tsp", category: "Spice")
bay_leaf = Foodstuff.create(name: "Bay Leaf", unit: "Item", category: "Spice")
kosher_salt = Foodstuff.create(name: "Kosher Salt", unit: "Tbsp", category: "Spice")
black_pepper = Foodstuff.create(name: "Black Pepper", unit: "Tbsp", category: "Spice")
white_pepper = Foodstuff.create(name: "White Pepper", unit: "Tbsp", category: "Spice")
heavy_cream = Foodstuff.create(name: "Heavy Cream", unit: "Cup", category: "Cooking Liquid")
penne = Foodstuff.create(name: "Penne", unit: "Lb", category: "Grain")
parmesan_cheese = Foodstuff.create(name: "Parmesan Cheese", unit: "Grated", category: "Cheese")

# bolonese ingredients
Ingredient.create(quantity: 0.25, recipe_id: bolo.id, foodstuff_id: evoo.id)
Ingredient.create(quantity: 1, recipe_id: bolo.id, foodstuff_id: white_onion.id)
Ingredient.create(quantity: 1, recipe_id: bolo.id, foodstuff_id: carrot.id)
Ingredient.create(quantity: 1, recipe_id: bolo.id, foodstuff_id: celery.id)
Ingredient.create(quantity: 2, recipe_id: bolo.id, foodstuff_id: ground_beef.id)
Ingredient.create(quantity: 5, recipe_id: bolo.id, foodstuff_id: garlic.id)
Ingredient.create(quantity: 0.75, recipe_id: bolo.id, foodstuff_id: white_wine.id)
Ingredient.create(quantity: 28, recipe_id: bolo.id, foodstuff_id: san_marzano_tomatoes.id)
Ingredient.create(quantity: 1, recipe_id: bolo.id, foodstuff_id: chicken_stock.id)
Ingredient.create(quantity: 0.5, recipe_id: bolo.id, foodstuff_id: thyme.id)
Ingredient.create(quantity: 1, recipe_id: bolo.id, foodstuff_id: bay_leaf.id)
Ingredient.create(quantity: 2, recipe_id: bolo.id, foodstuff_id: kosher_salt.id)
Ingredient.create(quantity: 1, recipe_id: bolo.id, foodstuff_id: black_pepper.id)
Ingredient.create(quantity: 0.25, recipe_id: bolo.id, foodstuff_id: heavy_cream.id)
Ingredient.create(quantity: 2, recipe_id: bolo.id, foodstuff_id: penne.id)
Ingredient.create(quantity: 25, recipe_id: bolo.id, foodstuff_id: parmesan_cheese.id)

puts "👩‍🍳👨‍🍳 it's COOKIN' TIME 👩‍🍳👨‍🍳"