import p1_img from "./foods/burger/cheese_burger.jpg";
import p2_img from "./foods/burger/friedchicken_burger.jpg";
import p3_img from "./foods/burger/special_sause_burger.jpg";
import p4_img from "./foods/hotdog/chicken_hotdog.jpg";
import p5_img from "./foods/hotdog/special_hotdog1.jpg";
import p6_img from "./foods/hotdog/special_hotdog2.jpg";
import p7_img from "./foods/noodle/chese_noodle.jpg";
import p8_img from "./foods/noodle/pastal_noodle.jpg";
import p9_img from "./foods/noodle/prawn_noodle.jpg";
import p10_img from "./foods/noodle/seafood_noodle.jpg";
import p11_img from "./foods/noodle/special_noodle.jpg";
import p12_img from "./foods/noodle/veg_noodele.jpg";
import p13_img from "./foods/pizza/chese_pizza.jpg";
import p14_img from "./foods/pizza/chicken_pizza.jpg";
import p15_img from "./foods/pizza/veg_pizza.jpg";
import p16_img from "./foods/rice/cashew_rice.jpg";
import p17_img from "./foods/rice/pot_rice.jpg";
import p18_img from "./foods/rice/prawn_rice.jpg";
import p19_img from "./foods/rice/sosages_rice.jpg";
import p20_img from "./foods/rice/special_rice1.jpg";
import p21_img from "./foods/rice/special_rice2.jpg";
import p22_img from "./foods/soup/cashew_soup.jpg";
import p23_img from "./foods/soup/chicken_soup.jpg";
import p24_img from "./foods/soup/seafood_soup.jpg";

