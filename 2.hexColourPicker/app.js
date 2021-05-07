// Getting button element
let button = document.getElementById('btn');
const hexNumber = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F']

function generateHexColour(){
    let hex = "#";
    // generating hexadecimal number at random
    for (let i = 0; i < 6; i++) {
        hex += hexNumber[Math.floor(Math.random()*hexNumber.length)];
    }
    document.body.style.backgroundColor = hex;
    document.querySelector('#hexValue').textContent = hex;
}

button.addEventListener("click", function(){
    generateHexColour();
});
