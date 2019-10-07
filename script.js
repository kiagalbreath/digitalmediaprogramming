// JavaScript Document

var  fetchId= document.getElementById("menu");
console.log("Number of child nodes: " + fetchId.childNodes.length);

var fetchTags= document.getElementsByTagName("li");
console.log("Number of li links: "+ fetchTags.length);

const CTA = document.querySelector(".cta a");
const ALERT = document.querySelector("#read-alert");

CTA.classList.remove("hide");
ALERT.classList.add("hide");

function reveal(e) {
    e.preventDefault();
    CTA.classList.toggle("hide");
    ALERT.classList.toggle("hide");
}

CTA.addEventListener('click', reveal, false);
ALERT.addEventListener('click', function(){console.log("The button was clicked!")}, false);