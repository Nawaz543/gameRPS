//user input
function rock(){
    let b= compinput();
    score("rock",b);
    return "rock";
}
function paper(){
    let b=compinput();
    score("paper",b);
    return "paper";
}
function scissor(){
    let b= compinput();
    score("scissor",b);
    return "scissor";
}
//comp input
function compinput(){
    // let choise=document.getElementsByClassName("choise");
    // choise.style.transition="backgrou"
    let compchoise=["rock","paper","scissor"];
    let randinx=Math.floor(Math.random()*3);
    return compchoise[randinx];
}
//score
function score( user,comp){
   if(user==comp){
    let res=document.getElementById("result");
        res.innerText=`It's Draw, Try Again`;
        res.style.backgroundColor="rgb(22, 22, 54)";
        res.style.color="white";
   }
   else{
    let userWin=true;
    if(user=="rock"){
        userWin=comp=="paper"?false:true;
    }
    else if(user=="paper"){
        userWin=comp=="scissor"?false:true;
    }
    else if(user=="scissor"){
        userWin=comp=="rock"?false:true;
    }
    result(userWin,user,comp);
   }
}
//Result + scoreboard
let userScore=0;
let compScore=0;
function result(userWin,user,comp){
    if(userWin==true){
        userScore++;
        let res=document.getElementById("result");
        res.innerText=`You Win ! ${user} beats ${comp}`;
        let uscoreBoard=document.getElementById("user");
        uscoreBoard.innerText=userScore;
        res.style.backgroundColor="green";
    }
    else if(userWin==false){
        compScore++;
        let res=document.getElementById("result");
        res.innerText=`You Loose ! ${comp} beats ${user}`;
        let cscoreBoard=document.getElementById("comp");
        cscoreBoard.innerText=compScore;
        res.style.backgroundColor="Red";
    }
}

// setTimeout(()=>{
//     let cho=(document.getElementsByClassName("choise"));
//     cho[0].style.backgroundColor="rgb(22, 22, 54)";
//     setTimeout(()=>{
//         let cho=(document.getElementsByClassName("choise"));
//         cho[0].style.backgroundColor="white";
//         setTimeout(()=>{
//             let cho=(document.getElementsByClassName("choise"));
//             cho[1].style.backgroundColor="rgb(22, 22, 54)";
//             setTimeout(()=>{
//                 let cho=(document.getElementsByClassName("choise"));
//                 cho[1].style.backgroundColor="white";
//                 setTimeout(()=>{
//                     let cho=(document.getElementsByClassName("choise"));
//                     cho[2].style.backgroundColor="rgb(22, 22, 54)";
//                     setTimeout(()=>{
//                         let cho=(document.getElementsByClassName("choise"));
//                         cho[2].style.backgroundColor="white";
//                     },200);
//                 },200);
//             },200);
//         },200);
//     },200);
// },200);

