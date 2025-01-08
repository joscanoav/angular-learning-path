import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: false, 
  template: `<h3>counter: {{counter}}</h3>

  <button (click)="increaseBy(+1)">+1</button>
  <button (click)="resetCounter()">Reset</button>
  <button (click)="increaseBy(-1)">-1</button>

  `
})

export class CounterComponent {
  public title: string = 'Hola Mundo';
  public counter: number=10;

  increaseBy(value: number):void{
    this.counter +=value;
  }

  resetCounter(){
    this.counter = 10;
  }

}

