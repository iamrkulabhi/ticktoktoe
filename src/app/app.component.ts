import { Component, OnInit } from '@angular/core';
import { CellInfo } from './cell-info.model';

interface Item {
  value: string;
  class: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{

  startItem: string;
  currentItem: string;
  endGame: boolean = false;

  gameArr: Item[][] = [
    [{value: '', class: ''}, {value: '', class: ''}, {value: '', class: ''}],
    [{value: '', class: ''}, {value: '', class: ''}, {value: '', class: ''}],
    [{value: '', class: ''}, {value: '', class: ''}, {value: '', class: ''}]
  ];

  constructor() {}

  ngOnInit() {
    // console.log(this.gameArr);
    this.startItem = Math.floor(Math.random()*10)%2 === 0 ? 'X' : 'O';
    this.currentItem = this.startItem;
  }

  getUpdatedItem(itemdata: CellInfo) {
    // console.log(itemdata);
    if(this.gameArr[itemdata.row][itemdata.column].value === '' && !this.endGame){
      this.gameArr[itemdata.row][itemdata.column].value = itemdata.item;
      this.currentItem = this.currentItem === 'X' ? 'O' : 'X';
      this.checkGameStatus();
    }
  }

  restartGame() {
    window.location.reload();
  }

  checkGameStatus() {
    if (
      this.gameArr[0][0].value !== '' &&
      this.gameArr[0][0].value === this.gameArr[0][1].value &&
      this.gameArr[0][1].value === this.gameArr[0][2].value
    ){
      this.gameArr[0][0].class = 'matched strike-horizontal';
      this.gameArr[0][1].class = 'matched strike-horizontal';
      this.gameArr[0][2].class = 'matched strike-horizontal';
      this.endGame = true;
    } else if (
      this.gameArr[1][0].value !== '' &&
      this.gameArr[1][0].value === this.gameArr[1][1].value &&
      this.gameArr[1][1].value === this.gameArr[1][2].value
    ){
      this.gameArr[1][0].class = 'matched strike-horizontal';
      this.gameArr[1][1].class = 'matched strike-horizontal';
      this.gameArr[1][2].class = 'matched strike-horizontal';
      this.endGame = true;
    } else if (
      this.gameArr[2][0].value !== '' &&
      this.gameArr[2][0].value === this.gameArr[2][1].value &&
      this.gameArr[2][1].value === this.gameArr[2][2].value
    ){
      this.gameArr[2][0].class = 'matched strike-horizontal';
      this.gameArr[2][1].class = 'matched strike-horizontal';
      this.gameArr[2][2].class = 'matched strike-horizontal';
      this.endGame = true;
    } else if (
      this.gameArr[0][0].value !== '' &&
      this.gameArr[0][0].value === this.gameArr[1][0].value &&
      this.gameArr[1][0].value === this.gameArr[2][0].value
    ){
      this.gameArr[0][0].class = 'matched strike-vertical';
      this.gameArr[1][0].class = 'matched strike-vertical';
      this.gameArr[2][0].class = 'matched strike-vertical';
      this.endGame = true;
    } else if (
      this.gameArr[0][1].value !== '' &&
      this.gameArr[0][1].value === this.gameArr[1][1].value &&
      this.gameArr[1][1].value === this.gameArr[2][1].value
    ) {
      this.gameArr[0][1].class = 'matched strike-vertical';
      this.gameArr[1][1].class = 'matched strike-vertical';
      this.gameArr[2][1].class = 'matched strike-vertical';
      this.endGame = true;
    } else if (
      this.gameArr[0][2].value !== '' &&
      this.gameArr[0][2].value === this.gameArr[1][2].value &&
      this.gameArr[1][2].value === this.gameArr[2][2].value
    ) {
      this.gameArr[0][2].class = 'matched strike-vertical';
      this.gameArr[1][2].class = 'matched strike-vertical';
      this.gameArr[2][2].class = 'matched strike-vertical';
      this.endGame = true;
    } else if (
      this.gameArr[0][0].value !== '' &&
      this.gameArr[0][0].value === this.gameArr[1][1].value &&
      this.gameArr[1][1].value === this.gameArr[2][2].value
    ) {
      this.gameArr[0][0].class = 'matched strike-diagonal-left-to-right';
      this.gameArr[1][1].class = 'matched strike-diagonal-left-to-right';
      this.gameArr[2][2].class = 'matched strike-diagonal-left-to-right';
      this.endGame = true;
    } else if (
      this.gameArr[0][2].value !== '' &&
      this.gameArr[0][2].value === this.gameArr[1][1].value &&
      this.gameArr[1][1].value === this.gameArr[2][0].value
    ) {
      this.gameArr[0][2].class = 'matched strike-diagonal-right-to-left';
      this.gameArr[1][1].class = 'matched strike-diagonal-right-to-left';
      this.gameArr[2][0].class = 'matched strike-diagonal-right-to-left';
      this.endGame = true;
    }
  }
}
