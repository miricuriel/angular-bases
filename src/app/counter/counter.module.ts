import { NgModule } from "@angular/core";
import { CounterComponent } from "./components/counter/counter.component";

@NgModule({
  // declarations: permite asociar y crear los componentes al modulo
declarations:[
  CounterComponent
],
// exports: permite usar el componente en otro scope
exports:[
  CounterComponent
]
})
export class CounterModule{

}
