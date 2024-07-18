let user=0;
let comp=0;


let choices=document.querySelectorAll(".choice");
let msg=document.querySelector("#user-msg");
let box=document.querySelector(".box");
let userScore=document.querySelector("#user");
let compScore=document.querySelector("#comp");
choices.forEach((choice) => {
    choice.addEventListener("click",() => {
        let userChoice=choice.getAttribute("id");
        playGame(userChoice);
    })
});

let genCompChoice =()=>{
    let arrChoice=["rock","paper","scissor"];
    let randNum=Math.floor(Math.random()*3);
    return arrChoice[randNum];
}

let drawGame=()=>{
    console.log("Your game is draw");
    msg.innerText="Your game is draw";
}

let showWinner=(userWin)=>{
    if(userWin){
        console.log("you win");
        msg.innerText="You win!";
        box.style.backgroundColor="green";
        user++;
        userScore.innerText=user;
    } else{
        console.log("you lose");
        msg.innerText="You lose";
        box.style.backgroundColor="red";
        comp++;
        compScore.innerText=comp;
    }
}

let playGame=(userChoice)=>{
    console.log(`user choice :${userChoice} `);
    const sysChoice=genCompChoice();
    console.log(`comp choice : ${sysChoice}`);

    if(userChoice===sysChoice) {
        drawGame();
    } else{
        let userWin=true;
        if (userChoice==="rock"){
            userWin=sysChoice==="paper"? false: true;
        }
        else if(userChoice==="paper"){
            userWin=sysChoice==="rock"?true:false;
        }
        else{
            userWin=sysChoice==="paper"?true:false;
        }
        showWinner(userWin);
    }

}