let all_product = [
  {
    id: 1,
    name: "Cheese Burger",
    category: "burger",
    image: p1_img,
    new_price: 5.0,
    old_price: 7.5,
    ingredients: ["Beef patty", "Cheddar cheese", "Lettuce", "Tomato", "Onion", "Pickles", "Sesame bun"],
    description: "A juicy beef patty topped with melted cheddar cheese, fresh lettuce, tomatoes, and onions, all packed in a sesame bun.",
    path: "cheese_burger"
  },
  {
    id: 2,
    name: "Fried Chicken Burger",
    category: "burger",
    image: p2_img,
    new_price: 6.0,
    old_price: 8.0,
    ingredients: ["Fried chicken breast", "Lettuce", "Tomato", "Mayonnaise", "Pickles", "Brioche bun"],
    description: "Crispy fried chicken breast layered with fresh lettuce, tomatoes, and pickles, drizzled with mayonnaise, and served in a soft brioche bun.",
    path: "fried_chicken_burger"
  },
  {
    id: 3,
    name: "Special Sauce Burger",
    category: "burger",
    image: p3_img,
    new_price: 6.5,
    old_price: 9.0,
    ingredients: ["Beef patty", "Special sauce", "Lettuce", "Tomato", "Onion", "Cheese", "Sesame bun"],
    description: "A succulent beef patty complemented by our house special sauce, with fresh lettuce, tomatoes, onions, and melted cheese in a sesame bun.",
    path: "special_sauce_burger"
  },
  {
    id: 4,
    name: "Chicken Hotdog",
    category: "hotdog",
    image: p4_img,
    new_price: 4.0,
    old_price: 6.5,
    ingredients: ["Chicken sausage", "Ketchup", "Mustard", "Onions", "Relish", "Hotdog bun"],
    description: "A grilled chicken sausage served in a soft bun with classic toppings of ketchup, mustard, onions, and relish.",
    path: "chicken_hotdog"
  },
  {
    id: 5,
    name: "Special Hotdog 1",
    category: "hotdog",
    image: p5_img,
    new_price: 5.5,
    old_price: 7.5,
    ingredients: ["Beef sausage", "Cheese sauce", "Bacon bits", "Fried onions", "Hotdog bun"],
    description: "A gourmet hotdog featuring a beef sausage topped with creamy cheese sauce, crispy bacon bits, and fried onions.",
    path: "special_hotdog_1"
  },
  {
    id: 6,
    name: "Special Hotdog 2",
    category: "hotdog",
    image: p6_img,
    new_price: 5.5,
    old_price: 7.5,
    ingredients: ["Chicken sausage", "Barbecue sauce", "Coleslaw", "Pickles", "Hotdog bun"],
    description: "A unique hotdog with a chicken sausage smothered in barbecue sauce, topped with crunchy coleslaw and pickles.",
    path: "special_hotdog_2"
  },
  {
    id: 7,
    name: "Cheese Noodle",
    category: "noodle",
    image: p7_img,
    new_price: 8.0,
    old_price: 10.5,
    ingredients: ["Noodles", "Cheddar cheese", "Cream", "Garlic", "Parsley"],
    description: "Deliciously creamy noodles tossed in a rich cheddar cheese sauce, garnished with fresh parsley.",
    path: "cheese_noodle"
  },
  {
    id: 8,
    name: "Pasta Noodle",
    category: "noodle",
    image: p8_img,
    new_price: 7.5,
    old_price: 9.5,
    ingredients: ["Pasta noodles", "Tomato sauce", "Parmesan cheese", "Basil", "Garlic"],
    description: "A fusion of Italian pasta and noodles served with a tangy tomato sauce, topped with Parmesan and fresh basil.",
    path: "pasta_noodle"
  },
  {
    id: 9,
    name: "Prawn Noodle",
    category: "noodle",
    image: p9_img,
    new_price: 9.0,
    old_price: 12.5,
    ingredients: ["Noodles", "Prawns", "Garlic", "Chili", "Lime", "Cilantro"],
    description: "Spicy noodles with succulent prawns, infused with garlic, chili, and lime, and garnished with fresh cilantro.",
    path: "prawn_noodle"
  },
  {
    id: 10,
    name: "Seafood Noodle",
    category: "noodle",
    image: p10_img,
    new_price: 9.5,
    old_price: 13.0,
    ingredients: ["Noodles", "Mixed seafood", "Garlic", "Ginger", "Soy sauce", "Spring onions"],
    description: "A delightful mix of noodles and seafood, stir-fried with garlic, ginger, and soy sauce, and topped with spring onions.",
    path: "seafood_noodle"
  },
  {
    id: 11,
    name: "Special Noodle",
    category: "noodle",
    image: p11_img,
    new_price: 8.5,
    old_price: 11.5,
    ingredients: ["Noodles", "Chicken", "Egg", "Vegetables", "Soy sauce", "Sesame oil"],
    description: "A special noodle dish with chicken, egg, and vegetables stir-fried in soy sauce and sesame oil for a flavorful experience.",
    path: "special_noodle"
  },
  {
    id: 12,
    name: "Vegetable Noodle",
    category: "noodle",
    image: p12_img,
    new_price: 7.0,
    old_price: 9.0,
    ingredients: ["Noodles", "Mixed vegetables", "Soy sauce", "Garlic", "Ginger"],
    description: "A healthy and tasty noodle dish loaded with a variety of fresh vegetables, stir-fried with garlic and ginger.",
    path: "vegetable_noodle"
  },
  {
    id: 13,
    name: "Cheese Pizza",
    category: "pizza",
    image: p13_img,
    new_price: 10.0,
    old_price: 14.0,
    ingredients: ["Pizza dough", "Mozzarella cheese", "Tomato sauce", "Oregano", "Basil"],
    description: "A classic cheese pizza with a generous layer of mozzarella, baked to perfection on a crispy crust.",
    path: "cheese_pizza"
  },
  {
    id: 14,
    name: "Chicken Pizza",
    category: "pizza",
    image: p14_img,
    new_price: 11.0,
    old_price: 15.5,
    ingredients: ["Pizza dough", "Grilled chicken", "Mozzarella", "Tomato sauce", "Bell peppers", "Onions"],
    description: "A flavorful chicken pizza topped with grilled chicken, bell peppers, onions, and a blend of cheeses.",
    path: "chicken_pizza"
  },
  {
    id: 15,
    name: "Vegetable Pizza",
    category: "pizza",
    image: p15_img,
    new_price: 9.5,
    old_price: 13.5,
    ingredients: ["Pizza dough", "Mozzarella cheese", "Tomato sauce", "Mixed vegetables"],
    description: "A veggie-lover's delight, with a mix of fresh vegetables on a classic cheese and tomato base.",
    path: "vegetable_pizza"
  },
  {
    id: 16,
    name: "Cashew Rice",
    category: "rice",
    image: p16_img,
    new_price: 7.5,
    old_price: 10.0,
    ingredients: ["Rice", "Cashews", "Vegetables", "Spices"],
    description: "Flavored rice cooked with crunchy cashews and a blend of aromatic spices.",
    path: "cashew_rice"
  },
  {
    id: 17,
    name: "Pot Rice",
    category: "rice",
    image: p17_img,
    new_price: 8.0,
    old_price: 11.0,
    ingredients: ["Rice", "Potatoes", "Onions", "Spices"],
    description: "Savory rice mixed with tender potatoes and onions, seasoned with spices.",
    path: "pot_rice"
  },
  {
    id: 18,
    name: "Prawn Rice",
    category: "rice",
    image: p18_img,
    new_price: 9.0,
    old_price: 12.5,
    ingredients: ["Rice", "Prawns", "Vegetables", "Spices"],
    description: "A delightful rice dish featuring succulent prawns and vegetables, seasoned with aromatic spices.",
    path: "prawn_rice"
  },
  {
    id: 19,
    name: "Sausages Rice",
    category: "rice",
    image: p19_img,
    new_price: 8.5,
    old_price: 11.5,
    ingredients: ["Rice", "Sausages", "Peas", "Carrots", "Spices"],
    description: "A hearty rice dish with flavorful sausages, peas, and carrots, cooked with spices.",
    path: "sausages_rice"
  },
  {
    id: 20,
    name: "Special Rice 1",
    category: "rice",
    image: p20_img,
    new_price: 9.0,
    old_price: 12.0,
    ingredients: ["Rice", "Mixed meats", "Vegetables", "Spices"],
    description: "A special rice dish with a mix of meats and vegetables, cooked with a blend of spices.",
    path: "special_rice_1"
  },
  {
    id: 21,
    name: "Special Rice 2",
    category: "rice",
    image: p21_img,
    new_price: 9.5,
    old_price: 12.5,
    ingredients: ["Rice", "Seafood", "Vegetables", "Spices"],
    description: "A special seafood rice dish with a variety of seafood and vegetables, seasoned with spices.",
    path: "special_rice_2"
  },
  {
    id: 22,
    name: "Cashew Soup",
    category: "soup",
    image: p22_img,
    new_price: 8.0,
    old_price: 11.0,
    ingredients: ["Cashews", "Chicken broth", "Onions", "Garlic", "Cream", "Spices"],
    description: "A creamy and rich soup made with cashews, chicken broth, and a blend of spices.",
    path: "cashew_soup"
  },
  {
    id: 23,
    name: "Chicken Soup",
    category: "soup",
    image: p23_img,
    new_price: 8.5,
    old_price: 12.0,
    ingredients: ["Chicken", "Vegetable broth", "Carrots", "Celery", "Onions", "Spices"],
    description: "A hearty chicken soup with vegetables and a savory broth.",
    path: "chicken_soup"
  },
  {
    id: 24,
    name: "Seafood Soup",
    category: "soup",
    image: p24_img,
    new_price: 9.0,
    old_price: 13.0,
    ingredients: ["Mixed seafood", "Seafood broth", "Potatoes", "Tomatoes", "Celery", "Spices"],
    description: "A flavorful seafood soup with a mix of fresh seafood and vegetables in a rich broth.",
    path: "seafood_soup"
  }
];

export default all_product;
