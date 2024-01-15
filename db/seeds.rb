puts "seeding..."

Recipe.destroy_all
Foodstuff.destroy_all
Ingredient.destroy_all
PantryItem.destroy_all


bolo = Recipe.create(name: "Bolognese", instructions: "
  1. Cook diced onion, carrot, celery in large saucepan until softened. Scrape into bowl.\n
  2. In same pan cook ground beef/meat until just barely pink, ~5 minutes.\n
  3. Return vegetable mixture to pan, add diced garlic & cook over high heat ~1 minute until fragrant.\n
  4. Add wine & cook until mostly evaporated.\n
  5. Stir in tomatoes, chicken stock, thyme, bay leaf, salt & pepper & bring to boil.\n
  6. Lower heat to simmer, cover & cook for ~1 hour. Discard bay leaf, stir in heavy cream.\n
  7. Meanwhile cook your penne unti al dente, drain and mix into the sauce. 
")

marinara = Recipe.create(name: "Marinara Sauce", instructions: "
  1. Heat oil in skillet, add minced garlic stir ~30 seconds, do not let garlic burn!\n
  2. Add can of tomatoes with their juice to the pan, roughly break up the whole tomatoes. Add salt, basil & sugar. Simmer until fragrant.\n
  3. Blend sauce (immersion blender or normal). Adjust salt/pepper to taste.
")

martinez_picadillo = Recipe.create(name: "Martinez Family Picadillo", instructions: "
    1. Season beef with salt & pepper. Brown all sides in large pan/skillet. Put roast in slow cooker with ~half onion roughly chopped and a few garlic cloves.\n
    2. Cover the meat about halfway with water & cook 4-5 hours on HIGH or 7+ hours on LOW.\n
    3. When meat is cooked (should shred easily with a fork) shred it all and set aside.\n
    3. For the sauce: Open the chile pods and remove seeds. Place all into a medium saucepan with 1/2 onion and a few garlic cloves. Cover with cold water and bring to a boil. Simmer for ~20 minutes.\n
    4. Transfer all of the chiles to a blender. (Optional - include some of the onions or garlic. Experiment!). Add some of the liquid from the pot and blend till smooth. Check the consistency as you go - add more liquid & blend more if needed. \n
    5. Strain the blended sauce mixture into a bowl. Take your time, this will result is a SMOOTH sauce. \n
    6. Remove tomatillos from their husks/ clean well and chop along with 3-5 garlic cloves and 1/2 a white onion. Heat a clean large skillet/pan with oil, dd the onion and tomatillos to a clean large skillet/pan. Cook until softened, then add garlic.\n
    7. Once garlic has softened a bit, add the shredded meat & mix into the contents of the pan. Once combined, add the strained sauce and mix all together. Season with salt/pepper to taste.
")

honey_sesame_pork_tenderloin = Recipe.create(name: "Honey-Sesame Pork Tenerloin", instructions: "
    1. Combine soy sauce, garlic, ginger and sesame oil. Place tenderloin in a heavy plastic bag, pour soy mixture over to coat. Marinate for 2 hours at room tem, or overnight in the fridge. Remove pork from marinade and pat dry.\n
    2. Mix honey and brown sugar in a shallow plate. Place sesame seeds on a separate shallow plate. Roll pork well in honey mixture, coating well, then roll in sesame seeds.\n
    3. Roast pork in a shallow pan at 375 for 20-30 minutes, until thermometer registers 160F. Remove to serving platter, slice thinly to serve.
")

chicken_scampi = Recipe.create(name: "Chicken Scampi", instructions: "
    1. In skillet on medium to medium high heat, heat butter and olive oil together and sautee green onions and garlic.\n
    2. Add juice of the lemon, chicken, salt, pepper and parsley. Stir constantly for about 5-8 minutes until chicken is cooked through.\n
    3. Add tomatoes (equal to one small chopped tomato) and heat through. Stir into cooked angel hair pasta.
")

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
white_sugar = Foodstuff.create(name: "White Sugar", unit: "Tsp", category: "Sweetener")
soy_sauce = Foodstuff.create(name: "Soy Sauce", unit: "Cup", category: "Cooking Liquid")
ginger = Foodstuff.create(name: "Ginger Root", unit: "Tbsp", category: "Spice")
sesame_oil = Foodstuff.create(name: "Sesame Oil", unit: "Cup", category: "Cooking Liquid")
pork_tenderloin = Foodstuff.create(name: "Pork Tenderloin", unit: "Lb", category: "Meat")
honey = Foodstuff.create(name: "Honey", unit: "Cup", category: "Sweetener")
brown_sugar = Foodstuff.create(name: "Brown Sugar", unit: "Tbsp", category: "Sweetener")
sesame_seeds = Foodstuff.create(name: "Sesame Seeds", unit: "Tbsp", category: "Spice")
butter = Foodstuff.create(name: "Butter", unit: "Tbsp", category: "Dairy")
green_onion = Foodstuff.create(name: "Green Onion", unit: "Cup", category: "Vegetable")
lemon = Foodstuff.create(name: "Lemon", unit: "Unit", category: "Fruit")
chicken_breast = Foodstuff.create(name: "Chicken Breast", unit: "Lb", category: "Meat")
tomato = Foodstuff.create(name: "Tomato", unit: "Cup", category: "Fruit")
angel_hair_pasta = Foodstuff.create(name: "Angel Hair Pasta", unit: "Lb", category: "Grain")
parsley = Foodstuff.create(name: "Parsley", unit: "Cup", category: "Herb")

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
Ingredient.create(quantity: 0.0125, recipe_id: marinara.id, foodstuff_id: white_sugar.id)

#Martinez picadillo ingredients
Ingredient.create(quantity: 10, recipe_id: martinez_picadillo.id, foodstuff_id: guajillo_chile_pod.id)
Ingredient.create(quantity: 5, recipe_id: martinez_picadillo.id, foodstuff_id: california_chile_pod.id)
Ingredient.create(quantity: 2, recipe_id: martinez_picadillo.id, foodstuff_id: white_onion.id)
Ingredient.create(quantity: 10, recipe_id: martinez_picadillo.id, foodstuff_id: garlic.id)
Ingredient.create(quantity: 3, recipe_id: martinez_picadillo.id, foodstuff_id: beef_chuck_roast.id)
Ingredient.create(quantity: 1, recipe_id: martinez_picadillo.id, foodstuff_id: tomatillo.id)
Ingredient.create(quantity: 0.25, recipe_id: martinez_picadillo.id, foodstuff_id: evoo.id)

#Honey-Sesame Pork Tenderloin Ingredients
Ingredient.create(quantity: 0.5, recipe_id: honey_sesame_pork_tenderloin.id, foodstuff_id: soy_sauce.id)
Ingredient.create(quantity: 2, recipe_id: honey_sesame_pork_tenderloin.id, foodstuff_id: garlic.id)
Ingredient.create(quantity: 1, recipe_id: honey_sesame_pork_tenderloin.id, foodstuff_id: ginger.id)
Ingredient.create(quantity: 0.0625, recipe_id: honey_sesame_pork_tenderloin.id, foodstuff_id: sesame_oil.id)
Ingredient.create(quantity: 1, recipe_id: honey_sesame_pork_tenderloin.id, foodstuff_id: pork_tenderloin.id)
Ingredient.create(quantity: 0.25, recipe_id: honey_sesame_pork_tenderloin.id, foodstuff_id: honey.id)
Ingredient.create(quantity: 2, recipe_id: honey_sesame_pork_tenderloin.id, foodstuff_id: brown_sugar.id)
Ingredient.create(quantity: 4, recipe_id: honey_sesame_pork_tenderloin.id, foodstuff_id: sesame_seeds.id)

#Chicken Scampi Ingredients
Ingredient.create(quantity: 8, recipe_id: chicken_scampi.id, foodstuff_id: butter.id)
Ingredient.create(quantity: 0.5, recipe_id: chicken_scampi.id, foodstuff_id: evoo.id)
Ingredient.create(quantity: 0.25, recipe_id: chicken_scampi.id, foodstuff_id: green_onion.id)
Ingredient.create(quantity: 2, recipe_id: chicken_scampi.id, foodstuff_id: garlic.id)
Ingredient.create(quantity: 1, recipe_id: chicken_scampi.id, foodstuff_id: lemon.id)
Ingredient.create(quantity: 0.5, recipe_id: chicken_scampi.id, foodstuff_id: parsley.id)
Ingredient.create(quantity: 2, recipe_id: chicken_scampi.id, foodstuff_id: chicken_breast.id)
Ingredient.create(quantity: 1, recipe_id: chicken_scampi.id, foodstuff_id: kosher_salt.id)
Ingredient.create(quantity: 0.5, recipe_id: chicken_scampi.id, foodstuff_id: black_pepper.id)
Ingredient.create(quantity: 0.25, recipe_id: chicken_scampi.id, foodstuff_id: tomato.id)
Ingredient.create(quantity: 1, recipe_id: chicken_scampi.id, foodstuff_id: angel_hair_pasta.id)

puts "👩‍🍳👨‍🍳 it's COOKIN' TIME 👩‍🍳👨‍🍳"