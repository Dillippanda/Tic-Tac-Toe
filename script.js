let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector(".box1");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg")

let turn = true;

const winPatterns = [
    [0, 1, 2], [0, 3, 6], [0, 4, 8], [1, 4, 7], [2, 5, 8], [2, 4, 6], [3, 4, 5], [6, 7, 8]

]
const resetGame = () => {
    turn = true;
    enableBox();
    msgContainer.classList.add("hide");
    count = 0;
}
let count = 0;
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        count++;
        

        if (turn) {

            box.innerHTML = "X";

            turn = false;
            box.style.color="rgb(198, 49, 244)";
        }
        else {
            box.innerHTML = "O";
            turn = true;
            box.style.color="rgb(235, 184, 32)";
        }
        box.disabled = true;
        if (count <= 9) {
            checkWinner(count);
            
        }
    });
});
const disableBox = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
};
const enableBox = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerHTML = "";
    }
};
const showWinner = (winner) => {
    msg.innerHTML = `Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBox();
}

const checkWinner = (count) => {
    let fg=0;
    for (let pattern of winPatterns) {
        let pos1Val = boxes[pattern[0]].innerHTML;
        let pos2Val = boxes[pattern[1]].innerHTML;
        let pos3Val = boxes[pattern[2]].innerHTML;
        if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
            if (pos1Val === pos2Val && pos2Val === pos3Val) {

fg=1;
                showWinner(pos1Val)
            }
            else if(count==9 && fg!=1){
                msg.innerHTML = `Match Draw`;
                msgContainer.classList.remove("hide");
                disableBox();
            }
        }
       
       
         
    }

    
}
newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);
