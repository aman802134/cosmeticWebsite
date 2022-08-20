const menu = document.getElementById("menu-icon");
const navbar = document.getElementById("navbar");
menu.onclick = () => {
    navbar.classList.toggle("active");
    menu.classList.toggle("move");
}