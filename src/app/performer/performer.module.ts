import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListPerformersComponent } from './list-performers/list-performers.component';
import { DetailsPerformerComponent } from './details-performer/details-performer.component';
import { PerformerComponent } from './performer.component';
import { PerformerRoutingModule } from './/performer-routing.module';
import { PerformerService } from './performer.service';

@NgModule({
  imports: [
    CommonModule,
    PerformerRoutingModule
  ],
  declarations: [ListPerformersComponent, DetailsPerformerComponent, PerformerComponent],
  providers: [PerformerService]
})
export class PerformerModule { }
