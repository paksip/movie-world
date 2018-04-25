import {Injectable} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {AvailableLanguages} from './available-languages.enum';

@Injectable()
export class LanguageService {

  constructor(private translateService: TranslateService) {
    this.translateService.setDefaultLang('en');
    if (AvailableLanguages[this.translateService.getBrowserLang().toUpperCase()] !== undefined) {
      this.translateService.use(this.translateService.getBrowserLang());
    }
  }

}
