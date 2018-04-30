import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PerformerComponent} from "../performer/performer.component";
import {RouterModule, Routes} from "@angular/router";
import {RecommendationComponent} from "./recommendation.component";

const routes: Routes = [
  {
    path: '',
    component: RecommendationComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecommendationRoutingModule { }
