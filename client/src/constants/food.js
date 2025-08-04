import conf_1 from '../assets/confectioneries/confectioneries-1.jpg'
import conf_2 from '../assets/confectioneries/confectioneries-2.jpg'
import conf_3 from '../assets/confectioneries/confectioneries-3.jpg'
import conf_4 from '../assets/confectioneries/confectioneries-4.jpg'
import conf_5 from '../assets/confectioneries/confectioneries-5.jpg'
import conf_6 from '../assets/confectioneries/confectioneries-6.jpg'

import local_assaulted_meat from '../assets/local/local-assaulted.jpg'
import local_meat_meal from '../assets/local/local-meat.jpg'
import local_rice from '../assets/local/local-rice.jpg'
import local_soup from '../assets/local/local-soup.jpg'
import local_chicken from '../assets/local/local-chicken.jpg'
import local_mix_rice from '../assets/local/local-mix-rice.jpg'

import continental_1 from '../assets/continental/continental-1.jpg'
import continental_2 from '../assets/continental/continental-2.jpg'
import continental_3 from '../assets/continental/continental-3.jpg'
import continental_4 from '../assets/continental/continental-4.jpg'
import continental_5 from '../assets/continental/continental-5.jpg'
import continental_6 from '../assets/continental/continental-6.jpg'

import chinese_1 from '../assets/chinese/chinese-1.jpg'
import chinese_9 from '../assets/chinese/chinese-9.jpg'
import chinese_3 from '../assets/chinese/chinese-3.jpg'
import chinese_4 from '../assets/chinese/chinese-4.jpg'
import chinese_7 from '../assets/chinese/chinese-7.jpeg'
import chinese_6 from '../assets/chinese/chinese-6.jpg'

import vegetarian_1 from '../assets/vegetarian/vegetarian-1.jpg'
import vegetarian_2 from '../assets/vegetarian/vegetarian-2.jpg'
import vegetarian_3 from '../assets/vegetarian/vegetarian-3.jpg'
import vegetarian_4 from '../assets/vegetarian/vegetarian-4.jpg'
import vegetarian_7 from '../assets/vegetarian/vegetarian-7.jpeg'
import vegetarian_8 from '../assets/vegetarian/vegetarian-8.jpg'

import appetizer_1 from '../assets/appetizer/appetizer-1.jpg'
import appetizer_2 from '../assets/appetizer/appetizer-2.jpg'
import appetizer_3 from '../assets/appetizer/appetizer-3.jpeg'
import appetizer_4 from '../assets/appetizer/appetizer-4.jpg'
import appetizer_5 from '../assets/appetizer/appetizer-5.jpg'
import appetizer_6 from '../assets/appetizer/appetizer-6.jpeg'

import drinks_2 from '../assets/drinks/drinks-2.jpeg'
import drinks_4 from '../assets/drinks/drinks-4.jpeg'
import drinks_5 from '../assets/drinks/drinks-5.jpeg'


export const confectioneries = [
    { 
      id: 1, 
      name: 'Burger', 
      imgUrl: conf_1, 
      ratings: [1, 2, 3, 4], 
      restaurant: 'Foodies', 
      duration: '25m',
      description: 'Local cuisine for your enjoyment and delight. Try our carefully made local meal from top-class chefs around the world to quench your hunger, and thank me later.'
    },
    { 
      id: 2, 
      name: 'Sandwich', 
      imgUrl: conf_2, 
      ratings: [1, 2], 
      restaurant: 'Grubs', 
      duration: '18m',
      description: 'Local cuisine for your enjoyment and delight. Try our carefully made local meal from top-class chefs around the world to quench your hunger, and thank me later.'
    },
    { 
      id: 3, 
      name: 'Just Cake', 
      imgUrl: conf_3, 
      ratings: [1, 2, 3, 4], 
      restaurant: 'Sizzlers', 
      duration: '35m',
      description: 'Local cuisine for your enjoyment and delight. Try our carefully made local meal from top-class chefs around the world to quench your hunger, and thank me later.'
    },
    { 
      id: 4, 
      name: 'Vanilla Cake', 
      imgUrl: conf_4, 
      ratings: [1, 2, 3], 
      restaurant: 'Tasty-Foods', 
      duration: '30m',
      description: 'Local cuisine for your enjoyment and delight. Try our carefully made local meal from top-class chefs around the world to quench your hunger, and thank me later.'
    },
    { 
      id: 5, 
      name: 'Shrubbery Cake', 
      imgUrl: conf_5, 
      ratings: [1, 2, 3, 4, 5], 
      restaurant: 'Magic Fingers', 
      duration: '15m',
      description: 'Local cuisine for your enjoyment and delight. Try our carefully made local meal from top-class chefs around the world to quench your hunger, and thank me later.'
    },
    { 
      id: 6, 
      name: 'Cup Cake', 
      imgUrl: conf_6, 
      ratings: [1, 2, 3], 
      restaurant: 'The Place', 
      duration: '40m',
      description: 'Local cuisine for your enjoyment and delight. Try our carefully made local meal from top-class chefs around the world to quench your hunger, and thank me later.'
    },
];


