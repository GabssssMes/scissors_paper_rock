function getComputerchoice(){
    let x=Math.floor(Math.random()*3);
    com=document.querySelector(".computer");


    if(x===0){com.textContent="✌️";return x="scissors";}
    else if(x===1){com.textContent="✋";return x="paper";}
    else {com.textContent="✊";return x="rock";}
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
function incrementcomputer(computer){
    const com=document.getElementById("2");
    com.textContent=computer;
    return;
}

function incrementplayer(player){
    const com=document.getElementById("1");
    com.textContent=player;
    return;
}

function game(firstto){
    let erg;
    let computer=0, player=0;
    const buttons=document.querySelectorAll('button');
    const ergebnis=document.querySelector(".choice");
    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            console.log(button.id);
            erg=playRound(button.id,getComputerchoice());
            console.log(erg);
            if(erg==="player"){
                player++;
                incrementplayer(player);
            }
            else if(erg==="computer"){
                computer++;
                incrementcomputer(computer);
            }
            if(player===firstto) ergebnis.textContent="You won!\nReload for a new Game!";
            else if(computer===firstto) ergebnis.textContent="You lost!\nReload for a new Game!";
            
        });
    });
}  

game(5);

