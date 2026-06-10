var navMenu = document.getElementById("navMenu")
var navbar = document.getElementById("navbar")

function showMenu(){
    // navMenu.classList.remove = "nav"
    navMenu.className = "nav"
    // navMenu.style.right = "0px"
    // navbar.classList.remove("sticky-top")
}

function hideMenu(){
    navMenu.className = "none"
    // navMenu.classList.add = "nav"
    // navMenu.style.right= "-300px"
} 