function getComputerchoice(){
    let x=Math.floor(Math.random()*3);


    if(x===0)return x="scissors";
    else if(x===1)return x="paper";
    else return x="rock";
}
function getPlayerschoice(){
    let x=prompt("Whats your choise? Scissors, paper or rock?");
    //console.log(x.toLowerCase);
    return x.toLowerCase();
}
function playRound(player,computer){
    if(player===computer) return "draw";
    switch(player){
        case("rock"):switch(computer){
            case("scissors"):return "player";
            case("paper"):return "computer";
        }
        case("scissors"): switch(computer){
            case("rock"): return "computer";
            case("paper"): return "player";
        }
        case("paper"): switch(computer){
            case("rock"): return "player";
            case("scissors"): return "computer";
        }
    }
}
function game(firstto){
let erg;
let computer=0, player=0;
while(computer<3 && player<3){
    erg=playRound(getPlayerschoice(),getComputerchoice());
    console.log(erg);
    if(erg==="draw") continue;
    else if(erg==="player") player++;
    else if(erg==="computer") computer++;
}
if(player===3) console.log("Player wins");
else console.log("Computer wins");
}

game(3);