const block1 = document.getElementById("b1");
const block2 = document.getElementById("b2");
const block3 = document.getElementById("b3");
const block4 = document.getElementById("b4");
const block5 = document.getElementById("b5");
const block6 = document.getElementById("b6");
const block7 = document.getElementById("b7");
const block8 = document.getElementById("b8");
const block9 = document.getElementById("b9");

const allBlocks = document.querySelector(".playArea_block")

const restartButton = document.querySelector(".restart")

let previousSymbol = ""
let symbol = ""

const playMove = (event) => {
    console.log(event.target.innerHTML)
    if ( event.target.innerHTML ===  "O") {
        window.alert("error")
        // turn this into one statement
    } else if ( event.target.innerHTML === "X") {

    }
    else {
        // maybe simplify this line
    if (previousSymbol === ""){
        symbol = "O";
        event.target.innerHTML = symbol;
        previousSymbol ="O";
    } else if (previousSymbol === "O") {
        symbol = "X"
        event.target.innerHTML = symbol;
        previousSymbol = "X";
    } else if (previousSymbol === "X") {
        symbol = "O";
        event.target.innerHTML = symbol;
        previousSymbol ="O";

    }
}
}


const restartGame = (event) => {
    allBlocks.innerHTML = " "
}


block1.addEventListener("click", playMove)
block2.addEventListener("click", playMove)
block3.addEventListener("click", playMove)
block4.addEventListener("click", playMove)
block5.addEventListener("click", playMove)
block6.addEventListener("click", playMove)
block7.addEventListener("click", playMove)
block8.addEventListener("click", playMove)
block9.addEventListener("click", playMove)

restartButton.addEventListener("click", restartGame)


const winningStates = [
[block1, block2, block3]
[block4, block5, block6]
[block7, block8, block9]
[block1, block4, block7]
[block2, block5 ,block8]
[block3, block6, block9]
[block1, block5, block6]
[block7, block5, block3]
]

winningStates.forEach

