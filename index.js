let foods=require('./food.json')

//1. list all the food items
let allFood=foods.map((item)=>item.foodname)
// console.log(allFood);

// 2.list all the food items with category vegetables
let vegetables=foods.filter((item)=>item.category==="Vegetable").map((item)=>item.foodname)
// console.log(vegetables);

// 3.list all the food items with category fruits
let fruits=foods.filter((item)=>item.category==="Fruit").map((item)=>item.foodname)
// console.log(fruits);

// 4. list all the food items with category proteins
let protiens=foods.filter((item)=>item.category==="Protein").map((item)=>item.foodname)
// console.log(protiens);

// 5 list all the food items with category nuts
let nuts=foods.filter((item)=>item.category==="Nuts").map((item)=>item.foodname)
// console.log(nuts);

// 6. list all the food items with category dairy
let dairy=foods.filter((item)=>item.category==="Dairy").map((item)=>item.foodname)
// console.log(dairy);

// 7 list all the food items with category grains
let grains=foods.filter((item)=>item.category==="Grain").map((item)=>item.foodname)
// console.log(grains);


// 8.above 100 calories
let above100Calory=foods.filter(item=>item.calorie>100).map(item=>item.foodname)
// console.log(above100Calory);

// 9. below 100 calories
let below100Calory=foods.filter(item=>item.calorie<100).map(item=>item.foodname)
// console.log(below100Calory);

// 10. highest to lowest protein
let highestProtein=foods.sort((a,b)=>b.protiens-a.protiens)
// console.log(highestProtein);

// 11. highest to lowest protein
let lowestCarbs=foods.sort((a,b)=>a.cab-b.cab)
// console.log(lowestCarbs);