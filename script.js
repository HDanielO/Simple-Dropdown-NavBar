let arrowUp = document.querySelectorAll(".arrow_up");
let arrowDwn = document.querySelectorAll(".arrow_dwn");
let dropBox = document.querySelectorAll("._dropdwn");
let nav = document.querySelector("nav")

function dropDown(x){
  dropBox[x].classList.toggle("show")
  arrowDwn[x].classList.toggle("off_dwn")
  arrowUp[x].classList.toggle("show_up")
}

function Menu(){
  nav.classList.toggle("show_menu");
}