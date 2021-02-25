const button = document.getElementById("btn");
const body = document.querySelector("body");
const colours = ["blue", "green", "grey", "yellow", "orange"];

const colourPick = function(){
    return colours[Math.floor(Math.random()*colours.length)];
}

button.addEventListener("click",function(){
    body.style.backgroundColor = colourPick();
});