var navMenu = document.getElementById("navMenu")
var navbar = document.getElementById("navbar")

function showMenu(){
    navMenu.style.right = "0px"
    navbar.classList.remove("sticky-top")
}

function hideMenu(){
    navMenu.style.right= "-300px"
}