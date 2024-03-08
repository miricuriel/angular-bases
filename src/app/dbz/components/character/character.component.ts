import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-character-dbz',
  templateUrl: './character.component.html',
  styleUrl: './character.component.css'
})
export class CharacterComponent {
// Crear
@Output()
public onNewCharacter: EventEmitter<Character> = new EventEmitter();

  public personaje: Character = {
    name: '',
    power: 0
  };

  emitCharacter():void{
// Manera de crear un breakpoint
    debugger;

    console.log(this.personaje);
    if (this.personaje.name.length === 0) return ;

    this.onNewCharacter.emit(this.personaje);
    this.personaje = {name: '', power: 0}
  }
}
