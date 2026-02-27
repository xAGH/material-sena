import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CommentCardComponent } from './components/comment-card/comment-card.component';
import { CommentListComponent } from './components/comment-list/comment-list.component';

@NgModule({
  declarations: [AppComponent, CommentCardComponent, CommentListComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
