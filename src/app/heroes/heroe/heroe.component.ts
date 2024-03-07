import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-heroe',
  templateUrl: './heroe.component.html',
  styleUrl: './heroe.component.css'
})
export class HeroeComponent {

  public name: string = 'iroman';
  public age: number = 45;

get capitalizedName():string{
  return this.name.toUpperCase();
}

getHeroDescription():string{

  return `${this.name} - ${this.age}`
}

changeHero():void{
  this.name = 'Viuda negra'
}

changeAge():void{
  this.age = 30;
}

resetForm():void{
  this.name = 'iroman';
  this.age = 45
}
}
