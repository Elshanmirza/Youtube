const home = document.getElementById('home')
const sidebarDiv = document.getElementById('sidebar')
const iconbar = document.getElementById('leftside')

let sidebarAciqdir = false

home.addEventListener('click', ()=>(sidebarAciqdir ? sidebariBagla() : sidebariAc()))

function sidebariBagla(){
    sidebarAciqdir = false
    sidebarDiv.style.display = "none"
    iconbar.style.display = "block"
}

function sidebariAc(){
    sidebarAciqdir = true
    sidebarDiv.style.display = "block"
    iconbar.style.display = "none"
}

document.getElementById("sidebarDiv").style.transition = "all 2s";
document.getElementById("iconbar").style.transition = "all 2s";

