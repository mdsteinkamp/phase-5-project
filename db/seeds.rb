puts "seeding..."

Recipe.destroy_all
Foodstuff.destroy_all
Ingredient.destroy_all
PantryItem.destroy_all


bolo = Recipe.create(name: "Bolognese", instructions: "
1. Cook diced onion, carrot, celery in large saucepan until softened. Scrape into bowl.\n
2. In same pan cook ground beef/meat until just barely pink, ~5 minutes.\n
3. Return vegetable mixture to pan, add diced garlic & cook over high heat ~1 minute until fragrant.\n
4. Add wine & cook until mostly evaporated.
5. Stir in tomatoes, chicken stock, thyme, bay leaf, salt & pepper & bring to boil.\n
6. Lower heat to simmer, cover & cook for ~1 hour. Discard bay leaf, stir in heavy cream.\n
7. Meanwhile cook your penne unti al dente, drain and mix into the saue. 
")
marinara = Recipe.create(name: "Marinara Sauce", instructions: "make the SAUCES")
martinez_picadillo = Recipe.create(name: "Martinez Family Picadillo", instructions: "")

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
oregano = Foodstuff.create(name: "Oregano", unit: "Tsp", category: "Spice")
basil = Foodstuff.create(name: "Basil", unit: "Tbsp", category: "Spice")
guajillo_chile_pod = Foodstuff.create(name: "Guajillo Chile Pod (dried)", unit: "Pod", category: "Spice")
california_chile_pod = Foodstuff.create(name: "California Chile Pod (dried)", unit: "Pod", category: "Spice")
arbol_chile_pod = Foodstuff.create(name: "Arbol Chile Pod (dried)", unit: "Pod", category: "Spice")
tomatillo = Foodstuff.create(name: "Tomatillo", unit: "Lb", category: "Fruit")
beef_chuck_roast = Foodstuff.create(name: "Beef Chuck Roast", unit: "Lb", category: "Meat")




puts "loading from xlsx"
xlsx = Roo::Spreadsheet.open('lib/ingredients.xlsx')
xlsx.sheet(0).each_with_index(name: "name", unit: "unit") do |row, row_index|
  next if row_index == 0 || Foodstuff.find_by(name: row[:name]).present?
  Foodstuff.create(
    name: row[:name].gsub(/\d/, "").gsub(/\;/,"").titleize,
    unit: row[:unit], 
    category: "Blank"
  )
end
puts "xlsx load done!"

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

#marinara ingredients
Ingredient.create(quantity: 0.125, recipe_id: marinara.id, foodstuff_id: evoo.id)
Ingredient.create(quantity: 0.5, recipe_id: marinara.id, foodstuff_id: white_onion.id)
Ingredient.create(quantity: 3, recipe_id: marinara.id, foodstuff_id: garlic.id)
Ingredient.create(quantity: 28, recipe_id: marinara.id, foodstuff_id: san_marzano_tomatoes.id)
Ingredient.create(quantity: 0.5, recipe_id: marinara.id, foodstuff_id: oregano.id)
Ingredient.create(quantity: 0.5, recipe_id: marinara.id, foodstuff_id: kosher_salt.id)
Ingredient.create(quantity: 0.25, recipe_id: marinara.id, foodstuff_id: black_pepper.id)
Ingredient.create(quantity: 1, recipe_id: marinara.id, foodstuff_id: basil.id)

#Martinez picadillo ingredients
Ingredient.create(quantity: 10, recipe_id: martinez_picadillo.id, foodstuff_id: guajillo_chile_pod.id)
Ingredient.create(quantity: 5, recipe_id: martinez_picadillo.id, foodstuff_id: california_chile_pod.id)
Ingredient.create(quantity: 2, recipe_id: martinez_picadillo.id, foodstuff_id: white_onion.id)
Ingredient.create(quantity: 10, recipe_id: martinez_picadillo.id, foodstuff_id: garlic.id)
Ingredient.create(quantity: 3, recipe_id: martinez_picadillo.id, foodstuff_id: beef_chuck_roast.id)
Ingredient.create(quantity: 1, recipe_id: martinez_picadillo.id, foodstuff_id: tomatillo.id)


puts "👩‍🍳👨‍🍳 it's COOKIN' TIME 👩‍🍳👨‍🍳"