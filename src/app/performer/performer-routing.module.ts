import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {ListPerformersComponent} from "./list-performers/list-performers.component";
import {DetailsPerformerComponent} from "./details-performer/details-performer.component";
import {PerformerComponent} from "./performer.component";

const routes: Routes = [
  {
    path: '',
    component: PerformerComponent,
    children: [
      {
        path: 'list',
        component: ListPerformersComponent
      },
      {
        path: 'details/:id',
        component: DetailsPerformerComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PerformerRoutingModule { }
