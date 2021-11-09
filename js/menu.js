let x = document.getElementById("More_Info");

const gb = {
    n: "Hviløksbrød",
    text: "Vårt hvitløksbrød er laget med ekte italiensk ciabatta før det stekes med en med hvitlølsmør og ekte parmesan. " +
    "Etter steking drysser vi på et hint av persille. "
};
const s = {
    n: "Scampi",
    text: "Ferske Scampi stekt på høy varme i olivenolje med vårlø, hvitløk og chili. Serveres i en blanding av sitron-saft " +
    " og cherry før det drysses over cayenne-pepper for å få den ekstra sterke smaken. OBS! Veldig sterk!"
};

const h = {
    n: "Hamburger",
    text: "Vår hamburger kommer med hjemmelaget brød med sesamfrø. Vi har fbare friske, ferske grønnsaker og vår" +
        " egen hjemmelagde dressing. Selvfølgelig kommer det også med en saftig 105 g burger av norsk storfe."
};

const p = {
    n: "Pizza",
    text: "Vi lager vår Pizza på den italienske måten, men tynn, crispy bunn. Vi har vår egen saus" +
        " og legger på saftig biffkjøtt og smakfull pepperoni."
};

const kt = {
    n: "Kebabtalerken",
    text: "Vår kebabtalerken serveres med kebabkjøtt av lam, pommes frites og ferske gronnsaker. " +
        "Vi topper med vår egen hjemmelagde hvitløksdressing"
};

const pf = {
    n: "Pommes Frites",
    text: "Vår pommes frites kuttes i tynne strimler for å få den perfekte kombinasjonen av sprø " +
        "på utsiden og bløt i midten og saltes etter behov."
};

const l = {
    n: "Løkringer",
    text: "Løkringene våre er tynne for få den perkfekte sprø og crispy kanten. Serveres med bbq dip."
};

const c = {
    n: "Cola",
    text: "Helt ordinær Coca Cola, 0,33l boks"
};

const b = {
    n: "Pils",
    text: "0,5l med lys Dahls, pilsner."
};

const DishInfo = [gb,s,h,p,kt,pf,l,c,b];

function displayInfo(button_id){
    let y = document.getElementById(button_id).parentElement.parentElement.id.toString();
    let z;
    for(let i = 0; i < DishInfo.length; i++){
        if (DishInfo[i].n === y)
            z = DishInfo[i].text;
    }
    x.style.display = 'block';
    document.getElementById("Info_Heading").innerHTML=y;
    document.getElementById("Info_Paragraph").innerHTML=z;
}

function closeInfo(){
    x.style.display = 'none';
}