export const local = [
    { 
      id: 1, 
      name: 'Local Assaulted Meat', 
      imgUrl: local_assaulted_meat, 
      price: '16,000', 
      duration: '25m', 
      recipe: ['Spicy', 'Buffalo', 'Cauliflower Bites'], 
      address: '123, White Heart Lane - Storms End.',
      ratings: [5], 
      restaurant: 'Delight Place', 
      description: 'A fragrant rice dish cooked in coconut milk, served with crispy anchovies, peanuts, boiled egg, spicy sambal, and cucumber. Often accompanied by fried chicken or rendang, this beloved Malaysian dish is a perfect balance of sweet, spicy, and savory flavors.'
    },
    { 
      id: 2, 
      name: 'Local Meat Meal', 
      imgUrl: local_meat_meal, 
      price: '22,700', 
      duration: '30m', 
      recipe: ['Crispy', 'Mozzarella', 'Sticks'], 
      address: '11, Peak Lane - Storms End.',
      ratings: [3], 
      restaurant: 'Yummies', 
      description: 'A flavorful Thai stir-fry made with minced meat (or tofu), holy basil, garlic, and chili, served over steamed rice with a crispy fried egg. This spicy, aromatic dish is a Thai street food favorite, known for its bold and savory flavors.'
    },
    { 
      id: 3, 
      name: 'Locally Made Rice', 
      imgUrl: local_rice, 
      price: '19,200', 
      duration: '15m', 
      recipe: ['Stuffed', 'Jalapeño', 'Poppers'], 
      address: '90, Best way Lane - Storms End.',
      ratings: [4], 
      restaurant: 'Grubs', 
      description: 'A vibrant, one-pot rice dish cooked in a tomato-based sauce with peppers, onions, and spices. Popular in Nigeria, Ghana, and Senegal, it’s often served with fried plantains and grilled chicken, delivering a bold, smoky, and slightly spicy taste.'
    },
    { 
      id: 4, 
      name: 'Local Soup Dish', 
      imgUrl: local_soup, 
      price: '13,990', 
      duration: '45m', 
      recipe: ['Spinach', 'Artichoke Dip'], 
      address: '123, White Heart Lane - Storms End.',
      ratings: [3], 
      restaurant: 'Asian Lounge', 
      description: 'A rich and hearty black bean stew slow-cooked with smoked meats, garlic, and onions. Traditionally served with rice, collard greens, and orange slices, this dish is a staple of Brazilian cuisine, offering deep, comforting flavors perfect for family gatherings.'
    },
    { 
      id: 5, 
      name: 'Local Mix Rice', 
      imgUrl: local_chicken, 
      price: '12,500', 
      duration: '25m', 
      recipe: ['Creamy', 'Tomato', 'Basil Soup'], 
      address: '45, Lekki Expressway - Storms End.',
      ratings: [2], 
      restaurant: 'Top Kitchen', 
      description: 'A South African baked dish made of spiced minced meat topped with an egg custard layer. Flavored with curry, dried fruits, and bay leaves, it has a unique sweet and savory taste, often served with yellow rice and chutney.'
    },
    { 
        id: 6, 
        name: 'Locally Prepared Chicken', 
        imgUrl: local_mix_rice, 
        price: '21,000', 
        duration: '25m', 
        recipe: ['Chicken', 'Tikka', 'Masala'], 
        address: '30, Ya Left - Storms End.',
        ratings: [5], 
        restaurant: 'Might Place', 
        description: 'A classic Filipino dish where meat (chicken or pork) is braised in soy sauce, vinegar, garlic, and black peppercorns. With a balance of tangy, salty, and savory flavors, it’s a comforting and versatile dish served with steamed rice.'
      }
];


