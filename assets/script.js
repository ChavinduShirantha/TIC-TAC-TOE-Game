let btn = document.querySelectorAll(".btn");
let btnRestart = document.getElementById("btn-restart");
let winningMsg = document.getElementById("winning-msg");
let winContainer = document.querySelector(".win-container");


//Player 'O' plays first
let oTurn = true;

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
        winningMsg.innerHTML = "🎊 Winner is O 🎉";
    } else {
        winningMsg.innerHTML = "🎊 Winner is X 🎉";
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
    enableButtons();
});
