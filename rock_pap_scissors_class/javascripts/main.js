import $ from 'jquery';

(function(){

  class Game {
    constructor(){
      this.playerScore = 0;
      this.computerScore = 0;
      this.hands = ['rock','paper','scissors'];
    }
    winGame(playerHand,computerHand){
      this.playerScore+=1;
      $('.roundoutcome').text(`${playerHand} beats ${computerHand}, you win!`);
      $('.playerscore .score').text(this.playerScore);
    }
    loseGame(playerHand,computerHand){
      this.computerScore+=1;
      $('.roundoutcome').text(`${computerHand} beats ${playerHand}, you lose!`);
      $('.computerscore .score').text(this.computerScore);
    }
    tieGame(playerHand,computerHand){
      $('.roundoutcome').text(`Tie Game.`);
    }
    computerRoll(){
      // random number between 0-2
      let randomNumber = Math.floor((Math.random() * 3));
      return this.hands[randomNumber];
    }
    decideWinner(playerHand, computerHand){
      if(playerHand === 'rock'){
        if(computerHand === 'paper'){
          this.loseGame(playerHand,computerHand);
        }else if(computerHand==='scissors'){
          this.winGame(playerHand,computerHand);
        }else{
          this.tieGame(playerHand,computerHand);
        }
      }else if(playerHand === 'paper'){
        if(computerHand === 'paper'){
          this.tieGame(playerHand,computerHand);
        }else if(computerHand==='scissors'){
          this.winGame(playerHand,computerHand);
        }else{
          this.loseGame(playerHand,computerHand);
        }
      }else if(playerHand === 'scissors'){
        if(computerHand === 'paper'){
          this.winGame(playerHand,computerHand);
        }else if(computerHand==='scissors'){
          this.tieGame(playerHand,computerHand);
        }else{
          this.loseGame(playerHand,computerHand);
        }
      }
    }
    playGame(playerHand){
      this.decideWinner(playerHand, this.computerRoll());
    }
  }

  function addEventListeners(){
    let theGame = new Game();
    $('.gamebuttons .rock').on('click',(e)=>{
      theGame.playGame('rock');
    });
    $('.gamebuttons .paper').on('click',(e)=>{
      theGame.playGame('paper');
    });
    $('.gamebuttons .scissors').on('click',(e)=>{
      theGame.playGame('scissors');
    });
  }

  function main(){
    addEventListeners();
    console.log('running');
  }
  $(document).ready(main);

})();