export const continental = [
    { 
        id: 1, 
        name: 'Grilled Herb-Crusted Salmon', 
        imgUrl: continental_1, 
        price: '16,000', 
        duration: '25m', 
        recipe: ['Spicy', 'Buffalo', 'Cauliflower Bites'], 
        address: '123, White Heart Lane - Storms End.',
        ratings: [3], 
        restaurant: 'Delight Place', 
        description: 'Tender salmon fillet coated in a fragrant mix of fresh herbs, garlic, and lemon zest, then grilled to perfection. Served with a side of buttery asparagus and roasted potatoes, this dish offers a delightful balance of freshness and rich flavors.'
    },
    { 
        id: 2, 
        name: 'Creamy Mushroom Risotto', 
        imgUrl: continental_2, 
        price: '22,700', 
        duration: '30m', 
        recipe: ['Crispy', 'Mozzarella', 'Sticks'], 
        address: '11, Peak Lane - Storms End.',
        ratings: [3], 
        restaurant: 'Yummies', 
        description: 'A velvety Italian rice dish cooked slowly with Arborio rice, earthy mushrooms, and white wine. Infused with parmesan cheese and butter, this dish has a luxurious, creamy texture and deep umami flavor, making it a perfect comfort meal.'
    },
    { 
        id: 3, 
        name: 'Classic French Ratatouille', 
        imgUrl: continental_3, 
        price: '19,200', 
        duration: '15m', 
        recipe: ['Stuffed', 'Jalapeño', 'Poppers'], 
        address: '90, Best way Lane - Storms End.',
        ratings: [4], 
        restaurant: 'Grubs', 
        description: 'A vibrant, slow-cooked vegetable medley featuring zucchini, eggplant, bell peppers, and tomatoes. Infused with garlic, olive oil, and fresh herbs, this Provençal dish is light yet flavorful, offering a perfect balance of sweetness and tanginess.'
    },
    { 
        id: 4, 
        name: 'Spanish Paella Valenciana', 
        imgUrl: continental_4, 
        price: '13,990', 
        duration: '45m', 
        recipe: ['Spinach', 'Artichoke Dip'], 
        address: '123, White Heart Lane - Storms End.',
        ratings: [5], 
        restaurant: 'Asian Lounge', 
        description: 'A traditional Spanish rice dish infused with saffron, featuring a mix of vegetables, bell peppers, and sometimes seafood or meat. Cooked in a shallow pan, this dish offers a rich, aromatic, and smoky flavor with every bite.'
    },
    { 
        id: 5, 
        name: 'English Shepherd’s Pie', 
        imgUrl: continental_5, 
        price: '12,500', 
        duration: '25m', 
        recipe: ['Creamy', 'Tomato', 'Basil Soup'], 
        address: '45, Lekki Expressway - Storms End.',
        ratings: [3], 
        restaurant: 'Top Kitchen', 
        description: 'A comforting British classic made with a savory filling of seasoned vegetables and lentils (or minced meat), topped with creamy mashed potatoes. Baked until golden and crispy, this hearty dish is a perfect balance of rich flavors and comforting textures.'
    },
    { 
        id: 6, 
        name: 'Greek Moussaka', 
        imgUrl: continental_6, 
        price: '21,000', 
        duration: '25m', 
        recipe: ['Chicken', 'Tikka', 'Masala'], 
        address: '30, Ya Left - Storms End.',
        ratings: [2], 
        restaurant: 'Might Place', 
        description: 'A layered casserole featuring spiced eggplant, zucchini, and potatoes, smothered in a rich tomato sauce and creamy béchamel. This Greek specialty is baked to golden perfection, offering a satisfying blend of textures and Mediterranean flavors.'
    }
];
      

