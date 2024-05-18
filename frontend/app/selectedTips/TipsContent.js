import shellfish from "../../public/img/shellfish.jpg";
import bowl from "../../public/img/bowl.jpg";
import salad1 from "../../public/img/salad.jpg";
import salad2 from "../../public/img/salad2.jpg";
//budget 1
import chicken_stir from "../../public/swiper_img/chicken_stir.jpg"
import tofu_stir from "../../public/swiper_img/tofu_stir.jpg"
import spagetti_stir from "../../public/swiper_img/spagetti_stir.jpg"
import stir from "../../public/swiper_img/stir.jpg"

//bowl 2
import vego_bowl from "../../public/swiper_img/vego_bowl.jpg"
import quinoa_bowl from "../../public/swiper_img/quinoa_bowl.jpg"
import falafel from "../../public/swiper_img/falafel.jpg"
import salmon_bowl from "../../public/swiper_img/salmon_bowl.jpg"

//oatmeal 3
import oat1 from "../../public/swiper_img/oat1.jpg"
import oat2 from "../../public/swiper_img/oat2.jpg"

//smoothie 4
import smoothie from "../../public/swiper_img/smoothie.jpg"
import smoothie2 from "../../public/swiper_img/smoothie2.jpg"
import smoothie3 from "../../public/swiper_img/mango_smoothie.jpg"
import smoothie4 from "../../public/swiper_img/smoothie4.jpg"

//snacks 5
import nuts from "../../public/swiper_img/nutmix.jpg"
import greekyoghurt from "../../public/swiper_img/greekyogurt.jpg"
import hummus from "../../public/swiper_img/hummus.jpg"
import avocadotoast from "../../public/swiper_img/avocadotoast.jpg"

//herbs 6 
import lemon_chicken from "../../public/swiper_img/lemon_chicken.jpg"
import potato from "../../public/swiper_img/potato.jpg"
import pesto from "../../public/swiper_img/pesto.jpg"

//energy 7
import energy from "../../public/swiper_img/smoothie3.jpg"
import energy1 from "../../public/swiper_img/energy1.jpg"

//salad 8
import chicken_salad from "../../public/swiper_img/chicken_salad.jpg"
import salmon_salad from "../../public/swiper_img/salmon_salad.jpg"
import chickpea_salad from "../../public/swiper_img/chickpea_salad.jpg"
import avocado_salad from "../../public/swiper_img/avocado_salad.jpg"


