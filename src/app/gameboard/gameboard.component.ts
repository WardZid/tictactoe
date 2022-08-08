import { Component } from '@angular/core';

@Component({
  selector: 'app-gameboard',
  templateUrl: './gameboard.component.html',
  styleUrls: ['./gameboard.component.sass']
})
export class GameboardComponent {

  squares: string[]= Array(9).fill("");
  xIsNext: boolean =true;
  winner: string ="";
  
  newGame() {
    this.squares = Array(9).fill("");
    this.xIsNext = true;
    this.winner = "";
  }

  get turn(){
    return this.xIsNext? 'X' : 'O';
  }

  makeMove(spot : number){
    if(this.squares[spot] === ""){
      this.squares[spot] = this.turn;
      this.xIsNext=!this.xIsNext;
    }

    this.checkWinner();
  }

  checkWinner():void{

    
    this.winner="";
  }
}
