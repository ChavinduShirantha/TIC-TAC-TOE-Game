let btn = document.querySelectorAll(".btn");
let btnRestart = document.getElementById("btn-restart");
let winningMsg = document.getElementById("winning-msg");
let winContainer = document.querySelector(".win-container");
let btnNew = document.getElementById("btn-new");


//Player 'O' plays first
let oTurn = true;

let count = 0;

//Winning Pattern Array
let winningPattern = [
    // horizontal pattern
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    // vertical pattern
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    // cross pattern
    [0, 4, 8],
    [2, 4, 6],
];

const showWinner = (winner) => {
    winContainer.classList.remove("hide");
    if (winner === "O") {
        winningMsg.innerHTML = " 🥇 <br> 🎊 Winner is O 🎉 🥇";
    } else {
        winningMsg.innerHTML = " 🥇 <br> 🎊 Winner is X 🎉";
    }
};

const findWinner = () => {
    for (let i of winningPattern) {
        let [index1, index2, index3] = [
            btn[i[0]].innerText,
            btn[i[1]].innerText,
            btn[i[2]].innerText,
        ];

        if (index1 !== "" && (index2 !== "") && (index3 !== "")) {
            if (index1 === index2 && index2 === index3) {
                showWinner(index1);
            }
        }
    }
};

const showGameDraw = () => {
    winContainer.classList.remove("hide");
    winningMsg.innerHTML = "🎏 Game is Draw 🤼‍♂️";
};

//Display X/O on click
btn.forEach((element) => {
    element.addEventListener("click", () => {
        if (oTurn) {
            oTurn = false;
            //Display 0
            element.innerText = "O";
            element.disabled = true;
        } else {
            oTurn = true;
            //Display X
            element.innerText = "X";
            element.disabled = true;
        }

        count += 1;
        if (count === 9) {
            showGameDraw();
        }

        findWinner();
    });
});


const enableButtons = () => {
    btn.forEach((element) => {
        element.innerText = "";
        element.disabled = false;
    });
};

btnRestart.addEventListener("click", () => {
    count=0;
    enableButtons();
});

btnNew.addEventListener("click", () => {
    count = 0;
    enableButtons();
    winContainer.classList.add("hide");
});