//id 1: budget options -4 recipes
export const budgetOptions = [
  {
    pageTitle: "Deliciously Thrifty: Budget-Friendly Recipes",
    text: "Embark on a culinary adventure without breaking the bank! Explore our collection of budget-friendly recipes designed to tantalize your taste buds and nourish your soul. From hearty stir-fries to comforting pasta dishes and wholesome vegetarian meals, these recipes prove that eating well doesn't have to cost a fortune. Let's savor the flavors of affordability and creativity together, one delicious bite at a time!",
    recipes: [
      {
        recipe_title: "Chicken and Vegetable Stir-Fry",
        src: chicken_stir,
        ingredients: [
          "300g chicken breast, sliced",
          "2 cups mixed vegetables",
          "3 tbsp soy sauce",
          "2 cloves garlic, minced",
          "1 tbsp vegetable oil",
        ],
        instructions: [
          "Heat oil in a pan over medium-high heat.",
          "Add minced garlic and cook until fragrant.",
          "Add sliced chicken breast and cook until browned.",
          "Add mixed vegetables and soy sauce, stir-fry until vegetables are tender.",
          "Serve hot and enjoy!",
        ],
      },
      //2
      {
        recipe_title: "Vegetarian Tofu Stir-Fry",
        src: tofu_stir,
        ingredients: [
          "300g firm tofu, cubed",
          "2 cups broccoli florets",
          "1 bell pepper, sliced",
          "3 tbsp soy sauce",
          "2 cloves garlic, minced",
          "1 tbsp vegetable oil",
        ],
        instructions: [
          "Heat oil in a pan over medium-high heat.",
          "Add minced garlic and cook until fragrant.",
          "Add cubed tofu and cook until lightly browned.",
          "Add broccoli florets, sliced bell pepper, and soy sauce, stir-fry until vegetables are tender.",
          "Serve hot and enjoy!",
        ],
      },
      //3
      {
        recipe_title: "Spaghetti Aglio e Olio",
        src: spagetti_stir,
        ingredients: [
          "300g spaghetti",
          "4 cloves garlic, thinly sliced",
          "1/4 cup olive oil",
          "1/2 tsp red pepper flakes",
          "1/4 cup chopped fresh parsley",
          "Salt and black pepper to taste",
        ],
        instructions: [
          "Cook spaghetti according to package instructions until al dente.",
          "In a pan, heat olive oil over medium heat.",
          "Add sliced garlic and cook until golden brown and fragrant.",
          "Add cooked spaghetti, red pepper flakes, salt, and black pepper, toss to combine.",
          "Garnish with chopped parsley and serve hot.",
        ],
      },
      //4
      {
        recipe_title: "Creamy Mushroom Pasta",
        src: stir,
        ingredients: [
          "300g pasta of your choice",
          "200g mushrooms, sliced",
          "1 onion, diced",
          "2 cloves garlic, minced",
          "1 cup heavy cream",
          "1/2 cup grated Parmesan cheese",
          "2 tbsp butter",
          "Salt and black pepper to taste",
        ],
        instructions: [
          "Cook pasta according to package instructions until al dente.",
          "In a pan, melt butter over medium heat.",
          "Add diced onion and minced garlic, cook until softened.",
          "Add sliced mushrooms and cook until tender.",
          "Pour in heavy cream and simmer until slightly thickened.",
          "Add cooked pasta and Parmesan cheese, toss until well coated.",
          "Season with salt and black pepper, serve hot.",
        ],
      },

    ],
  },
];

//id: 2 bowls
export const bowlOptions = [
  {
    pageTitle: "Hearty Bowl Recipes",
    text: "Nourish your body with a bowl full of goodness. These hearty bowl recipes are packed with wholesome ingredients and flavors that will keep you feeling satisfied and energized throughout the day.",
    recipes: [
      {
        recipe_title: "Quinoa Buddha Bowl",
        src: quinoa_bowl,
        ingredients: [
          "1 cup cooked quinoa",
          "1 cup mixed greens",
          "1/2 cup roasted chickpeas",
          "1/2 cup sliced avocado",
          "1/4 cup shredded carrots",
          "1/4 cup sliced cucumber",
          "1/4 cup cherry tomatoes, halved",
          "2 tablespoons hummus",
          "2 tablespoons tahini dressing",
        ],
        instructions: [
          "Arrange cooked quinoa and mixed greens in a bowl.",
          "Top with roasted chickpeas, sliced avocado, shredded carrots, sliced cucumber, and cherry tomatoes.",
          "Drizzle with hummus and tahini dressing.",
          "Toss gently to combine, and enjoy!",
        ],
      },
      {
        recipe_title: "Teriyaki Salmon Rice Bowl",
        src: salmon_bowl,
        ingredients: [
          "1 cup cooked brown rice",
          "4 oz salmon fillet, grilled or baked",
          "1/2 cup steamed broccoli florets",
          "1/4 cup shredded carrots",
          "1/4 cup edamame, shelled",
          "2 tablespoons teriyaki sauce",
          "1 green onion, sliced (for garnish)",
          "1 teaspoon sesame seeds (for garnish)",
        ],
        instructions: [
          "Place cooked brown rice in a bowl.",
          "Top with grilled or baked salmon fillet, steamed broccoli florets, shredded carrots, and edamame.",
          "Drizzle with teriyaki sauce.",
          "Garnish with sliced green onions and sesame seeds.",
          "Serve immediately and enjoy!",
        ],
      },
      {
        recipe_title: "Mediterranean Falafel Bowl",
        src: falafel,
        ingredients: [
          "1 cup cooked quinoa",
          "4 falafel patties, baked or fried",
          "1/2 cup cucumber-tomato salad",
          "1/4 cup hummus",
          "2 tablespoons tahini dressing",
          "2 tablespoons crumbled feta cheese",
          "Fresh parsley, chopped (for garnish)",
        ],
        instructions: [
          "Arrange cooked quinoa in a bowl.",
          "Top with falafel patties, cucumber-tomato salad, and hummus.",
          "Drizzle with tahini dressing.",
          "Sprinkle crumbled feta cheese and chopped fresh parsley on top.",
          "Serve immediately and enjoy!",
        ],
      },
      {
        recipe_title: "Vegetarian Burrito Bowl",
        src: vego_bowl,
        ingredients: [
          "1 cup cooked brown rice",
          "1/2 cup black beans, cooked and seasoned",
          "1/2 cup corn kernels, cooked",
          "1/4 cup diced tomatoes",
          "1/4 cup diced red onion",
          "1/4 cup diced avocado",
          "1/4 cup shredded lettuce",
          "2 tablespoons salsa",
          "2 tablespoons sour cream (optional)",
        ],
        instructions: [
          "Place cooked brown rice in a bowl.",
          "Top with seasoned black beans, cooked corn kernels, diced tomatoes, diced red onion, diced avocado, and shredded lettuce.",
          "Drizzle with salsa and sour cream, if desired.",
          "Toss gently to combine, and enjoy!",
        ],
      },
    ],
  },
];

