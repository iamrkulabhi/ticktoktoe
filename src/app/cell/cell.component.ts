import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {CellInfo} from '../cell-info.model';

@Component({
  selector: 'app-cell',
  templateUrl: './cell.component.html',
  styleUrls: ['./cell.component.css']
})

export class CellComponent implements OnInit, AfterViewInit{

  @Input('cell-row') cellRow: number;
  @Input('cell-column') cellColumn: number;
  @Input('current-item') currentitem: string;
  @Input('cell-class') cellClass: string;
  @Output() onUpdateCellItem = new EventEmitter<CellInfo>();

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    //console.log(this.cellRow, this.cellColumn);
  }

  updateCellItem() {
    this.onUpdateCellItem.emit({row: this.cellRow, column: this.cellColumn, item: this.currentitem});
  }

}
