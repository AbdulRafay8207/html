const sideBar = document.getElementById("sidebar")
const toggleButton = document.getElementById("toggle-btn")
function toggleSidebar(){
    sideBar.classList.toggle("close")
    toggleButton.classList.toggle("rotate")
}

function toggleSubMenu(button){
    button.nextElementSibling.classList.toggle("show")
    button.classList.toggle("rotate")
}