export const chinese = [
  { 
    id: 1, 
    name: 'Kung Pao Chicken', 
    imgUrl: chinese_1, 
    price: '16,000', 
    duration: '25m', 
    recipe: ['Spicy', 'Buffalo', 'Cauliflower Bites'], 
    address: '123, White Heart Lane - Storms End.',
    ratings: [4], 
    restaurant: 'Delight Place', 
    description: 'A Sichuan classic, Kung Pao Chicken features tender chicken stir-fried with crunchy peanuts, dried chilies, and bell peppers in a savory, spicy, and slightly sweet sauce. Infused with garlic, ginger, and soy sauce, it delivers a bold and addictive flavor.'
  },
  { 
    id: 2, 
    name: 'Peking Duck', 
    imgUrl: chinese_9, 
    price: '22,700', 
    duration: '30m', 
    recipe: ['Crispy', 'Mozzarella', 'Sticks'], 
    address: '11, Peak Lane - Storms End.',
    ratings: [5], 
    restaurant: 'Yummies', 
    description: 'A Beijing delicacy, Peking Duck is famous for its crispy, golden-brown skin and succulent meat. Traditionally served with thin pancakes, hoisin sauce, and scallions, each bite is a perfect balance of rich, smoky flavors and delicate textures. A true culinary masterpiece!'
  },
  { 
    id: 3, 
    name: 'Dim Sum (Assorted Dumplings)', 
    imgUrl: chinese_3, 
    price: '19,200', 
    duration: '15m', 
    recipe: ['Stuffed', 'Jalapeño', 'Poppers'], 
    address: '90, Best way Lane - Storms End.',
    ratings: [5], 
    restaurant: 'Grubs', 
    description: 'Lasagna al Forno – An Italian layered pasta dish with rich meat sauce, creamy béchamel, and melted cheese, baked to perfection.'
  },
  { 
    id: 4, 
    name: 'Mapo Tofu', 
    imgUrl: chinese_4, 
    price: '13,990', 
    duration: '45m', 
    recipe: ['Spinach', 'Artichoke Dip'], 
    address: '123, White Heart Lane - Storms End.',
    ratings: [4], 
    restaurant: 'Asian Lounge', 
    description: 'A fiery Sichuan dish featuring silky tofu and minced pork in a spicy, numbing chili-bean sauce. The bold flavors of Sichuan peppercorns, garlic, and fermented black beans create a mouthwatering, umami-rich dish that pairs perfectly with steamed rice.'
  },
  { 
    id: 5, 
    name: 'Hot and Sour Soup', 
    imgUrl: chinese_6, 
    price: '12,500', 
    duration: '25m', 
    recipe: ['Creamy', 'Tomato', 'Basil Soup'], 
    address: '45, Lekki Expressway - Storms End.',
    ratings: [4], 
    restaurant: 'Top Kitchen', 
    description: 'This comforting soup balances tangy vinegar, spicy white pepper, and rich umami flavors. Filled with tofu, mushrooms, bamboo shoots, and egg ribbons, it offers a deliciously warming experience that awakens the senses with every spoonful.'
  },
  { 
    id: 6, 
    name: 'Chow Mein', 
    imgUrl: chinese_7, 
    price: '21,000', 
    duration: '25m', 
    recipe: ['Chicken', 'Tikka', 'Masala'], 
    address: '30, Ya Left - Storms End.',
    ratings: [5], 
    restaurant: 'Might Place', 
    description: 'A stir-fried noodle dish packed with crisp vegetables, tender meat or tofu, and a savory soy-based sauce. The noodles are pan-fried to a slight crisp, creating a delightful texture contrast. A beloved dish enjoyed in Chinese cuisine worldwide.'
  }
];


