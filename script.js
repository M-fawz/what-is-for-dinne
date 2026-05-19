window.addEventListener('load', function () {

  /* ============================================================
     RECIPE DATA
     ============================================================ */
  const recipes = [
    {
      name: "Creamy Spaghetti Carbonara",
      description: "Classic Roman pasta with silky egg sauce and crispy pancetta",
      imgCover: "https://images.unsplash.com/photo-1612874742237-6526221588e3?q=80&w=800&auto=format&fit=crop",
      prepTime: "15 min", cookTime: "20 min", totalTime: 35, servings: "4 people",
      difficulty: "Easy", category: "Italian", ratingsAverage: 4.8, ratingsQuantity: 234,
      ingredients: [
        "400g spaghetti",
        "200g pancetta or guanciale, diced",
        "4 large eggs",
        "100g Pecorino Romano, grated",
        "50g Parmesan, grated",
        "Freshly ground black pepper",
        "Salt for pasta water"
      ],
      instructions: [
        "Boil generously salted water and cook spaghetti until al dente according to package directions.",
        "Cook pancetta in a large skillet over medium heat until crispy and golden.",
        "Whisk eggs together with both cheeses and plenty of freshly ground black pepper in a bowl.",
        "Reserve 1 cup of pasta water before draining the spaghetti.",
        "Remove skillet from heat and toss pasta with pancetta, then quickly mix in egg mixture, adding pasta water a splash at a time to create a silky sauce.",
        "Serve immediately topped with extra grated cheese and black pepper."
      ],
      nutrition: { calories: "520 kcal", protein: "28g", carbs: "62g", fat: "18g", fiber: "3g", sodium: "680mg" },
      tips: [
        "Use room temperature eggs for a smoother, creamier sauce.",
        "Work quickly when mixing eggs with hot pasta to avoid scrambling.",
        "Reserve extra pasta water — it's your best tool for adjusting sauce consistency.",
        "Never add cream — authentic carbonara uses only eggs for richness."
      ]
    },
    {
      name: "Honey Garlic Salmon",
      description: "Pan-seared salmon with a sticky sweet and savory glaze",
      imgCover: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?q=80&w=800&auto=format&fit=crop",
      prepTime: "5 min", cookTime: "20 min", totalTime: 25, servings: "2 people",
      difficulty: "Easy", category: "Seafood", ratingsAverage: 4.9, ratingsQuantity: 187,
      ingredients: [
        "2 salmon fillets (6oz each)",
        "3 tbsp honey",
        "2 tbsp soy sauce",
        "4 cloves garlic, minced",
        "1 tbsp olive oil",
        "1 tsp fresh ginger, grated",
        "Sesame seeds for garnish",
        "Green onions, sliced"
      ],
      instructions: [
        "Pat salmon fillets dry with paper towels and season lightly with salt and pepper.",
        "Whisk together honey, soy sauce, minced garlic, and grated ginger in a small bowl.",
        "Heat olive oil in a non-stick skillet over medium-high heat until shimmering.",
        "Cook salmon skin-side up for 4–5 minutes until the flesh is golden and releases easily.",
        "Flip the salmon and pour the sauce over it; cook an additional 4–5 minutes, basting continuously.",
        "Garnish with sesame seeds and sliced green onions before serving."
      ],
      nutrition: { calories: "380 kcal", protein: "35g", carbs: "28g", fat: "14g", fiber: "0g", sodium: "720mg" },
      tips: [
        "Don't overcook salmon — it's perfect when still slightly pink in the center.",
        "Use wild-caught salmon for the best flavor and texture.",
        "Let the sauce caramelize slightly for a deeper, richer flavor.",
        "Pair with steamed broccoli or asparagus for a complete healthy meal."
      ]
    },
    {
      name: "Thai Green Curry",
      description: "Fragrant coconut curry with tender chicken and fresh vegetables",
      imgCover: "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?q=80&w=800&auto=format&fit=crop",
      prepTime: "15 min", cookTime: "25 min", totalTime: 40, servings: "4 people",
      difficulty: "Intermediate", category: "Asian", ratingsAverage: 4.7, ratingsQuantity: 312,
      ingredients: [
        "2 tbsp green curry paste",
        "400ml coconut milk",
        "300g chicken breast, sliced",
        "1 red bell pepper, sliced",
        "100g green beans",
        "1 eggplant, cubed",
        "2 tbsp fish sauce",
        "1 tbsp palm sugar",
        "Fresh Thai basil leaves"
      ],
      instructions: [
        "Heat a large pot or wok over medium-high heat and cook curry paste for 1 minute until fragrant.",
        "Add half the coconut milk and stir well to combine with the paste.",
        "Add the sliced chicken and cook, stirring, until no longer pink.",
        "Pour in the remaining coconut milk, add vegetables, fish sauce, and palm sugar.",
        "Simmer for 15–20 minutes until vegetables are tender and sauce is fragrant.",
        "Stir in Thai basil just before serving; serve with jasmine rice."
      ],
      nutrition: { calories: "420 kcal", protein: "26g", carbs: "22g", fat: "26g", fiber: "5g", sodium: "890mg" },
      tips: [
        "Adjust the spice level by using more or less curry paste to taste.",
        "Add vegetables in stages based on their cooking time for best results.",
        "Fresh Thai basil is essential — don't substitute Italian basil.",
        "Use full-fat coconut milk for the creamiest, richest sauce."
      ]
    },
    {
      name: "Classic Beef Burger",
      description: "Juicy handcrafted patty with fresh toppings on a toasted bun",
      imgCover: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=800&auto=format&fit=crop",
      prepTime: "15 min", cookTime: "20 min", totalTime: 35, servings: "4 people",
      difficulty: "Easy", category: "American", ratingsAverage: 4.6, ratingsQuantity: 421,
      ingredients: [
        "500g ground beef (80/20 fat ratio)",
        "4 burger buns",
        "4 slices cheddar cheese",
        "Lettuce leaves",
        "Tomato slices",
        "Red onion, sliced",
        "Pickles",
        "Burger sauce or condiments of choice"
      ],
      instructions: [
        "Divide ground beef into 4 equal portions and form into patties with a slight indent in the center.",
        "Season patties generously with salt and freshly ground black pepper on both sides.",
        "Grill or cook in a cast iron pan on high heat for 4–5 minutes per side.",
        "Add a slice of cheddar cheese in the last minute of cooking and cover to melt.",
        "Toast the buns lightly on the grill or in a dry pan until golden.",
        "Assemble burgers with all your favourite toppings and serve immediately."
      ],
      nutrition: { calories: "650 kcal", protein: "38g", carbs: "42g", fat: "35g", fiber: "2g", sodium: "920mg" },
      tips: [
        "Don't press burgers while cooking — this squeezes out the juices.",
        "The indent in the center prevents patties from puffing up into a dome.",
        "Let patties rest 2–3 minutes before serving for juicier results.",
        "Toast the buns for better texture and to prevent sogginess."
      ]
    },
    {
      name: "Mediterranean Quinoa Bowl",
      description: "Vibrant bowl with fluffy quinoa, fresh veggies, and tahini dressing",
      imgCover: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=800&auto=format&fit=crop",
      prepTime: "20 min", cookTime: "35 min", totalTime: 55, servings: "2 people",
      difficulty: "Easy", category: "Mediterranean", ratingsAverage: 4.5, ratingsQuantity: 156,
      ingredients: [
        "1 cup quinoa",
        "Cherry tomatoes, halved",
        "Cucumber, diced",
        "Red onion, thinly sliced",
        "Kalamata olives",
        "Feta cheese, crumbled",
        "Fresh parsley, chopped",
        "Tahini dressing (tahini, lemon, garlic, water)"
      ],
      instructions: [
        "Rinse quinoa thoroughly under cold water to remove the bitter coating.",
        "Cook quinoa according to package directions (about 15 minutes) and set aside to cool.",
        "Prepare all vegetables: halve tomatoes, dice cucumber, thinly slice red onion.",
        "Make tahini dressing by whisking together tahini, fresh lemon juice, minced garlic, and water.",
        "Fluff the quinoa with a fork and let it cool slightly before assembling.",
        "Arrange quinoa in bowls, top with all vegetables, feta, parsley, and drizzle with tahini dressing."
      ],
      nutrition: { calories: "480 kcal", protein: "18g", carbs: "58g", fat: "20g", fiber: "10g", sodium: "540mg" },
      tips: [
        "Always rinse quinoa well to remove the natural bitter coating (saponins).",
        "Let quinoa cool before adding fresh ingredients to keep them crisp.",
        "Make extra tahini dressing — it keeps in the fridge for up to a week.",
        "Add grilled chicken or chickpeas for extra protein."
      ]
    },
    {
      name: "Chicken Tikka Masala",
      description: "Tender marinated chicken in a rich, aromatic tomato-cream sauce",
      imgCover: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?q=80&w=800&auto=format&fit=crop",
      prepTime: "30 min", cookTime: "20 min", totalTime: 50, servings: "4 people",
      difficulty: "Intermediate", category: "Asian", ratingsAverage: 4.7, ratingsQuantity: 389,
      ingredients: [
        "600g chicken breast, cubed",
        "1 cup plain yogurt",
        "2 tbsp tikka masala paste",
        "400ml coconut cream",
        "1 onion, diced",
        "4 cloves garlic, minced",
        "2 tbsp fresh ginger, grated",
        "400g canned crushed tomatoes",
        "Fresh cilantro for garnish"
      ],
      instructions: [
        "Marinate chicken in yogurt mixed with 1 tbsp tikka paste for at least 30 minutes (overnight is best).",
        "Brown marinated chicken in a hot pan over high heat, then remove and set aside.",
        "In the same pan, sauté diced onion, garlic, and ginger until softened and golden.",
        "Add remaining tikka paste and crushed tomatoes; simmer for 10 minutes until sauce deepens.",
        "Stir in coconut cream and browned chicken; simmer for 15 minutes until sauce thickens.",
        "Garnish generously with fresh cilantro and serve with naan or basmati rice."
      ],
      nutrition: { calories: "450 kcal", protein: "38g", carbs: "24g", fat: "22g", fiber: "4g", sodium: "760mg" },
      tips: [
        "Marinate chicken overnight for dramatically deeper flavor.",
        "Use full-fat coconut cream for the richest, most luxurious sauce.",
        "Adjust the heat by varying the amount of tikka paste.",
        "Serve with warm naan bread and cooling raita on the side."
      ]
    },
    {
      name: "Margherita Pizza",
      description: "Classic Neapolitan pizza with fresh mozzarella and basil",
      imgCover: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?q=80&w=800&auto=format&fit=crop",
      prepTime: "75 min", cookTime: "12 min", totalTime: 102, servings: "2 people",
      difficulty: "Intermediate", category: "Italian", ratingsAverage: 4.9, ratingsQuantity: 512,
      ingredients: [
        "300g pizza dough",
        "200g crushed tomatoes",
        "250g fresh mozzarella",
        "Fresh basil leaves",
        "2 tbsp olive oil",
        "2 cloves garlic, minced",
        "Salt and pepper to taste",
        "Parmesan for topping"
      ],
      instructions: [
        "Rest the pizza dough at room temperature for 1 hour to make it easier to stretch.",
        "Preheat your oven to 250°C/480°F with a pizza stone or baking sheet inside.",
        "Mix crushed tomatoes with olive oil, minced garlic, salt and pepper for the sauce.",
        "Roll or stretch dough out on a floured surface to your desired thickness.",
        "Spread sauce evenly, add torn pieces of fresh mozzarella, and drizzle with olive oil.",
        "Bake for 10–12 minutes until crust is golden and cheese is bubbling; top with fresh basil."
      ],
      nutrition: { calories: "580 kcal", protein: "24g", carbs: "68g", fat: "22g", fiber: "4g", sodium: "920mg" },
      tips: [
        "Use a pizza stone for a crispier, more authentic crust.",
        "Don't overload with toppings — simplicity is the soul of Margherita.",
        "Add fresh basil after baking to preserve its color and flavor.",
        "Let the dough rest properly — it makes it much easier to shape."
      ]
    },
    {
      name: "Beef Tacos",
      description: "Seasoned ground beef tacos loaded with fresh toppings",
      imgCover: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?q=80&w=800&auto=format&fit=crop",
      prepTime: "10 min", cookTime: "25 min", totalTime: 35, servings: "4 people",
      difficulty: "Easy", category: "American", ratingsAverage: 4.6, ratingsQuantity: 278,
      ingredients: [
        "500g ground beef",
        "8 taco shells",
        "1 onion, diced",
        "2 tbsp taco seasoning",
        "Shredded lettuce",
        "Diced tomatoes",
        "Shredded cheddar cheese",
        "Sour cream",
        "Salsa"
      ],
      instructions: [
        "Brown ground beef in a large skillet over medium-high heat, breaking it up as it cooks.",
        "Add diced onion and cook until softened, about 3–4 minutes.",
        "Stir in taco seasoning with ½ cup water and simmer for 10 minutes until sauce thickens.",
        "Warm taco shells in the oven at 180°C/350°F for 3–4 minutes until crispy.",
        "Fill each shell with seasoned beef mixture.",
        "Top with shredded lettuce, diced tomatoes, cheese, sour cream, and salsa."
      ],
      nutrition: { calories: "420 kcal", protein: "26g", carbs: "32g", fat: "20g", fiber: "4g", sodium: "780mg" },
      tips: [
        "Drain excess fat from the beef after browning for healthier tacos.",
        "Warm shells in the oven for better texture and crunch.",
        "Prepare all toppings before starting to cook the beef.",
        "Use ground turkey for a lighter, equally delicious option."
      ]
    },
    {
      name: "Caesar Salad",
      description: "Crisp romaine lettuce with classic dressing, croutons, and parmesan",
      imgCover: "https://images.unsplash.com/photo-1546793665-c74683f339c1?q=80&w=800&auto=format&fit=crop",
      prepTime: "15 min", cookTime: "0 min", totalTime: 15, servings: "4 people",
      difficulty: "Easy", category: "Mediterranean", ratingsAverage: 4.4, ratingsQuantity: 198,
      ingredients: [
        "1 large romaine lettuce",
        "½ cup Caesar dressing",
        "½ cup Parmesan, shaved",
        "1 cup croutons",
        "2 anchovy fillets (optional)",
        "Lemon wedges",
        "Freshly ground black pepper"
      ],
      instructions: [
        "Wash and thoroughly dry the romaine lettuce, then tear into bite-sized pieces.",
        "Place torn lettuce in a large chilled salad bowl.",
        "Add Caesar dressing and toss well until every leaf is lightly coated.",
        "Add croutons and half the shaved Parmesan and toss gently.",
        "Top with remaining Parmesan, anchovy fillets if using, and black pepper.",
        "Serve immediately with lemon wedges on the side."
      ],
      nutrition: { calories: "320 kcal", protein: "12g", carbs: "18g", fat: "22g", fiber: "3g", sodium: "680mg" },
      tips: [
        "Use cold, crisp lettuce right out of the fridge for the best texture.",
        "Make homemade croutons by cubing stale bread and toasting with garlic butter.",
        "Add grilled chicken or shrimp to turn this into a complete meal.",
        "Don't dress the salad until you're ready to serve — it wilts quickly."
      ]
    },
    {
      name: "Pad Thai",
      description: "Classic Thai stir-fried rice noodles with shrimp, peanuts, and lime",
      imgCover: "https://images.unsplash.com/photo-1559314809-0d155014e29e?q=80&w=800&auto=format&fit=crop",
      prepTime: "35 min", cookTime: "15 min", totalTime: 35, servings: "2 people",
      difficulty: "Intermediate", category: "Asian", ratingsAverage: 4.8, ratingsQuantity: 445,
      ingredients: [
        "200g rice noodles",
        "200g shrimp, peeled and deveined",
        "2 eggs",
        "3 tbsp tamarind paste",
        "2 tbsp fish sauce",
        "1 tbsp palm sugar",
        "Bean sprouts",
        "Crushed peanuts",
        "Lime wedges and fresh cilantro"
      ],
      instructions: [
        "Soak rice noodles in warm water for 30 minutes until pliable, then drain well.",
        "Mix tamarind paste, fish sauce, and palm sugar together to make the pad thai sauce.",
        "Heat a wok over high heat, add oil, and scramble eggs; push to one side.",
        "Cook shrimp until pink on both sides, then add noodles and sauce; toss for 2–3 minutes.",
        "Add eggs back in with bean sprouts and toss everything together for 1 minute.",
        "Serve topped with crushed peanuts, fresh lime wedges, and cilantro."
      ],
      nutrition: { calories: "540 kcal", protein: "32g", carbs: "62g", fat: "16g", fiber: "4g", sodium: "1120mg" },
      tips: [
        "Don't oversoak the noodles or they'll turn mushy during cooking.",
        "Cook on the highest heat possible for authentic wok flavor (wok hei).",
        "Balance the sweet, sour, and salty flavors to your liking.",
        "Prepare all ingredients before you start — this dish cooks very fast."
      ]
    },
    {
      name: "French Onion Soup",
      description: "Slow-caramelized onion soup topped with crusty bread and melted Gruyère",
      imgCover: "https://images.unsplash.com/photo-1547592166-23ac45744acd?q=80&w=800&auto=format&fit=crop",
      prepTime: "15 min", cookTime: "60 min", totalTime: 75, servings: "4 people",
      difficulty: "Intermediate", category: "Mediterranean", ratingsAverage: 4.7, ratingsQuantity: 267,
      ingredients: [
        "4 large onions, thinly sliced",
        "4 tbsp butter",
        "1 liter beef broth",
        "½ cup white wine",
        "2 bay leaves",
        "Fresh thyme sprigs",
        "Baguette slices",
        "200g Gruyère cheese, grated"
      ],
      instructions: [
        "Melt butter in a large, heavy-bottomed pot over medium-low heat and add sliced onions.",
        "Cook onions slowly, stirring occasionally, for 40 minutes until deeply caramelized and golden.",
        "Add white wine and deglaze the pot, scraping up all the brown bits from the bottom.",
        "Add beef broth, bay leaves, and thyme; bring to a simmer and cook for 20 minutes.",
        "Toast baguette slices in the oven until golden and crispy.",
        "Ladle soup into oven-safe bowls, top with bread and Gruyère, then broil 3–5 minutes until bubbly."
      ],
      nutrition: { calories: "380 kcal", protein: "18g", carbs: "36g", fat: "18g", fiber: "4g", sodium: "980mg" },
      tips: [
        "Patience is everything — never rush the caramelization step.",
        "Use a high-quality beef broth for the most flavorful soup.",
        "Gruyère can be substituted with Swiss cheese or Emmental.",
        "Watch carefully when broiling — cheese can go from golden to burned quickly."
      ]
    },
    {
      name: "Chicken Stir-Fry",
      description: "Quick and healthy wok-tossed chicken with colorful vegetables",
      imgCover: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?q=80&w=800&auto=format&fit=crop",
      prepTime: "15 min", cookTime: "15 min", totalTime: 30, servings: "4 people",
      difficulty: "Easy", category: "Asian", ratingsAverage: 4.5, ratingsQuantity: 324,
      ingredients: [
        "500g chicken breast, thinly sliced",
        "2 bell peppers, sliced",
        "1 head broccoli, cut into florets",
        "2 carrots, julienned",
        "3 tbsp soy sauce",
        "2 tbsp oyster sauce",
        "1 tbsp sesame oil",
        "2 cloves garlic, minced",
        "Fresh ginger, grated"
      ],
      instructions: [
        "Mix soy sauce, oyster sauce, and sesame oil together in a bowl to make the stir-fry sauce.",
        "Heat a wok or large pan over high heat; cook chicken until golden and cooked through, then remove.",
        "Add minced garlic and ginger to the hot wok and stir-fry for 30 seconds until fragrant.",
        "Add harder vegetables (carrots and broccoli) and cook for 3–4 minutes, tossing constantly.",
        "Return chicken to the wok, add bell peppers and the sauce; toss everything together for 2 minutes.",
        "Serve immediately over steamed rice or noodles."
      ],
      nutrition: { calories: "320 kcal", protein: "34g", carbs: "18g", fat: "12g", fiber: "5g", sodium: "840mg" },
      tips: [
        "Cut all ingredients uniformly before you start — stir-frying is fast!",
        "Keep the heat high for that authentic smoky wok flavor.",
        "Don't overcrowd the wok or food will steam instead of fry.",
        "Add cashews or toasted peanuts at the end for extra crunch."
      ]
    },
    {
      name: "Lasagna Bolognese",
      description: "Hearty layered pasta with rich meat sauce and creamy béchamel",
      imgCover: "https://images.unsplash.com/photo-1574894709920-11b28e7367e3?q=80&w=800&auto=format&fit=crop",
      prepTime: "30 min", cookTime: "90 min", totalTime: 120, servings: "6 people",
      difficulty: "Intermediate", category: "Italian", ratingsAverage: 4.9, ratingsQuantity: 478,
      ingredients: [
        "12 lasagna sheets",
        "500g ground beef",
        "400g canned crushed tomatoes",
        "1 onion, diced",
        "2 carrots, diced",
        "500ml béchamel sauce",
        "200g mozzarella, grated",
        "100g Parmesan, grated",
        "Fresh basil"
      ],
      instructions: [
        "Brown ground beef with onion and carrots in a large pan; add crushed tomatoes and simmer for 30 minutes.",
        "Cook lasagna sheets in boiling salted water until just al dente, then drain carefully.",
        "Preheat oven to 180°C/350°F and grease a large baking dish.",
        "Layer the lasagna: meat sauce, pasta sheets, béchamel; repeat 3–4 times.",
        "Finish with a layer of béchamel, mozzarella, and Parmesan on top.",
        "Bake for 45 minutes until golden and bubbling; rest for 10 minutes before slicing."
      ],
      nutrition: { calories: "680 kcal", protein: "42g", carbs: "58g", fat: "28g", fiber: "6g", sodium: "920mg" },
      tips: [
        "Make the Bolognese sauce a day ahead — it tastes even better the next day.",
        "Never skip the 10-minute resting time after baking — it sets the layers.",
        "Use fresh pasta sheets instead of dried for a more delicate, tender result.",
        "Freeze leftovers in individual portions for a quick weeknight meal."
      ]
    },
    {
      name: "Shrimp Scampi",
      description: "Garlic butter shrimp with white wine over perfectly cooked linguine",
      imgCover: "https://images.unsplash.com/photo-1633504581786-316c8002b1b9?q=80&w=800&auto=format&fit=crop",
      prepTime: "10 min", cookTime: "15 min", totalTime: 25, servings: "4 people",
      difficulty: "Easy", category: "Seafood", ratingsAverage: 4.8, ratingsQuantity: 356,
      ingredients: [
        "400g large shrimp, peeled and deveined",
        "300g linguine",
        "6 cloves garlic, minced",
        "½ cup white wine",
        "4 tbsp butter",
        "2 tbsp olive oil",
        "Fresh parsley, chopped",
        "Lemon juice and zest",
        "Red pepper flakes"
      ],
      instructions: [
        "Cook linguine in salted boiling water until al dente; reserve 1 cup pasta water before draining.",
        "Heat olive oil and 2 tbsp butter in a large skillet; add garlic and red pepper flakes for 1 minute.",
        "Cook shrimp in the garlic butter until pink on both sides, about 3–4 minutes; remove and set aside.",
        "Pour white wine into the pan and simmer for 2 minutes, then swirl in remaining butter and lemon juice.",
        "Return shrimp and add linguine to the pan; toss everything together, adding pasta water as needed.",
        "Garnish with fresh parsley, lemon zest, and extra red pepper flakes."
      ],
      nutrition: { calories: "520 kcal", protein: "36g", carbs: "54g", fat: "18g", fiber: "3g", sodium: "620mg" },
      tips: [
        "Shrimp cook very quickly — don't walk away or they'll become rubbery.",
        "Use a good quality white wine you'd also enjoy drinking.",
        "Toss the pasta in the sauce for maximum flavor absorption.",
        "Add extra lemon zest at the end for a bright, fresh finish."
      ]
    },
    {
      name: "Vegetable Curry",
      description: "Warming coconut curry packed with hearty vegetables and chickpeas",
      imgCover: "https://images.unsplash.com/photo-1585032226651-759b368d7246?q=80&w=800&auto=format&fit=crop",
      prepTime: "15 min", cookTime: "35 min", totalTime: 50, servings: "4 people",
      difficulty: "Easy", category: "Asian", ratingsAverage: 4.6, ratingsQuantity: 289,
      ingredients: [
        "2 potatoes, cubed",
        "1 cauliflower, cut into florets",
        "2 carrots, sliced",
        "1 can chickpeas, drained",
        "400ml coconut milk",
        "3 tbsp curry powder",
        "1 onion, diced",
        "3 cloves garlic, minced",
        "Fresh spinach"
      ],
      instructions: [
        "Sauté diced onion until translucent; add minced garlic and curry powder, cook 1 minute until fragrant.",
        "Add cubed potatoes and carrots; stir to coat with spices and cook for 5 minutes.",
        "Pour in coconut milk and 1 cup water; bring to a gentle simmer.",
        "Add cauliflower florets and drained chickpeas; cook for 20 minutes until vegetables are tender.",
        "Stir in fresh spinach until wilted, about 2 minutes.",
        "Serve over basmati rice or alongside warm naan bread."
      ],
      nutrition: { calories: "380 kcal", protein: "14g", carbs: "48g", fat: "16g", fiber: "12g", sodium: "480mg" },
      tips: [
        "Add vegetables in order of cooking time for even doneness.",
        "Start with less curry powder and adjust to your taste preference.",
        "Full-fat coconut milk makes a noticeably creamier, richer curry.",
        "Add cubed tofu or paneer for extra protein without meat."
      ]
    },
    {
      name: "BBQ Pulled Pork",
      description: "Slow-cooked smoky pulled pork with tangy barbecue sauce on brioche",
      imgCover: "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?q=80&w=800&auto=format&fit=crop",
      prepTime: "15 min", cookTime: "240 min", totalTime: 255, servings: "6 people",
      difficulty: "Easy", category: "American", ratingsAverage: 4.7, ratingsQuantity: 412,
      ingredients: [
        "1kg pork shoulder",
        "1 cup BBQ sauce",
        "½ cup apple cider vinegar",
        "2 tbsp brown sugar",
        "1 tbsp paprika",
        "1 tbsp garlic powder",
        "Burger buns",
        "Coleslaw for serving"
      ],
      instructions: [
        "Mix paprika, garlic powder, brown sugar, salt, and pepper together to make the dry rub.",
        "Coat the pork shoulder all over with the dry rub, pressing it in firmly.",
        "Place pork in a slow cooker with apple cider vinegar and ½ cup water.",
        "Cook on low heat for 8 hours or high heat for 4 hours until fork-tender.",
        "Remove pork and shred it using two forks, discarding excess fat.",
        "Return shredded pork to the cooker, mix thoroughly with BBQ sauce, and serve on toasted buns with coleslaw."
      ],
      nutrition: { calories: "620 kcal", protein: "48g", carbs: "52g", fat: "22g", fiber: "3g", sodium: "1180mg" },
      tips: [
        "Score the pork shoulder all over so the dry rub penetrates deeper.",
        "Low and slow is always better — resist the temptation to rush it.",
        "Make your own BBQ sauce by simmering ketchup, brown sugar, and vinegar.",
        "Leftovers taste even better the next day as flavors continue to meld."
      ]
    },
    {
      name: "Greek Chicken Souvlaki",
      description: "Herb-marinated chicken skewers with tzatziki and warm pita",
      imgCover: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=800&auto=format&fit=crop",
      prepTime: "20 min", cookTime: "15 min", totalTime: 35, servings: "4 people",
      difficulty: "Easy", category: "Mediterranean", ratingsAverage: 4.8, ratingsQuantity: 203,
      ingredients: [
        "600g chicken breast, cubed",
        "3 tbsp olive oil",
        "2 tbsp lemon juice",
        "3 cloves garlic, minced",
        "1 tsp dried oregano",
        "1 tsp paprika",
        "4 pita breads",
        "Tzatziki sauce",
        "Cucumber, tomato, and red onion to serve"
      ],
      instructions: [
        "Whisk together olive oil, lemon juice, garlic, oregano, paprika, salt, and pepper to make the marinade.",
        "Toss chicken cubes in the marinade and refrigerate for at least 20 minutes (ideally 2 hours).",
        "Thread marinated chicken onto metal or pre-soaked wooden skewers.",
        "Grill on medium-high heat for 12–15 minutes, turning every few minutes until lightly charred and cooked through.",
        "Warm pita breads on the grill for 30 seconds per side.",
        "Serve skewers wrapped in pita with tzatziki, cucumber, tomato, and red onion."
      ],
      nutrition: { calories: "420 kcal", protein: "40g", carbs: "32g", fat: "14g", fiber: "3g", sodium: "580mg" },
      tips: [
        "Marinate chicken for at least 2 hours (or overnight) for maximum flavor.",
        "Soak wooden skewers in water for 30 minutes before grilling to prevent burning.",
        "Make homemade tzatziki with Greek yogurt, grated cucumber, garlic, and dill.",
        "Add a squeeze of fresh lemon just before serving to brighten all the flavors."
      ]
    },
    {
      name: "Creamy Mushroom Risotto",
      description: "Rich and velvety Italian risotto loaded with earthy wild mushrooms",
      imgCover: "https://images.unsplash.com/photo-1476124369491-e7addf5db371?q=80&w=800&auto=format&fit=crop",
      prepTime: "10 min", cookTime: "35 min", totalTime: 45, servings: "4 people",
      difficulty: "Intermediate", category: "Italian", ratingsAverage: 4.7, ratingsQuantity: 291,
      ingredients: [
        "300g Arborio rice",
        "400g mixed mushrooms, sliced",
        "1 onion, finely diced",
        "3 cloves garlic, minced",
        "1 liter warm vegetable broth",
        "½ cup white wine",
        "3 tbsp butter",
        "80g Parmesan, grated",
        "Fresh thyme and parsley"
      ],
      instructions: [
        "Sauté mushrooms in butter over high heat until golden and their liquid has evaporated; set aside.",
        "In the same pan, cook onion and garlic over medium heat until soft and translucent.",
        "Add Arborio rice and stir for 2 minutes until each grain is coated and slightly translucent.",
        "Add white wine and stir until fully absorbed, then begin adding warm broth one ladle at a time.",
        "Continue adding broth, stirring frequently, for about 20 minutes until rice is creamy and just tender.",
        "Stir in cooked mushrooms, remaining butter, and Parmesan; season and garnish with fresh herbs."
      ],
      nutrition: { calories: "460 kcal", protein: "16g", carbs: "64g", fat: "16g", fiber: "4g", sodium: "640mg" },
      tips: [
        "Keep your broth warm throughout cooking — adding cold broth slows the process.",
        "Stir frequently but not constantly — occasional stirring releases the right amount of starch.",
        "The rice should be creamy (all'onda — 'wavy') when you plate it, not stiff.",
        "Add a small knob of cold butter at the very end for extra silkiness (mantecatura)."
      ]
    },
    {
      name: "Teriyaki Salmon Bowl",
      description: "Glazed teriyaki salmon over steamed rice with pickled vegetables",
      imgCover: "https://images.unsplash.com/photo-1546069901-d5bfd2cbfb1f?q=80&w=800&auto=format&fit=crop",
      prepTime: "15 min", cookTime: "20 min", totalTime: 35, servings: "2 people",
      difficulty: "Easy", category: "Asian", ratingsAverage: 4.8, ratingsQuantity: 167,
      ingredients: [
        "2 salmon fillets",
        "3 tbsp soy sauce",
        "2 tbsp mirin",
        "1 tbsp sake or dry sherry",
        "1 tbsp honey",
        "1 cup jasmine rice",
        "Edamame beans",
        "Pickled ginger and sesame seeds",
        "Sliced avocado"
      ],
      instructions: [
        "Cook jasmine rice according to package directions and keep warm.",
        "Mix soy sauce, mirin, sake, and honey together to make the teriyaki sauce.",
        "Pat salmon dry and cook in a lightly oiled pan over medium-high heat for 3–4 minutes each side.",
        "Pour teriyaki sauce over the salmon and cook until it thickens into a glossy glaze.",
        "Arrange rice in bowls and top with the glazed salmon.",
        "Add edamame, sliced avocado, pickled ginger, and a sprinkle of sesame seeds."
      ],
      nutrition: { calories: "560 kcal", protein: "38g", carbs: "58g", fat: "18g", fiber: "5g", sodium: "740mg" },
      tips: [
        "Don't move the salmon while searing — let it form a golden crust naturally.",
        "Use sushi rice for a more authentic Japanese bowl experience.",
        "The teriyaki sauce reduces quickly — watch it closely to prevent burning.",
        "Add a drizzle of Japanese mayo (Kewpie) for extra richness and flavor."
      ]
    }
  ];


  /* ============================================================
     STATE
     ============================================================ */
  let currentIndex = -1;


  /* ============================================================
     HELPERS
     ============================================================ */
  function getRandomIndex() {
    if (recipes.length <= 1) return 0;
    let next;
    do { next = Math.floor(Math.random() * recipes.length); } while (next === currentIndex);
    return next;
  }


  /* ============================================================
     RENDER
     ============================================================ */
  function displayRecipe(recipe) {
    // Photo
    var img = document.getElementById('recipe-image');
    img.src = recipe.imgCover;
    img.alt = recipe.name;

    // Rating
    document.getElementById('rating-average').textContent = recipe.ratingsAverage.toFixed(1);
    document.getElementById('rating-quantity').textContent = '(' + recipe.ratingsQuantity + ' reviews)';

    // Stats
    document.getElementById('prep-time-display').textContent = recipe.prepTime;
    document.getElementById('cook-time-display').textContent = recipe.cookTime;
    document.getElementById('servings-display').textContent = recipe.servings;

    // Badges & title
    document.getElementById('difficulty-badge').textContent = recipe.difficulty;
    document.getElementById('category-badge').textContent = recipe.category;
    document.getElementById('recipe-name').textContent = recipe.name;
    document.getElementById('recipe-description').textContent = recipe.description;

    // Time warning — toggle class instead of inline style
    document.getElementById('time-warning').classList.toggle('is-visible', recipe.totalTime > 45);

    // Ingredients
    document.getElementById('ingredients-list').innerHTML = recipe.ingredients.map(function (ing, i) {
      return '<li class="ingredient-item">' +
        '<div class="ingredient-number">' + (i + 1) + '</div>' +
        '<span class="ingredient-text">' + ing + '</span>' +
        '</li>';
    }).join('');

    // Instructions
    document.getElementById('instructions-list').innerHTML = recipe.instructions.map(function (step, i) {
      return '<div class="instruction-item">' +
        '<div class="instruction-number">' + (i + 1) + '</div>' +
        '<div class="instruction-body"><p>' + step + '</p></div>' +
        '</div>';
    }).join('');

    // Nutrition
    document.getElementById('calories-value').textContent = recipe.nutrition.calories;
    document.getElementById('protein-value').textContent  = recipe.nutrition.protein;
    document.getElementById('carbs-value').textContent    = recipe.nutrition.carbs;
    document.getElementById('fat-value').textContent      = recipe.nutrition.fat;
    document.getElementById('fiber-value').textContent    = recipe.nutrition.fiber;
    document.getElementById('sodium-value').textContent   = recipe.nutrition.sodium;

    // Tips
    document.getElementById('tips-list').innerHTML = recipe.tips.map(function (tip) {
      return '<div class="tip-item">' +
        '<i class="fa-solid fa-circle-check"></i>' +
        '<p class="tip-text">' + tip + '</p>' +
        '</div>';
    }).join('');

    // Always reset to the Ingredients tab on new recipe
    switchTab('ingredients');
  }


  /* ============================================================
     TAB SWITCHING
     ============================================================ */
  function switchTab(tabName) {
    document.querySelectorAll('.tab-content').forEach(function (el) {
      el.classList.remove('active');
    });
    document.querySelectorAll('.tab-button').forEach(function (btn) {
      btn.classList.remove('active');
    });

    var panel = document.getElementById(tabName + '-tab');
    if (panel) panel.classList.add('active');

    var btn = document.querySelector('[data-tab="' + tabName + '"]');
    if (btn) btn.classList.add('active');
  }


  /* ============================================================
     EVENT LISTENERS
     ============================================================ */
  // Tab buttons
  document.querySelectorAll('.tab-button').forEach(function (btn) {
    btn.addEventListener('click', function () {
      switchTab(this.dataset.tab);
    });
  });

  // Try Another
  document.getElementById('try-another-btn').addEventListener('click', function () {
    currentIndex = getRandomIndex();
    displayRecipe(recipes[currentIndex]);
    document.getElementById('recipe-display-section').scrollIntoView({ behavior: 'smooth', block: 'start' });
  });

  // Mobile menu toggle
  document.getElementById('mobile-menu-btn').addEventListener('click', function () {
    document.getElementById('mobile-menu').classList.toggle('is-open');
  });


  /* ============================================================
     INIT
     ============================================================ */
  currentIndex = getRandomIndex();
  displayRecipe(recipes[currentIndex]);
});
