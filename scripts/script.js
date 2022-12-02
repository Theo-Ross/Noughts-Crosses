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
const playerScore = document.querySelectorAll(".scoreCard_playerScore")

const restartButton = document.querySelector(".restart");
const resetButton = document.querySelector(".reset")

let player1Score = document.getElementById("player1Score");
let player2Score = document.getElementById("player2Score");

const body = document.querySelector("body");
const themeSwitch = document.getElementById("themeSwitch");

const Ochange = document.querySelector(".Ochange");
const Xchange = document.querySelector(".Xchange");

const easterEggX = document.querySelector(".title_X");
const easterEggO = document.querySelector(".title_O");

const screen = document.querySelector(".buttons");
const playerWinner = document.querySelector(".buttons_winner")

let previousSymbol = ""
let symbol = ""

let counter = 0;

// theme swticher
const switchThemes = (event) => {
    if (body.classList.contains("colors1")) {
        body.classList.replace("colors1", "colors2")
    } else if (body.classList.contains("colors2")) {
        body.classList.replace("colors2", "colors3")
    } else if (body.classList.contains("colors3")) {
        body.classList.replace("colors3", "colors4");
}   else if (body.classList.contains("colors4")) {
    body.classList.replace("colors4", "colors5")
}   else if (body.classList.contains("colors5")) {
    body.classList.replace("colors5", "colors6")
} else if (body.classList.contains("colors6")) {
    body.classList.replace("colors6", "colors1")
}
}

themeSwitch.addEventListener("click", switchThemes)



//playmove 

const playMove = (event) => {
    if ( event.target.innerHTML ===  "O" ) {
        window.alert("error")
    } else if ( event.target.innerHTML === "X") {
        window.alert("error")
    } 
    else {
    if (previousSymbol === ""){
        symbol = "O";
        event.target.innerHTML = symbol;
        previousSymbol ="O";
        counter ++;
    } else if (previousSymbol === "O") {
        symbol = "X"
        event.target.innerHTML = symbol;
        previousSymbol = "X";
        counter ++;
    } else if (previousSymbol === "X") {
        symbol = "O";
        event.target.innerHTML = symbol;
        previousSymbol ="O";
        counter ++;

    }}}



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
         
            if (block.toString() === "X,X,X") {
                playerWinner.innerHTML = "PLAYER 2 WINS";
                player2Score.innerHTML = (Number(player2Score.innerHTML) + 1)
                previousSymbol = ""
                confetti()
                screen.classList.add("screenShow")
            } else if (block.toString() === "O,O,O") {
              player1Score.innerHTML = (Number(player1Score.innerHTML) + 1)
              previousSymbol = ""
              playerWinner.innerHTML = "PLAYER 1 WINS"
              screen.classList.add("screenShow")
              confetti();
            } else if (counter >=9) {
                previousSymbol = "";
                playerWinner.innerHTML = "ITS A DRAW"
                screen.classList.add("screenShow")
            } else {
                console.log("continue")
            }
        })

    }
    
// add the confetti and pop-up innerHTml
    


// color function 
const changeColor = (event) => {
        if  (event.target.innerHTML === "O") {
            event.target.classList.add("Ochange");
        } else if (event.target.innerHTML === "X") {
            event.target.classList.add("Xchange");
        }    
}


// restart & reset function 
const restartGame = (event) => {
    allBlocks.forEach((block) => {
        block.classList.remove("Ochange", "Xchange")
        block.innerHTML = ""
        previousSymbol = ""
        counter = 0;
        
    })
    screen.classList.remove("screenShow");
}

const resetGame = (event) => {
    playerScore.innerHTML = "0";
    allBlocks.forEach((block) => {
        block.classList.remove("Ochange", "Xchange")
        block.innerHTML = "";
        previousSymbol = "";
        counter = "";
        
    })
    // turn this into a function?
    player1Score.innerHTML = "0";
    player2Score.innerHTML = "0";
    screen.classList.remove("screenShow")
}

restartButton.addEventListener ("click", restartGame)
resetButton.addEventListener("click", resetGame )



// Easter Egg 
const override = (event) => {
    if (event.target.innerHTML === "O") {
        playerWinner.innerHTML = "PLAYER 2 WINS";
                player2Score.innerHTML = (Number(player2Score.innerHTML) + 2)
                previousSymbol = ""
        
        allBlocks.forEach((block) => {
                    block.classList.remove("Xchange")
                    block.classList.add("Ochange")
                    block.innerHTML = "O";
                })
                screen.classList.add("screenShow")


    } else if (event.target.innerHTML === "X") {
        playerWinner.innerHTML = "PLAYER 1 WINS";
        player1Score.innerHTML = (Number(player1Score.innerHTML) + 2)
        previousSymbol = ""

        allBlocks.forEach((block) => {
            block.classList.remove("Ochange")
            block.classList.add("Xchange")
                    block.innerHTML = "X";
})
                screen.classList.add("screenShow")
}}




easterEggO.addEventListener("dblclick", override);
easterEggX.addEventListener("dblclick", override);

//click functions 

const clickFunction = (event) => {
    playMove(event)
    checkForWin(event) 
    changeColor(event)
}

block1.addEventListener("click", clickFunction);

block2.addEventListener("click", clickFunction);

block3.addEventListener("click", clickFunction);

block4.addEventListener("click", clickFunction);

block5.addEventListener("click", clickFunction);

block6.addEventListener("click", clickFunction);

block7.addEventListener("click", clickFunction);

block8.addEventListener("click", clickFunction);

block9.addEventListener("click", clickFunction);
