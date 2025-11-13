import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { HttpLoaderFactory } from './config/CustomTranslateLoader';
import { TranslateInitService } from './services/translate-init.service';

export function initTranslationApp(translate: TranslateInitService) {
  return () => translate.initializeApp()
}

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      }
    })
  ],
  providers: [
    TranslateService,
    {
      provide: APP_INITIALIZER,
      useFactory: initTranslationApp,
      deps: [TranslateInitService],
      multi: true
    }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
