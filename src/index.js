import {home} from "./home.js";
import {menu} from "./menu.js";
import {contact} from "./contact.js";
import {dominant} from "./home.js";
import {dominant_two} from "./menu.js";
import {dominant_three} from "./contact.js";


let main = document.getElementById("content");
let header = document.createElement("div");
let main_container = document.createElement("div");
let tabIndex = document.createElement("div");
let menuTab = document.createElement("button");
let homeTab = document.createElement("button");
let contactTab = document.createElement("button");

//Add a classList for all of the elements 
header.classList.add("header");
tabIndex.classList.add("tabindex");
menuTab.classList.add("tablink");
homeTab.classList.add("tablink");
contactTab.classList.add("tablink");
main_container.setAttribute("id", "main_container");

//Major element's text 
header.innerHTML = "እንብላ";
menuTab.innerHTML = "Menu";
homeTab.innerHTML = "Home";
contactTab.innerHTML = "Contact Us";


//Add the three different tabs 
tabIndex.append(homeTab, menuTab, contactTab);

//Append all of the things to the main Div 
main.append(header, tabIndex, main_container);



//Load all tabs and switch between tabs based on click
home();
homeTab.addEventListener("click", function viewHome() {
    dominant_two.style.visibility = "hidden";
    dominant_three.style.visibility ="hidden";
    dominant.style.visibility = "visible";
})

menu();
dominant_two.style.visibility = "hidden";
menuTab.addEventListener("click", function viewMeun(){
    dominant.style.visibility = "hidden";
    dominant_three.style.visibility ="hidden";
    dominant_two.style.visibility = "visible";

});

contact();
dominant_three.style.visibility = "hidden";
contactTab.addEventListener("click", function viewContact() {  
    dominant.style.visibility = "hidden";
    dominant_two.style.visibility = "hidden";
    dominant_three.style.visibility ="visible";
})






