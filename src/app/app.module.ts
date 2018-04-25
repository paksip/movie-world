import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { MovieModule } from './movie/movie.module';
import { NavigationModule } from './navigation/navigation.module';
import { PerformerModule } from './performer/performer.module';
import {HomeModule} from "./home/home.module";
import {CoreModule, HttpLoaderFactory} from './core/core.module';
import { SharedModule } from './shared/shared.module';
import {AuthenticationModule} from "./authentication/authentication.module";
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";
import {HttpClient} from "@angular/common/http";


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
    HomeModule,
    CoreModule,
    SharedModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    AuthenticationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
