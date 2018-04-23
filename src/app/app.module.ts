import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { MovieModule } from './movie/movie.module';
import { NavigationModule } from './navigation/navigation.module';
import { PerformerModule } from './performer/performer.module';
import {HomeModule} from "./home/home.module";


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MovieModule,
    NavigationModule,
    PerformerModule,
    HomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
