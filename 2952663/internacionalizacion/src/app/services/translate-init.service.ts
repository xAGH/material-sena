import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class TranslateInitService {

 constructor(private translate: TranslateService) {}

  initializeApp(): Promise<any> {
    this.translate.setFallbackLang('es');
    const browserLang = this.translate.getBrowserLang();
    const langToUse = browserLang?.match(/en|es|fr|it/) ? browserLang : 'es';
    return this.translate.use(langToUse).toPromise();
  }
}
