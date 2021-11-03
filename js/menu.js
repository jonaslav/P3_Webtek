import {DATA} from "../json/menuItems.js"

const ITEMS_MAIN = document.getElementById('mainCourse')
const ITEMS_ACC = document.getElementById('accessories')
const ITEMS_DESSERT = document.getElementById('dessert')
const ITEMS_DRINK = document.getElementById('drinks')

const main = DATA.main_course_items
const acc = DATA.accessories_items
const dessert = DATA.dessert_items
const drink = DATA.drinks_items

let itemsMain = ""
let itemsAccessory = ""
let itemsDessert = ""
let itemsDrink = ""

// Her skal vi implementere mer av samme type logikk
for (let i in main) {
    console.log(main[i].name)
    itemsMain += "<div class='Menu_Item_Name'><h3>"+main[i].name+"</h3><h4 class='Menu_Item_Price'>" + main[i].price + "</h4></div>"
}
for (let i in acc) {
    itemsAccessory += "<div class='Menu_Item_Name'><h3>" + acc[i].name + "</h3><h4 class='Menu_Item_Price'>"+ acc[i].price +"</h4></div>"
}

for (let i in dessert) {
    itemsDessert += "<div class='Menu_Item_Name'><h3>" + dessert[i].name + "</h3><h4 class='Menu_Item_Price'>"+ dessert[i].price +"</h4></div>"
}

for (let i in drink) {
    itemsDrink += "<div class='Menu_Item_Name'><h3>" + drink[i].name + "</h3><h4 class='Menu_Item_Price'>"+ drink[i].price +"</h4></div>"
}

ITEMS_MAIN.innerHTML = itemsMain
ITEMS_ACC.innerHTML = itemsAccessory
ITEMS_DESSERT.innerHTML = itemsDessert
ITEMS_DRINK.innerHTML = itemsDrink


