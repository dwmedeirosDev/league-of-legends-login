const login = document.querySelector(".user");
const password = document.querySelector(".password")
const arrow = document.querySelector(".arrow")
const img1 = document.querySelector (".league-1")
const img2 = document.querySelector (".league-2")

function logar(){
    if(login.value && password.value.length >= 8){
        arrow.classList.add("opacity");
        arrow.classList.remove("arrow")
        arrow.removeAttribute("disabled");
        img2.classList.remove("league-2")
        img1.classList.add("league-2")
    }else{
        arrow.classList.remove("opacity");
        arrow.classList.add("arrow");
        arrow.setAttribute("disabled", "disabled");
        img2.classList.add("league-2")
        img1.classList.remove("league-2")
    }
}

login.addEventListener("input", logar);
password.addEventListener("input", logar);