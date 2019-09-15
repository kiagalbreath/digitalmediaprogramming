// JavaScript Document

var  fetchId= document.getElementById("menu");
console.log("Number of child nodes: " + fetchId.childNodes.length);

var fetchTags= document.getElementsByTagName("li");
console.log("Number of li links: "+ fetchTags.length);

var newItem= document.createElement("li");

var newText= document.createTextNode("New List Item");

fetchId.appendChild(newItem);
fetchId.appendChild(newText);