//id: 3 oats 2 recipes
export const oatsOptions = [
  {
    pageTitle: "Rise and Shine with Hearty Oatmeal Delights",
    text: "Start your day with a burst of warmth and goodness by indulging in these delightful oatmeal recipes. Whether you prefer classic flavors or adventurous twists, these hearty bowls are sure to fuel your body and soul for the day ahead.",
    recipes: [
      {
        recipe_title: "Classic Maple Cinnamon Oatmeal",
        src: oat1,
        ingredients: [
          "2.5 dl rolled oats",
          "4.7 dl water",
          "Pinch of salt",
          "2 tablespoons maple syrup",
          "0.5 teaspoon ground cinnamon",
          "Optional toppings: sliced bananas, chopped nuts, raisins",
        ],
        instructions: [
          "In a saucepan, bring water to a boil.",
          "Stir in the rolled oats and salt, reduce heat to low, and simmer for 5-7 minutes, stirring occasionally.",
          "Once the oats have absorbed most of the water and reached your desired consistency, remove from heat.",
          "Stir in maple syrup and ground cinnamon until well combined.",
          "Serve hot, topped with your favorite toppings such as sliced bananas, chopped nuts, or raisins.",
        ],
      },
      {
        recipe_title: "Savory Spinach and Mushroom Oatmeal",
        src: oat2,
        ingredients: [
          "2.5 dl rolled oats",
          "4.7 dl vegetable broth",
          "50 g sliced mushrooms",
          "60 g fresh spinach leaves",
          "2 cloves garlic, minced",
          "Salt and pepper to taste",
          "Optional toppings: grated Parmesan cheese, chopped green onions",
        ],
        instructions: [
          "In a saucepan, bring vegetable broth to a boil.",
          "Stir in the rolled oats, sliced mushrooms, minced garlic, salt, and pepper.",
          "Reduce heat to low, cover, and simmer for 5-7 minutes, or until oats are cooked and mushrooms are tender.",
          "Stir in fresh spinach leaves and cook for an additional 1-2 minutes, until spinach is wilted.",
          "Remove from heat and let sit for a few minutes to allow flavors to meld.",
          "Serve hot, topped with grated Parmesan cheese and chopped green onions for an extra burst of flavor.",
        ],
      },
    ],
  },
];