export const vegetarian = [
  { 
    id: 1, 
    name: 'Paneer Tikka Masala', 
    imgUrl: vegetarian_1, 
    price: '16,000', 
    duration: '25m', 
    recipe: ['Spicy', 'Buffalo', 'Cauliflower Bites'], 
    address: '123, White Heart Lane - Storms End.',
    ratings: [3], 
    restaurant: 'Delight Place', 
    description: 'A rich and creamy North Indian curry featuring grilled paneer cubes simmered in a spiced tomato and cashew-based gravy. Infused with aromatic spices and finished with fresh cream, this dish pairs perfectly with naan or steamed basmati rice.'
  },
  { 
    id: 2, 
    name: 'Mediterranean Falafel Wrap', 
    imgUrl: vegetarian_2, 
    price: '22,700', 
    duration: '30m', 
    recipe: ['Crispy', 'Mozzarella', 'Sticks'], 
    address: '11, Peak Lane - Storms End.',
    ratings: [4], 
    restaurant: 'Yummies', 
    description: 'Crispy, golden falafels wrapped in soft pita bread with crunchy lettuce, juicy tomatoes, and tangy pickles. Drizzled with creamy tahini sauce and a hint of garlic, this wholesome wrap is packed with protein and Mediterranean flavors, perfect for a fulfilling vegetarian meal.'
  },
  { 
    id: 3, 
    name: 'Thai Green Curry with Tofu', 
    imgUrl: vegetarian_3, 
    price: '19,200', 
    duration: '15m', 
    recipe: ['Stuffed', 'Jalapeño', 'Poppers'], 
    address: '90, Best way Lane - Storms End.',
    ratings: [2], 
    restaurant: 'Grubs', 
    description: 'A fragrant and creamy coconut curry loaded with tofu, bell peppers, and zucchini. Infused with Thai green curry paste, lemongrass, and kaffir lime leaves, this dish delivers a perfect balance of heat, sweetness, and umami, best enjoyed with jasmine rice.'
  },
  { 
    id: 4, 
    name: 'Stuffed Bell Peppers with Quinoa', 
    imgUrl: vegetarian_4, 
    price: '13,990', 
    duration: '45m', 
    recipe: ['Spinach', 'Artichoke Dip'], 
    address: '123, White Heart Lane - Storms End.',
    ratings: [5], 
    restaurant: 'Asian Lounge', 
    description: 'Vibrant bell peppers stuffed with a hearty mixture of quinoa, black beans, tomatoes, and spices, then baked to perfection. Topped with melted cheese or a dairy-free alternative, this dish is a nutritious and colorful delight with every bite.'
  },
  { 
    id: 5, 
    name: 'Spinach and Ricotta Stuffed Shells', 
    imgUrl: vegetarian_7, 
    price: '12,500', 
    duration: '25m', 
    recipe: ['Creamy', 'Tomato', 'Basil Soup'], 
    address: '45, Lekki Expressway - Storms End.',
    ratings: [3], 
    restaurant: 'Top Kitchen', 
    description: 'Jumbo pasta shells filled with a creamy ricotta and spinach mixture, baked in a rich tomato sauce and topped with mozzarella cheese. This Italian-inspired dish is comfort food at its best, offering a satisfying combination of cheesy, herby, and tangy flavors.'
  },
  { 
    id: 6, 
    name: 'Spiced Chickpea and Sweet Potato Curry', 
    imgUrl: vegetarian_8, 
    price: '21,000', 
    duration: '25m', 
    recipe: ['Chicken', 'Tikka', 'Masala'], 
    address: '30, Ya Left - Storms End.',
    ratings: [4], 
    restaurant: 'Might Place', 
    description: 'A wholesome and aromatic curry featuring tender sweet potatoes and protein-packed chickpeas simmered in a fragrant tomato and coconut sauce. Infused with cumin, coriander, and turmeric, this dish is both hearty and comforting, perfect for a cozy vegetarian meal.'
  }
];


