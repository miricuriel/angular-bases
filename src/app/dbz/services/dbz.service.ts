import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';

@Injectable({providedIn: 'root'})
export class DbzService {
  public characters: Character[] = [{
    name: 'Krillin',
    power: 4323
  },{
    name: 'Goku',
    power: 54434
  },
  {
    name: 'Vegeta',
    power: 54434
  },
  {
    name: 'Hulk',
    power: 54434
  }];

  onNewCharacter(character: Character):void{
    this.characters.push(character);
  };

  onDeleteCharacter(index: number){
  this.characters.splice(index,1);
  };

}
