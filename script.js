let firstCard=10
let secondCard=17
let sum=firstCard+secondCard
let hasBlackJack= false
let isAlive=true
let message=getElementById(message-el);

function startGame(){
    if(sum <= 20) {
        message="Do you want to draw a new card"
        isAlive=true
    } 
    else if (sum===21){
    message="wohoo! you've got Blackjack";
    hasBlackJack=true
    }
    else {
        message="You're out of the game! ";
        isAlive=false
        
        }
        console.log(message);
}