//id 4 : smoothies
export const smoothieOptions = [
  {
    pageTitle: "Refreshing Smoothie Recipes",
    text: "Blend your way to wellness with these delicious and nutritious smoothie recipes. Packed with vitamins, minerals, and antioxidants, these refreshing beverages are perfect for starting your day on a healthy note or for a quick energy boost any time of the day.",
    recipes: [
      {
        recipe_title: "Berry Blast Smoothie",
        src: smoothie,
        ingredients: [
          "1 cup mixed berries (strawberries, blueberries, raspberries)",
          "1 ripe banana, peeled and sliced",
          "1/2 cup Greek yogurt",
          "1/2 cup almond milk",
          "1 tablespoon honey (optional)",
          "Ice cubes",
        ],
        instructions: [
          "Combine all ingredients in a blender.",
          "Blend until smooth and creamy.",
          "Pour into glasses and serve immediately.",
        ],
      },
      {
        recipe_title: "Green Goddess Smoothie",
        src: smoothie2,
        ingredients: [
          "1 cup spinach leaves",
          "1/2 ripe avocado, peeled and pitted",
          "1/2 cup pineapple chunks",
          "1/2 cup coconut water",
          "Juice of 1/2 lime",
          "Ice cubes",
        ],
        instructions: [
          "Add all ingredients to a blender.",
          "Blend until smooth and creamy.",
          "Pour into glasses and enjoy!",
        ],
      },
      {
        recipe_title: "Tropical Paradise Smoothie",
        src: smoothie3,
        ingredients: [
          "1/2 cup mango chunks",
          "1/2 cup pineapple chunks",
          "1/2 cup coconut milk",
          "1/2 cup Greek yogurt",
          "1 tablespoon honey (optional)",
          "Ice cubes",
        ],
        instructions: [
          "Combine all ingredients in a blender.",
          "Blend until smooth and creamy.",
          "Pour into glasses and garnish with fresh fruit if desired.",
        ],
      },
      {
        recipe_title: "Peanut Butter Banana Smoothie",
        src: smoothie4,
        ingredients: [
          "1 ripe banana, peeled and sliced",
          "2 tablespoons peanut butter",
          "1 cup almond milk",
          "1/2 cup Greek yogurt",
          "1 tablespoon honey (optional)",
          "Ice cubes",
        ],
        instructions: [
          "Place all ingredients in a blender.",
          "Blend until smooth and creamy.",
          "Pour into glasses and enjoy!",
        ],
      },
     
      
    ],
  },
];

//id: 5 snack
export const snackOptions = [
  {
    pageTitle: "Nutritious Snack Ideas",
    text: "Snack smarter with wholesome bites. These nutritious snack ideas are perfect for satisfying your cravings while keeping you fueled and energized throughout the day.",
    recipes: [
      {
        recipe_title: "Greek Yogurt Parfait",
        src: greekyoghurt,
        ingredients: [
          "1/2 cup Greek yogurt",
          "1/4 cup granola",
          "1/4 cup mixed berries (strawberries, blueberries, raspberries)",
          "1 tablespoon honey",
          "1 tablespoon chopped nuts (optional)",
        ],
        instructions: [
          "In a serving glass or bowl, layer Greek yogurt, granola, and mixed berries.",
          "Drizzle with honey and sprinkle with chopped nuts, if desired.",
          "Serve immediately or refrigerate until ready to eat.",
        ],
      },
      {
        recipe_title: "Avocado Toast with Egg",
        src: avocadotoast,
        ingredients: [
          "1 slice whole grain bread, toasted",
          "1/2 ripe avocado, mashed",
          "1 egg, cooked to your liking (poached, fried, or scrambled)",
          "Salt and pepper to taste",
          "Red pepper flakes (optional)",
        ],
        instructions: [
          "Spread mashed avocado evenly on the toasted bread.",
          "Top with cooked egg and season with salt, pepper, and red pepper flakes, if desired.",
          "Serve immediately and enjoy!",
        ],
      },
      {
        recipe_title: "Vegetable Sticks with Hummus",
        src: hummus,
        ingredients: [
          "Assorted vegetable sticks (carrots, cucumber, bell peppers, celery)",
          "1/4 cup hummus",
        ],
        instructions: [
          "Wash and cut assorted vegetables into sticks.",
          "Serve with hummus for dipping.",
          "Enjoy as a crunchy and nutritious snack!",
        ],
      },
      {
        recipe_title: "Trail Mix",
        src: nuts,
        ingredients: [
          "1/2 cup mixed nuts (almonds, cashews, peanuts)",
          "1/4 cup dried fruits (raisins, cranberries, apricots)",
          "1/4 cup dark chocolate chips",
          "1/4 cup pumpkin seeds",
          "1/4 cup coconut flakes (optional)",
        ],
        instructions: [
          "Mix all ingredients together in a bowl.",
          "Store in an airtight container for up to one week.",
          "Grab a handful whenever you need a quick and satisfying snack!",
        ],
      },
    ],
  },
];

