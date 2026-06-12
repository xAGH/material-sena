import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PostsModule } from './features/posts/posts.module';
import { EjemploComponent } from './juan/andres/felipe/ejemplo/ejemplo.component';

@NgModule({
  declarations: [AppComponent, EjemploComponent],
  imports: [BrowserModule, PostsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
