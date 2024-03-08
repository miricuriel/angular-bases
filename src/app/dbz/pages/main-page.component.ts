import { Component} from '@angular/core';
import { Character } from '../interfaces/character.interface';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class DbzComponent {
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

}
