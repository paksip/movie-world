import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecommendationService } from './recommendation.service';
import { RecommendationComponent } from './recommendation.component';
import { RecommendationRoutingModule } from './recommendation-routing.module';
import {CoreModule} from "../core/core.module";

@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    RecommendationRoutingModule
  ],
  declarations: [RecommendationComponent],
  providers: [RecommendationService]
})
export class RecommendationModule { }
