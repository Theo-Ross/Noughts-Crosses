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
const playerScore = document.querySelectorAll(".playerScore")

const restartButton = document.querySelector(".restart");
const resetButton = document.querySelector(".reset")

let player1Score = document.getElementById("player1Score");
let player2Score = document.getElementById("player2Score");

const body = document.querySelector("body")
const themeSwitch = document.getElementById("themeSwitch")

const Ochange = document.querySelector(".Ochange")
const Xchange = document.querySelector(".Xchange")

let previousSymbol = ""
let symbol = ""

// theme swticher
const switchThemes = (event) => {
    if (body.classList.contains("retro")) {
        body.classList.remove("retro");
        body.classList.add("light");
    } else if (body.classList.contains("light")) {
        body.classList.remove("light");
        body.classList.add("neon");
    } else if (body.classList.contains("neon")) {
        body.classList.remove("neon");
        body.classList.add("retro");
    }

    
}

themeSwitch.addEventListener("click", switchThemes)

//////

const playMove = (event) => {
    if ( event.target.innerHTML ===  "O") {
        window.alert("error")
        // turn this into one statement
    } else if ( event.target.innerHTML === "X") {
        window.alert("error")
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

    }}}


// toggle class for screen when won 

const screen = document.querySelector(".buttons");
const playerWinner = document.querySelector(".buttons_winner")


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

        const drawCheck = [
            block1.innerHTML, block2.innerHTML, block3.innerHTML, block4.innerHTML, block5.innerHTML, block6.innerHTML, block7.innerHTML, block8.innerHTML, block9.innerHTML
        ]

        
        winningStates.forEach((block) => {
         
            if (block.toString() === "X,X,X") {
                playerWinner.innerHTML = "PLAYER 2 WINS";
                player2Score.innerHTML = (Number(player2Score.innerHTML) + 1)
                previousSymbol = ""
                screen.classList.add("screenShow")
            } else if (block.toString() === "O,O,O") {
              player1Score.innerHTML = (Number(player1Score.innerHTML) + 1)
              previousSymbol = ""
              playerWinner.innerHTML = "PLAYER 1 WINS"
              screen.classList.add("screenShow")



            // } else if (drawCheck.map((i) => {
            //     console.log(i)
            //     i.innerHTML.includes(" ");
// draw bug still not fixed. Need to work out how to identify empty blocks

            // })) { 
                // console.log("You not done yet")

            }

            //   else if (block.toString() === "X,X,O" && block.toString() === "X,O,O" && block.toString() === "X,O,X" && block.toString() === "O,O,X" && block.toString() === "O,X,X" && block.toString() ==="O,X,O"){
            //     console.log("draw!")
        
            else {
                console.log("not finished")
            } 
        })
    }

            // add the confetti and pop-up innerHTml
    



// color function 
const changeColor = (event ) => {
    if (event.target.innerHTML === "O") {
        event.target.classList.add("Ochange");
        }
        else if (event.target.innerHTML === "X") {
            event.target.classList.add("Xchange");
        }
}


// restart function 

const restartGame = (event) => {
    allBlocks.forEach((block) => {
        block.innerHTML = ""
        previousSymbol = ""
        
    })
    screen.classList.remove("screenShow");
}

const resetGame = (event) => {
    playerScore.innerHTML = "0";
    allBlocks.forEach((block) => {
        block.innerHTML = "";
        
    })
    // turn this into a function?
    player1Score.innerHTML = "0";
    player2Score.innerHTML = "0";
    screen.classList.remove("screenShow")
}

restartButton.addEventListener ("click", restartGame)
resetButton.addEventListener("click", resetGame )

// turn this into one function to execute all three

const clickFunction = (event) => {
    playMove, checkForWin, changeColor
}

block1.addEventListener("click", playMove);
block1.addEventListener("click", checkForWin);
block1.addEventListener("click", changeColor);

block2.addEventListener("click", playMove);
block2.addEventListener("click", checkForWin);
block2.addEventListener("click", changeColor);


block3.addEventListener("click", playMove);
block3.addEventListener("click", checkForWin);
block3.addEventListener("click", changeColor);


block4.addEventListener("click", playMove);
block4.addEventListener("click", checkForWin);
block4.addEventListener("click", changeColor);


block5.addEventListener("click", playMove);
block5.addEventListener("click", checkForWin);
block5.addEventListener("click", changeColor);


block6.addEventListener("click", playMove);
block6.addEventListener("click", checkForWin);
block6.addEventListener("click", changeColor);


block7.addEventListener("click", playMove);
block7.addEventListener("click", checkForWin);
block7.addEventListener("click", changeColor);


block8.addEventListener("click", playMove);
block8.addEventListener("click", checkForWin)
block8.addEventListener("click", changeColor);


block9.addEventListener("click", playMove);
block9.addEventListener("click", checkForWin);
block9.addEventListener("click", changeColor);
