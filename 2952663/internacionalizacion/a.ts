import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { HttpLoaderFactory } from './config/CustomTranslateLoader';
import { TranslateInitService } from './services/translate-init.service';

export function initTraslationApp(translateInitService: TranslateInitService) {
  return () => translateInitService.initializeApp()
}

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    TranslateModule.forRoot(
      {
        loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
        }
      }
    )
  ],
  providers: [
    TranslateService,
    {
      provide: APP_INITIALIZER,
      useFactory: initTraslationApp,
      deps: [TranslateService],
      multi: true
    }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
