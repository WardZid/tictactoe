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
    if(this.winner =="" && this.squares[spot] == ""){
      this.squares[spot] = this.turn;
      this.xIsNext=!this.xIsNext;
    }

    this.checkWinner();
  }

  checkWinner():void{

    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (this.squares[a] !== "" && this.squares[a] === this.squares[b] && this.squares[a] === this.squares[c]) {
        this.winner=this.squares[a];
        return;
      }
    }
  }
}
