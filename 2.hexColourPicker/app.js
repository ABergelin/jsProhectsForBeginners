// let hexNumber = document.querySelector('body').style.backgroundColor;
// let hexNumber = document.body.style.backgroundColor;
// console.log(hexNumber);
// alert(document.body.style.backgroundColor);

// document.querySelector('p').textContent = '3';

const hexNumber = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F']

function generateHexColour(){
    let hex = "#";
    for (let i = 0; i < 6; i++) {
        hex += hexNumber[Math.floor(Math.random()*hexNumber.length)];
    }
    document.body.style.backgroundColor = hex;
    document.querySelector('p').textContent = hex;
}



// function changeBackground(){
//     document.body.style.backgroundColor = '#456';
// }

let button = document.getElementById('btn');
button.addEventListener("click", function(){
    generateHexColour();
});