export const appetizer = [
  { 
    id: 1, 
    name: 'Crispy Zucchini Fritters', 
    imgUrl: appetizer_1, 
    price: '16,000', 
    duration: '25m', 
    recipe: ['Spicy', 'Buffalo', 'Cauliflower Bites'], 
    address: '123, White Heart Lane - Storms End.',
    ratings: [2], 
    restaurant: 'Delight Place', 
    description: 'Golden-brown zucchini fritters, lightly seasoned and pan-fried to perfection. These crispy bites have a tender, flavorful center and are served with a cool garlic yogurt dip. A delightful balance of crunch and freshness, perfect for any appetizer spread.'
  },
  { 
    id: 2, 
    name: 'Spicy Buffalo Cauliflower Bites', 
    imgUrl: appetizer_2, 
    price: '22,700', 
    duration: '30m', 
    recipe: ['Crispy', 'Mozzarella', 'Sticks'], 
    address: '11, Peak Lane - Storms End.',
    ratings: [1], 
    restaurant: 'Yummies', 
    description: 'Crispy, oven-baked cauliflower florets tossed in a zesty buffalo sauce. These bite-sized treats pack a bold, tangy heat and are served with creamy ranch or blue cheese dressing, making them a perfect vegetarian alternative to classic buffalo wings.'
  },
  { 
    id: 3, 
    name: 'Stuffed Mushroom Caps', 
    imgUrl: appetizer_3, 
    price: '19,200', 
    duration: '15m', 
    recipe: ['Stuffed', 'Jalapeño', 'Poppers'], 
    address: '90, Best way Lane - Storms End.',
    ratings: [3], 
    restaurant: 'Grubs', 
    description: 'Juicy mushroom caps filled with a savory mixture of cream cheese, garlic, and herbs, then baked until golden and bubbly. Each bite is rich, creamy, and bursting with umami, making them an irresistible appetizer for any gathering.'
  },
  { 
    id: 4, 
    name: 'Crispy Cheese-Stuffed Jalapeño Poppers', 
    imgUrl: appetizer_4, 
    price: '13,990', 
    duration: '45m', 
    recipe: ['Spinach', 'Artichoke Dip'], 
    address: '123, White Heart Lane - Storms End.',
    ratings: [4], 
    restaurant: 'Asian Lounge', 
    description: 'Fresh jalapeños filled with a creamy cheese blend, coated in a crispy golden breadcrumb crust, and deep-fried to perfection. The perfect combination of heat and creaminess, these poppers deliver a satisfying crunch with every spicy, cheesy bite.'
  },
  { 
    id: 5, 
    name: 'Garlic Butter Shrimp Skewers', 
    imgUrl: appetizer_5, 
    price: '12,500', 
    duration: '25m', 
    recipe: ['Creamy', 'Tomato', 'Basil Soup'], 
    address: '45, Lekki Expressway - Storms End.',
    ratings: [5], 
    restaurant: 'Top Kitchen', 
    description: 'Juicy shrimp marinated in a flavorful garlic butter sauce, skewered, and grilled to perfection. Lightly seasoned with herbs and a splash of lemon, these skewers are a simple yet elegant appetizer packed with bold, fresh flavors.'
  },
  { 
    id: 6, 
    name: 'Mini Caprese Skewers', 
    imgUrl: appetizer_6, 
    price: '21,000', 
    duration: '25m', 
    recipe: ['Chicken', 'Tikka', 'Masala'], 
    address: '30, Ya Left - Storms End.',
    ratings: [3], 
    restaurant: 'Might Place', 
    description: 'A fresh and colorful appetizer featuring cherry tomatoes, mozzarella balls, and fresh basil leaves drizzled with balsamic glaze. These bite-sized skewers are a refreshing and elegant starter that perfectly balances creamy, tangy, and herby flavors.'
  }
];


export const drinks = [
    {
      id: 1,
      name: 'Fruity Juice',
      price: '7000',
      duration: '15m',
      recipe: 'Orange, Apple',
      address: 'Berger place Abuja',
      ratings: 3,
      restaurant: 'Coldstone',
      description: 'Fruity Juice drink for a cool day. Start your day with this lovely cool drink  for your soul',
      imgUrl: drinks_2
    },
    {
      id: 2,
      name: 'Griffy Red Wine',
      price: '9500',
      duration: '10m',
      recipe: 'Sweetener, Grapes, Dates',
      address: '19, Modolian Place, Epe Lagos',
      ratings: 4,
      restaurant: 'Dominos',
      description: 'Griffy Red Wine for the very occation, Live the experience and celebrate that occasion with Griffy Red Wine while you won\'t regrat your choice',
      imgUrl: drinks_4,
    },
    {
      id: 3,
      name: 'Decafinated Coffee ',
      price: '9500',
      duration: '10m',
      recipe: 'Cream, Coffee blend',
      address: '12, King Avenue Lagos',
      ratings: 4,
      restaurant: 'Dominos',
      description: 'Decafinated Coffee with creamy look and aroma to put you in the mode for the morning. No sugar and best for reducing your colestoral ',
      imgUrl: drinks_5
    }
  ]


