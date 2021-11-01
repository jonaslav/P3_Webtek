import {DATA} from "../json/menuItems.js"

const ITEMS_MAIN = document.getElementById('mainCourse')

const main = DATA.main_course_items

let itemsMain = ""
//let itemsAccessory
//let itemsDessert
//let itemsDrink

// Her skal vi implementere mer av samme type logikk
for (let i in main) {
    console.log(main[i].name)
    itemsMain += "<div class='Menu_Item_Name'><h3>"+main[i].name+"</h3><h4 class='Menu_Item_Price'>" + main[i].price + "</h4></div>"
}

ITEMS_MAIN.innerHTML = itemsMain

