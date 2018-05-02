import { Component } from '@angular/core';
import {LanguageService} from "./core/language.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor( languageService: LanguageService){

  }
}
