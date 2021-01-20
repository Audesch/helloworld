"use strict";
var button_mobile = document.querySelector(".btn--mobile");
button_mobile.addEventListener("click", dark);
var button = document.querySelector(".btn--desktop");
button.addEventListener("click", dark);

var attribute = localStorage.getItem("data-theme");

if(attribute == "dark"){
    document.documentElement.setAttribute("data-theme", "dark");

}else{
    document.documentElement.setAttribute("data-theme", "light");
}

function dark(){
    var update = document.documentElement.getAttribute("data-theme");
    if(update == "dark"){
        document.documentElement.setAttribute("data-theme", "light");
        localStorage.setItem("data-theme", "light");
    }else{
        document.documentElement.setAttribute("data-theme", "dark");
        localStorage.setItem("data-theme", "dark");
    }
}