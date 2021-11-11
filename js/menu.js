let x = document.getElementById("More_Info");
let sc = document.getElementById("Your_Cart")

const gb = {    //Each as an object with name, additional info and price
    n: "Hvitløksbrød",
    text: "Vårt hvitløksbrød er laget med ekte italiensk ciabatta før det stekes med hvitløksmør og ekte parmesan. " +
    "Etter steking drysser vi på et hint av persille. ",
    p: 59
};
const s = {
    n: "Scampi",
    text: "Ferske Scampi stekt på høy varme i olivenolje med vårløk, hvitløk og chili. Serveres i en blanding av sitron-saft " +
    " og cherry før det drysses over cayenne-pepper for å få den ekstra sterke smaken. OBS! Veldig sterk!",
    p: 79
};

const h = {
    n: "Hamburger",
    text: "Vår hamburger kommer med hjemmelaget brød med sesamfrø. Vi har bare friske, ferske grønnsaker og vår" +
        " egen hjemmelagde dressing. Selvfølgelig kommer det også med en saftig 105 g burger av norsk storfe.",
    p: 119
};

const p = {
    n: "Pizza",
    text: "Vi lager vår Pizza på den italienske måten, men tynn, crispy bunn. Vi har vår egen saus" +
        " og legger på saftig biffkjøtt og smakfull pepperoni.",
    p: 199
};

const kt = {
    n: "Kebabtalerken",
    text: "Vår kebabtalerken serveres med kebabkjøtt av lam, pommes frites og ferske grønnsaker. " +
        "Vi topper med vår egen hjemmelagde hvitløksdressing",
    p: 129
};

const pf = {
    n: "Pommes Frites",
    text: "Vår pommes frites kuttes i tynne strimler for å få den perfekte kombinasjonen av sprø " +
        "på utsiden og bløt i midten og saltes etter behov.",
    p: 39
};

const l = {
    n: "Løkringer",
    text: "Løkringene våre er tynne for få den perkfekte sprø og crispy kanten. Serveres med BBQ dip.",
    p: 49
};

const c = {
    n: "Cola",
    text: "Helt ordinær Coca Cola, 0,33l boks",
    p: 29
};

const b = {
    n: "Pils",
    text: "0,5l med lys Dahls, pilsner.",
    p: 69
};

const DishInfo = [gb,s,h,p,kt,pf,l,c,b];  //Arraylist with all the dishes as objects from earlier

let cartList = [];  //Your shopping cart for adding dishes
let sum = 0;        //Total sum you have to pay

function addToCart(button_id) {  //Uses the ID of the button to add the parent to cart
    let y = document.getElementById(button_id).parentElement.parentElement.parentElement.id.toString();
    for(let i = 0; i < DishInfo.length; i++){
        if (DishInfo[i].n === y) {
            cartList.push(DishInfo[i].n);
            sum += DishInfo[i].p;
        }
    }
    updateCart();
}

function removeFromCart(button_id) {    //Same, but removes it
    let y = document.getElementById(button_id).parentElement.parentElement.parentElement.id.toString();
    for (let i = 0; i < DishInfo.length; i++) {
        if (DishInfo[i].n === y){
            let index = cartList.indexOf(DishInfo[i].n);
            if(index > -1){
                cartList.splice(index, 1);
                sum -= DishInfo[i].p;
            }
        }
    }
    updateCart();
}

function updateCart() {     //Updates the actual cart that the customer can see so it mirrors our arraylist
    document.getElementById("Your_Cart_List").innerHTML="";
    for(let i = 0; i < cartList.length; i++){
        let nod = document.createTextNode(cartList[i]);
        let li = document.createElement("li");
        li.appendChild(nod);
        document.getElementById('Your_Cart_List').appendChild(li);
    }
    document.getElementById("Sum").innerHTML = "Sum: " + sum +",-";
    document.getElementById("Cart_Button").innerHTML = "&#x1F6D2 "+cartList.length;
}

function displayCart() {    //Makes content of cart visible/invisible
   sc.style.display = 'block';
}

function clearCart() {      //Resets the cart
    cartList = [];
    document.getElementById("Your_Cart_List").innerHTML="";
    document.getElementById("Sum").innerHTML = "Sum: ";
    document.getElementById("Cart_Button").innerHTML = "&#x1F6D2 "+cartList.length;
    let nod = document.createTextNode("Takk for bestillingen!");
    let li = document.createElement("li");
    li.appendChild(nod);
    document.getElementById('Your_Cart_List').appendChild(li);
}

function displayInfo(button_id){        //Uses the ID of the button to displays additional info for the selected dish.
    let y = document.getElementById(button_id).parentElement.parentElement.id.toString();
    let z;
    for(let i = 0; i < DishInfo.length; i++){
        if (DishInfo[i].n === y)
            z = DishInfo[i].text;
    }
    x.style.display = 'block';
    document.getElementById("Info_Heading").innerHTML = y;
    document.getElementById("Info_Paragraph").innerHTML = z;
}

function closeInfo(){       //Makes additional info and cart list not visible.
    x.style.display = 'none';
    sc.style.display = 'none';
}