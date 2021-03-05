const imgX = "https://assets.aaonline.io/Module-DOM-API/formative-project-tic-tac-toe/player-x.svg";
const imgO = "https://assets.aaonline.io/Module-DOM-API/formative-project-tic-tac-toe/player-o.svg";

let currentPlayerSymbol = "x";
let squareValues = ["", "", "", "", "", "", "", "", "",];

window.addEventListener("DOMContentLoaded", (event) => {
    const board = document.getElementById("tic-tac-toe-board");
    console.log(board);
    board.addEventListener("click", (event) => {
        const square = event.target;
        console.log(square);
        console.log(square.id);
        if (!square.id.startsWith("square-")){
            return;
        }
        const squareNum = Number.parseInt(square.id[square.id.length - 1]);
        console.log(squareNum);
        console.log(squareValues);
        // if (squareValues[squareNum]){
        //     return;
        // }
        if (currentPlayerSymbol === "x"){
            const img = document.createElement("img");
            img.setAttribute("src", imgX);
            square.appendChild(img);
            squareValues[squareNum] = currentPlayerSymbol;
            currentPlayerSymbol = "o";
        }
        else {
            const img = document.createElement("img");
            img.setAttribute("src", imgO);
            square.appendChild(img);
            squareValues[squareNum] = currentPlayerSymbol;
            currentPlayerSymbol = "x";
        }
    });
});