// export const favorites = [
//   { 
//     id: 2, 
//     name: 'Peking Duck', 
//     price: '22,700', 
//     duration: '30m', 
//     recipe: ['Crispy', 'Mozzarella', 'Sticks'], 
//     address: '11, Peak Lane - Storms End.', 
//     ratings: [5], 
//     restaurant: 'Yummies', 
//     description: 'A Beijing delicacy, Peking Duck is famous for its crispy, golden-brown skin and succulent meat. Traditionally served with thin pancakes, hoisin sauce, and scallions, each bite is a perfect balance of rich, smoky flavors and delicate textures. A true culinary masterpiece!',
//     imgUrl: '/../src/assets/chinese/chinese-9.jpg'
//   },
//   { 
//     id: 2, 
//     name: 'Chocolate Truffles', 
//     price: '22,700', 
//     duration: '30m', 
//     recipe: ['Crispy', 'Mozzarella', 'Sticks'], 
//     address: '11, Peak Lane - Storms End.', 
//     ratings: [5], 
//     restaurant: 'Yummies', 
//     description: 'Decadent bite-sized treats made from smooth, creamy ganache, coated in cocoa powder, nuts, or chocolate. These luxurious confections melt in your mouth, delivering an intense chocolate flavor with a velvety texture, perfect for indulgence or gifting.',
//     imgUrl: '/../src/assets/confectioneries/confectioneries-2.jpg'
//   },
//   { 
//     id: 4, 
//     name: 'Local Soup Dish', 
//     price: '13,990', 
//     duration: '45m', 
//     recipe: ['Spinach', 'Artichoke Dip'], 
//     address: '123, White Heart Lane - Storms End.', 
//     ratings: [3], 
//     restaurant: 'Asian Lounge', 
//     description: 'A rich and hearty black bean stew slow-cooked with smoked meats, garlic, and onions. Traditionally served with rice, collard greens, and orange slices, this dish is a staple of Brazilian cuisine, offering deep, comforting flavors perfect for family gatherings.',
//     imgUrl: '/../src/assets/local/local-soup.jpg'
//   },
//   { 
//     id: 4, 
//     name: 'Crispy Cheese-Stuffed Jalapeño Poppers', 
//     price: '13,990', 
//     duration: '45m', 
//     recipe: ['Spinach', 'Artichoke Dip'], 
//     address: '123, White Heart Lane - Storms End.', 
//     ratings: [4], 
//     restaurant: 'Asian Lounge', 
//     description: 'Fresh jalapeños filled with a creamy cheese blend, coated in a crispy golden breadcrumb crust, and deep-fried to perfection. The perfect combination of heat and creaminess, these poppers deliver a satisfying crunch with every spicy, cheesy bite.',
//     imgUrl: '/../src/assets/appetizer/appetizer-4.jpg'
//   }
// ];


export const users = [
  { 
    id: '51ad', 
    name: 'Jane Doe', 
    email: 'janedoe@delight.com', 
    password: 'jane@123', 
    phone: '08013243546'
  },
  { 
    id: '4ac0', 
    name: 'Richard', 
    email: 'richard@you.co', 
    password: 'richard@123', 
    phone: '09098734534'
  },
  { 
    id: 'ca53', 
    name: 'Emily Rhodes', 
    email: 'emily@game.com', 
    password: 'emily@123', 
    phone: '08087654321'
  },
  { 
    id: '5522', 
    name: 'Test', 
    email: 'test@game.com', 
    password: '123456', 
    phone: '08035467823'
  },
  { 
    id: '0fab', 
    name: 'Emily Rhodes', 
    email: 'emily@game.com', 
    password: 'emily@123', 
    phone: '09024315687'
  }
];