//id: 6 herbs
export const herbGardenOptions = [
  {
    pageTitle: "Explore Herb Garden Ideas",
    text: "Add flavor and freshness to your meals with these herb garden ideas. Whether you have a spacious backyard or a small balcony, growing your own herbs is a rewarding experience that will elevate your cooking to new heights.",
    recipes: [
      {
        recipe_title: "Classic Basil Pesto",
        src: pesto,
        ingredients: [
          "50g fresh basil leaves",
          "50g grated Parmesan cheese",
          "50g pine nuts",
          "2 garlic cloves, minced",
          "100ml extra virgin olive oil",
          "Salt and pepper to taste",
        ],
        instructions: [
          "In a food processor, combine basil leaves, Parmesan cheese, pine nuts, and minced garlic.",
          "Pulse until ingredients are finely chopped.",
          "With the food processor running, slowly drizzle in the olive oil until smooth.",
          "Season with salt and pepper to taste.",
          "Transfer to a jar or airtight container and store in the refrigerator.",
        ],
      },
      {
        recipe_title: "Rosemary Roasted Potatoes",
        src: potato,
        ingredients: [
          "500g baby potatoes, halved",
          "2 tablespoons olive oil",
          "2 tablespoons fresh rosemary leaves, chopped",
          "2 garlic cloves, minced",
          "Salt and pepper to taste",
        ],
        instructions: [
          "Preheat oven to 200°C (400°F).",
          "In a large bowl, toss halved baby potatoes with olive oil, chopped rosemary, minced garlic, salt, and pepper.",
          "Spread potatoes in a single layer on a baking sheet lined with parchment paper.",
          "Roast in the preheated oven for 25-30 minutes, or until golden brown and crispy.",
          "Serve hot and enjoy as a flavorful side dish!",
        ],
      },
      {
        recipe_title: "Lemon Thyme Chicken",
        src: lemon_chicken,
        ingredients: [
          "4 chicken breasts",
          "2 tablespoons fresh thyme leaves",
          "Zest of 1 lemon",
          "2 garlic cloves, minced",
          "Juice of 1 lemon",
          "3 tablespoons olive oil",
          "Salt and pepper to taste",
        ],
        instructions: [
          "In a small bowl, combine fresh thyme leaves, lemon zest, minced garlic, lemon juice, olive oil, salt, and pepper to make the marinade.",
          "Place chicken breasts in a shallow dish and pour the marinade over them, ensuring they are evenly coated.",
          "Cover and refrigerate for at least 30 minutes, or up to 4 hours.",
          "Preheat grill or grill pan over medium-high heat.",
          "Grill chicken breasts for 6-7 minutes on each side, or until cooked through and no longer pink in the center.",
          "Serve hot with your favorite side dishes and enjoy!",
        ],
      },
    ],
  },
];

//id: 7 energy
export const energyBoostOptions = [
  {
    pageTitle: "Boost Your Energy with Affordable Recipes",
    text: "Discover easy and affordable recipes that will boost your energy levels and keep you feeling revitalized throughout the day. These recipes are packed with nutritious ingredients and are budget-friendly, making them perfect for anyone looking for a quick and satisfying meal.",
    recipes: [
      {
        recipe_title: "Quinoa Salad with Chickpeas and Avocado",
        src: energy1,
        ingredients: [
          "150g quinoa",
          "1 can (400g) chickpeas, drained and rinsed",
          "1 avocado, diced",
          "1 cucumber, diced",
          "1 red bell pepper, diced",
          "Handful of cherry tomatoes, halved",
          "Juice of 1 lemon",
          "2 tablespoons olive oil",
          "Salt and pepper to taste",
        ],
        instructions: [
          "Rinse the quinoa under cold water. Cook according to package instructions until tender. Once cooked, fluff with a fork and let it cool.",
          "In a large bowl, combine cooked quinoa, chickpeas, diced avocado, cucumber, red bell pepper, and cherry tomatoes.",
          "Drizzle lemon juice and olive oil over the salad. Season with salt and pepper to taste.",
          "Toss gently to combine all ingredients. Serve chilled and enjoy!",
        ],
      },
      {
        recipe_title: "Banana Oatmeal Breakfast Smoothie",
        src: energy,
        ingredients: [
          "1 ripe banana",
          "40g rolled oats",
          "250ml milk of your choice",
          "1 tablespoon honey or maple syrup",
          "1/2 teaspoon ground cinnamon",
          "Handful of ice cubes",
        ],
        instructions: [
          "In a blender, combine ripe banana, rolled oats, milk, honey or maple syrup, ground cinnamon, and ice cubes.",
          "Blend until smooth and creamy, adjusting the consistency with more milk if needed.",
          "Pour into glasses and serve immediately for a refreshing and energizing breakfast!",
        ],
      },
    ],
  },
];

