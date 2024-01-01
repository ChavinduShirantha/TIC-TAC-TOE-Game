let btn = document.querySelectorAll(".btn");

//Player 'O' plays first
let oTurn = true;

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
    });
});
