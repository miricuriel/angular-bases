import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-lista',
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.css'
})
export class ListaComponent {


  public heroNames: string[] =
  ['Spiderman', 'Ironman', 'Hulk', 'Thor', 'Hank']

  public deletedHero?: string;

  removeLastHero():void{
    this.deletedHero = this.heroNames.pop();


  }
}
