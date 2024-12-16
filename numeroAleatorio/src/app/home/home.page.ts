import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  numMin: number = 0;         
  numMax: number = 0;
  numeroAleatorio: number | null = null;

  constructor() {}

  generaNumeroAleatorio() {
  
    if (this.numMin != null && this.numMax != null && this.numMin < this.numMax) {
      this.numeroAleatorio = Math.floor(Math.random() * (this.numMax - this.numMin + 1)) + this.numMin;
    } else {
      this.numeroAleatorio = null;  
    }
  }
}

