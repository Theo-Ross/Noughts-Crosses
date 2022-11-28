const block1 = document.getElementById("b1");
const block2 = document.getElementById("b2");
const block3 = document.getElementById("b3");
const block4 = document.getElementById("b4");
const block5 = document.getElementById("b5");
const block6 = document.getElementById("b6");
const block7 = document.getElementById("b7");
const block8 = document.getElementById("b8");
const block9 = document.getElementById("b9");

const allBlocks = Array.from(document.querySelectorAll(".playArea_block"));
const playerScore = document.querySelector(".playerScore")

const restartButton = document.querySelector(".restart");
const resetButton = document.querySelector(".reset")

let player1Score = document.getElementById("player1Score");
let player2Score = document.getElementById("player2Score");



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


// Check for win function
    
    const checkForWin = (event) => {

        const winningStates = [
            [block1.innerHTML, block2.innerHTML, block3.innerHTML],
            [block4.innerHTML, block5.innerHTML, block6.innerHTML],
            [block7.innerHTML, block8.innerHTML, block9.innerHTML],
            [block1.innerHTML, block4.innerHTML, block7.innerHTML],
            [block2.innerHTML, block5.innerHTML ,block8.innerHTML],
            [block3.innerHTML, block6.innerHTML, block9.innerHTML],
            [block1.innerHTML, block5.innerHTML, block9.innerHTML],
            [block7.innerHTML, block5.innerHTML, block3.innerHTML],
            ]

        winningStates.forEach((block) => {

            if (allBlocks.forEach((i) => {
                console.log(i.innerHTML)
                i.innerHTML.includes(" ") 
            })) {
                console.log("continue")
            } 
            // need to rethink this section and how to use this if statement 
            
            
            else {
            if (block.toString() === "X,X,X") {
                window.alert("Player 2 Wins")
                player2Score.innerHTML = (Number(player2Score.innerHTML) + 1)
                previousSymbol = ""
            } else if (block.toString() === "O,O,O") {
                window.alert("Player 1 wins")
              player1Score.innerHTML = (Number(player1Score.innerHTML) + 1)
              previousSymbol = ""

            }
              else {
                console.log("draw!")
                // there is a draw bug
            }
        }
            // add the confetti and pop-up innerHTml
        })
}


// color function 

const changeColor = (event ) => {
    if (event.target.innerHTML === "O") {
       let nought = event.target.innerHTML;
        nought.fontcolor("red");
        }
}


// restart function 

const restartGame = (event) => {
    allBlocks.forEach((block) => {
        block.innerHTML = ""
        previousSymbol = ""
    })
}

const resetGame = (event) => {
    playerScore.innerHTML = "0";
    allBlocks.forEach((block) => {
        block.innerHTML = "";
    })

}

restartButton.addEventListener ("click", restartGame)

resetButton.addEventListener("click", resetGame )

//event listeners

block1.addEventListener("click", playMove)
block1.addEventListener("click", checkForWin)
block1.addEventListener("click", changeColor)

block2.addEventListener("click", playMove)
block2.addEventListener("click", checkForWin)

block3.addEventListener("click", playMove)
block3.addEventListener("click", checkForWin)


block4.addEventListener("click", playMove)
block4.addEventListener("click", checkForWin)


block5.addEventListener("click", playMove)
block5.addEventListener("click", checkForWin)


block6.addEventListener("click", playMove)
block6.addEventListener("click", checkForWin)


block7.addEventListener("click", playMove)
block7.addEventListener("click", checkForWin)


block8.addEventListener("click", playMove)
block8.addEventListener("click", checkForWin)


block9.addEventListener("click", playMove)
block9.addEventListener("click", checkForWin)



