import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';


@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Input()
  public characterList: Character[] = [];

  @Output()
  public onDeleteCharacter: EventEmitter<string> = new EventEmitter();

  // onDeleteId(index:number):void{
  //   this.onDeleteCharacter.emit(index);
  // }
  onDeleteId(id:string):void{
    if(!id) return;
    this.onDeleteCharacter.emit(id);
  }
}
