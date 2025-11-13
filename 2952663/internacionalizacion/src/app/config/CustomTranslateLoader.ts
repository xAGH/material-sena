import { HttpClient } from "@angular/common/http";
import { TranslateLoader } from "@ngx-translate/core";
import { Observable } from "rxjs";

export class CustomTranslateHttpLoader implements TranslateLoader {

  private _prefix = './assets/i18n/'
  private _extension = ".json"

  constructor(
    private http: HttpClient,
  ) {}

  getTranslation(lang: string): Observable<any> {
    return this.http.get(`${this._prefix}${lang}${this._extension}`);
  }
}

export function HttpLoaderFactory(http: HttpClient) {
  return new CustomTranslateHttpLoader(http);
}
