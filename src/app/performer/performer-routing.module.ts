import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {PerformerComponent} from "./performer.component";

const routes: Routes = [
  {
    path: '',
    component: PerformerComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PerformerRoutingModule { }
