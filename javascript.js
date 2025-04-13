let userScore=0;
let compScore=0;
let draw=0;


const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#computer-score");
const drawScorePara=document.querySelector("#draw-score");

let drawGame=()=>{
    console.log("IT WAS A DRAW");
    draw++;
    drawScorePara.innerText=draw;
    msg.innerText="IT WAS A DRAW, PLAY AGAIN";
    msg.style.backgroundColor= "green";
    msg.style.color= "white";
    
};


const genCompChoice=()=>{
    let options=["rock","paper","scissors"];
    let randomIdx=Math.floor(Math.random()*3);
    return options[randomIdx];
 
};

let showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        console.log("you win");
        userScore++;
        userScorePara.innerText=userScore;
        msg.innerText=`YOU WINS THE GAME` ;
        msg.style.backgroundColor = "yellow";
        msg.style.color = "purple";
        

    }else{
        console.log("you lose");
        compScore++;
        compScorePara.innerText=compScore;
        msg.innerText=`YOU LOSES THE GAME`;
        msg.style.backgroundColor = "red";
        msg.style.color = "yellow";

    }

};


let playGame=(userChoice)=>{
    console.log("userChoice:-"+ userChoice);
    let compChoice=genCompChoice();
    console.log("compChoices:-" + compChoice);
    if(userChoice===compChoice){
        drawGame();
    }
    else{
        let userWin=true;
        if(userChoice==="rock"){
            //paper,scissors
            userWin=compChoice==="paper"? false : true;
        }
        else if(userChoice==="paper"){
            //rock,scissors
            userWin=compChoice==="scissors"? false : true;
        }
        else{
            //rock,paper
            userWin=compChoice==="rock"? false : true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
};



choices.forEach((choice)=>{
    
    choice.addEventListener(("click"),()=>{
        const userChoice=choice.getAttribute("id");
        // console.log(userChoice);
        playGame(userChoice);
    })
});
