import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from './language.service';
import {HttpClientModule} from "@angular/common/http";
import {TranslateModule} from "@ngx-translate/core";

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    TranslateModule
  ],
  declarations: [],
  providers: [LanguageService]
})
export class CoreModule { }
