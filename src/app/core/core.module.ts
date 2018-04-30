import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from './language.service';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {TranslateModule} from "@ngx-translate/core";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    TranslateModule,
    FormsModule
  ],
  providers: [LanguageService],
  exports: [FormsModule, TranslateModule]
})
export class CoreModule { }
