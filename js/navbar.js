
const BODY = document.getElementById("Global_Body")

function rederNav() {
    BODY.innerHTML = '' +
        '<header id="Top_Header">' +
            '<h1>Gløs Takeaway</h1>' +
            '<label class="Burger_Icon" for="chk">' +
                '<i class="fas fa-bars"></i>' +
            '</label>' +
        '</header>' +
        '<input type="checkbox" id="chk">' +
        '<nav id="navbar">\n' +
    '            <a href="index.html">Forside</a>\n' +
    '            <a href="menu.html">Meny</a>\n' +
    '            <a href="booking.html">Booking</a>\n' +
    '            <a href="gallery.html">Galleri</a>\n' +
    '            <a href="info.html">Info</a>\n' +
        '</nav>'
}
rederNav()

//For responsive navbar using javascript
/*
const NAVBAR = document.getElementById('navbar')
function renderResponsiveNav(){
    if (NAVBAR.id === 'navbar') {
        NAVBAR.id += '_responsive'
    }else {
        NAVBAR.id = 'navbar'
    }
}*/
