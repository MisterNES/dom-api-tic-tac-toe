let gameStatus = "";

const imgX = "https://assets.aaonline.io/Module-DOM-API/formative-project-tic-tac-toe/player-x.svg";
const imgO = "https://assets.aaonline.io/Module-DOM-API/formative-project-tic-tac-toe/player-o.svg";

let currentPlayerSymbol = "x";
let squareValues = ["", "", "", "", "", "", "", "", "",];
function checkGameStatus() {
    if (squareValues[0] === squareValues[1] && squareValues[1] === squareValues[2] && squareValues[2] !== ''){
        gameStatus = currentPlayerSymbol;
    }
    else if (squareValues[3] === squareValues[4] && squareValues[4] === squareValues[5] && squareValues[5] !== ''){
        gameStatus = currentPlayerSymbol;
    }
    else if (squareValues[6] === squareValues[7] && squareValues[7] === squareValues[8] && squareValues[8] !== ''){
        gameStatus = currentPlayerSymbol;
    }
    else if (squareValues[0] === squareValues[3] && squareValues[3] === squareValues[6] && squareValues[6] !== ''){
        gameStatus = currentPlayerSymbol;
    }
    else if (squareValues[1] === squareValues[4] && squareValues[4] === squareValues[7] && squareValues[7] !== ''){
        gameStatus = currentPlayerSymbol;
    }
    else if (squareValues[2] === squareValues[5] && squareValues[5] === squareValues[8] && squareValues[8] !== ''){
        gameStatus = currentPlayerSymbol;
    }
    else if (squareValues[2] === squareValues[4] && squareValues[4] === squareValues[6] && squareValues[6] !== ''){
        gameStatus = currentPlayerSymbol;
    }
    else if (squareValues[0] === squareValues[4] && squareValues[4] === squareValues[8] && squareValues[8] !== ''){
        gameStatus = currentPlayerSymbol;
    }
    else if (!squareValues.includes("")){
        gameStatus = 'None';
        document.getElementById('game-status').innerHTML = 'Winner : ' + gameStatus.toUpperCase();
        document.getElementById('new-game').disabled = false;
    }
    if (gameStatus !== ''){
        document.getElementById('game-status').innerHTML = 'Winner : ' + gameStatus.toUpperCase();
        document.getElementById('new-game').disabled = false;
    }
}

window.addEventListener("DOMContentLoaded", (event) => {
    const board = document.getElementById("tic-tac-toe-board");
    console.log(board);
    board.addEventListener("click", (event) => {
        if (gameStatus !== '') {
            return;
        }
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
            checkGameStatus();
            currentPlayerSymbol = "o";
        }
        else {
            const img = document.createElement("img");
            img.setAttribute("src", imgO);
            square.appendChild(img);
            squareValues[squareNum] = currentPlayerSymbol;
            checkGameStatus();
            currentPlayerSymbol = "x";
        }

    });
    const newGame = document.getElementById("new-game");
    newGame.addEventListener("click", (event) => {
        currentPlayerSymbol = "x";
        squareValues = ["", "", "", "", "", "", "", "", "",];
        gameStatus = "";
        document.getElementById('game-status').innerHTML = "";
        for (let i = 0; i < 9; i++){
            document.getElementById(`square-${i}`).innerHTML = "";
        }
        document.getElementById('new-game').disabled = true;
    });
});
