import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CardModalComponent } from './card-modal/card-modal.component';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

  cardItem={
    title:'Frontend',
    name:'Semih Beyzade',
    phone:'0176 984 58 14',
    email:'info@gmail.de',
    address:'Mozart Str. 47125 Berlin'
  }

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openAddCardModal() {
    this.dialog.open(CardModalComponent)
  }

}
