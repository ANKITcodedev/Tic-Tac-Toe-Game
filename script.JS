let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGamebtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");


let turnO = true;


const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

const resetGame = () => {
    turnO = true;
    enableBoxes();
    msgContainer.classList.add("hide");
};



boxes.forEach((box) => {
   box.addEventListener("click" , () => {
        if(turnO) {
          box.innerText = "O";
          console.log(box.style.color = "#16697a");
          turnO = false;
        } else {
            box.innerText = "X";
            console.log(box.style.color = "#800e13");
            turnO = true;
        }

        box.disabled = true;
        checkWinner ();
       
    


    });
});

const disableBoxes = () => {
    for(let box of boxes) {
        box.disabled = true;
    }
};


const enableBoxes = () => {
    for(let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
};


const showWinner = (winner) => {
     msg.innerText = `CONGRATULATIONS, Winner is ${winner}`;
     msgContainer.classList.remove("hide");
     disableBoxes();
}


const checkWinner = () => {
    for(let pattern of winPatterns) {
      let pos1 = boxes[pattern[0]].innerText; 
      let pos2 = boxes[pattern[1]].innerText;
      let pos3 = boxes[pattern[2]].innerText;  

      
      if(pos1 != "" && pos2 != "" && pos3 != "") {
         if(pos1 === pos2 && pos2 === pos3) {
            console.log("winner" , pos1);

            showWinner(pos1);
         
         }
      }
    }
};


newGamebtn.addEventListener("click" , resetGame);
resetBtn.addEventListener("click" , resetGame);




/* this code is pending because of adding (Draw Function) */ 







