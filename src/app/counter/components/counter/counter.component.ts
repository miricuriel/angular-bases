import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
  <p> Counter: {{ counter}}</p>

<button (click)="increaseBy(1)"> + 1 </button>
<button (click)="reset()"> Reset </button>
<button (click)="increaseBy(-1)"> - 1</button>
`

})

export class CounterComponent {
  public counter: number = 2;

  increaseBy( value: number):void{
this.counter += value;
  }

  reset():void{
this.counter = 10;
  }
}