//id 8 - sallad
export const salladOptions = [
  {
    pageTitle: "Satisfy Your Cravings with Fresh and Nutritious Salads",
    text: "Explore a variety of nutritious and delicious salad recipes that will tantalize your taste buds and keep you feeling satisfied and energized throughout the day. From vibrant veggie salads to protein-packed bowls, there's something for everyone to enjoy!",
    recipes: [
      {
        recipe_title: "Chicken Caesar Salad",
        src: chicken_salad,
        ingredients: [
          "2 cups cooked chicken breast, diced",
          "4 cups romaine lettuce, chopped",
          "1/4 cup grated Parmesan cheese",
          "1/2 cup croutons",
          "1/4 cup Caesar dressing",
        ],
        instructions: [
          "In a large bowl, combine chopped romaine lettuce, diced chicken breast, and grated Parmesan cheese.",
          "Add croutons and Caesar dressing, toss until well coated.",
          "Serve immediately and enjoy!",
        ],
      },
      {
        recipe_title: "Grilled Salmon Salad",
        src: salmon_salad,
        ingredients: [
          "2 fillets of grilled salmon",
          "4 cups mixed greens",
          "1/4 cup cherry tomatoes, halved",
          "1/4 cup sliced cucumber",
          "1/4 cup sliced red onion",
          "1/4 cup balsamic vinaigrette",
        ],
        instructions: [
          "In a large bowl, toss mixed greens, cherry tomatoes, sliced cucumber, and sliced red onion.",
          "Place grilled salmon fillets on top.",
          "Drizzle with balsamic vinaigrette.",
          "Serve immediately and enjoy!",
        ],
      },
      {
        recipe_title: "Mediterranean Chickpea Salad",
        src: chickpea_salad,
        ingredients: [
          "2 cups cooked chickpeas",
          "1 cucumber, diced",
          "1 bell pepper, diced",
          "1/2 cup cherry tomatoes, halved",
          "1/4 cup chopped red onion",
          "1/4 cup crumbled feta cheese",
          "2 tbsp olive oil",
          "1 tbsp lemon juice",
          "1/4 tsp dried oregano",
          "Salt and pepper to taste",
        ],
        instructions: [
          "In a large bowl, combine cooked chickpeas, diced cucumber, diced bell pepper, cherry tomatoes, and chopped red onion.",
          "Add crumbled feta cheese, olive oil, lemon juice, dried oregano, salt, and pepper.",
          "Toss until well combined.",
          "Serve immediately and enjoy!",
        ],
      },
      {
        recipe_title: "Quinoa Avocado Salad",
        src: avocado_salad,
        ingredients: [
          "1 cup cooked quinoa",
          "1 avocado, diced",
          "1/2 cup diced cucumber",
          "1/2 cup diced bell pepper",
          "1/4 cup chopped cilantro",
          "2 tbsp lime juice",
          "1 tbsp olive oil",
          "Salt and pepper to taste",
        ],
        instructions: [
          "In a large bowl, combine cooked quinoa, diced avocado, diced cucumber, diced bell pepper, and chopped cilantro.",
          "Drizzle with lime juice and olive oil.",
          "Season with salt and pepper to taste.",
          "Toss until well combined.",
          "Serve immediately and enjoy!",
        ],
      },
    ],
  },
];
