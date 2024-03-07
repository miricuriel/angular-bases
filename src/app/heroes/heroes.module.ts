import { NgModule } from "@angular/core";
import { HeroeComponent } from "./heroe/heroe.component";
import { ListaComponent } from "./lista/lista.component";
import { CommonModule } from "@angular/common";

@NgModule({
  declarations:[
    HeroeComponent,
    ListaComponent
    ],
  exports:[
    HeroeComponent,
    ListaComponent
  ],
  /* import CommonModule -> permite hacer uso de las
  direcitivas como ngig, ngfor*/
  imports:[
    CommonModule
  ]
})
export class HeroesModule{

}
