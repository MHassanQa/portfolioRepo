function darkmode() {
var background = document.body;
background.classList.toggle("body-dark");

var modeToggler = document.getElementById("mode-toggler");
modeToggler.classList.toggle("btn-darkmode_light");

var icon = document.getElementById("icon");
icon.classList.toggle("invert-img");


var logo = document.getElementById("header-logo");
logo.classList.toggle("light-img");

var humb = document.getElementById("humb");
humb.classList.toggle("invert-img")
}