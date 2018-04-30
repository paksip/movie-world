import { Component } from '@angular/core';
import {TranslateService} from "@ngx-translate/core";
import {LanguageService} from "./core/language.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor( languageService: LanguageService){

  }
}
