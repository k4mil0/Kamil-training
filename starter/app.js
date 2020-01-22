/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
var recentPlayer, current;
recentPlayer = 0;
current = 0; //current is sum in one round 

document.querySelector('.dice').style.display = 'none'; 
document.querySelector(".btn-roll").addEventListener("click", function(){
    // get a random number and set to dice
    var dice = Math.floor(6*Math.random(0,6))+1;
    var domDice = document.querySelector('.dice');
    //case if someone has still luck and don't want to hold number
    if(dice !== 1){
        //set appropriate image
        domDice.style.display = 'block';
        domDice.src = 'dice-' + dice + '.png';
        current += dice;
        recentPlayer == 0 ? document.querySelector('#current-0').textContent = current : document.querySelector('#current-1').textContent = current
    }
    //unlucky case
    else if(dice == 1){
        //change active player
        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');
        current = 0;
        //set appriopriate image
        domDice.src = 'dice-' + dice + '.png';
        
        if(recentPlayer == 0){
            document.querySelector('#current-0').textContent = current;
            recentPlayer = 1;
        }
        else{
            document.querySelector('#current-1').textContent = current;
            recentPlayer = 0;
        }
    }
});
var score_1 = 0;
var score_2 = 0;
document.querySelector('.btn-hold').addEventListener("click",function(){
    //change active player
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    //for 1st player
    if (recentPlayer == 0) {
        
        //update score
        score_1 += current;
        document.getElementById('score-0').textContent = score_1;
        if(score_1 > 100){
            console.log("Player 1 wins");
        }
        recentPlayer = 1;
        document.querySelector('#current-0').textContent = 0;
        current = 0;
        
        
    } 
    //for 2nd player
    else {
        //update score
        score_2 += current;
        document.getElementById('score-1').textContent = score_2;
        if(score_1 > 100){
            console.log("Player 2 wins");
        }
        recentPlayer = 0;
        document.querySelector('#current-1').textContent = 0;
        current = 0;
    }
    
});
