import { Injectable, ChangeDetectionStrategy } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid} from 'uuid';

@Injectable({providedIn: 'root'})
export class DbzService {
  public characters: Character[] = [{
    id: uuid(),
    name: 'Krillin',
    power: 4323
  },{
    id: uuid(),
    name: 'Goku',
    power: 54434
  },
  {
    id: uuid(),
    name: 'Vegeta',
    power: 54434
  },
  {
    id: uuid(),
    name: 'Hulk',
    power: 54434
  }];

  addCharacter(character: Character):void{
    const newCharacter: Character = {id: uuid(), ...character}

    this.characters.push(newCharacter);
  };

  // onDeleteCharacter(index: number){
  // this.characters.splice(index,1);
  // };

  deleteCharacteById(id:string){
    this.characters = this.characters.filter(character => character.id !== id)
  }

}
