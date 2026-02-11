import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContadorComponent } from './components/contador/contador.component';
import { ActionButtonComponent } from './components/action-button/action-button.component';
import { InputComponent } from './components/input/input.component';
import { TextComponent } from './components/text/text.component';
import { Input2Component } from './components/input2/input2.component';
import { FormsModule } from '@angular/forms';
import { UserCardComponent } from './components/user-card/user-card.component';
import { UserListComponent } from './components/user-list/user-list.component';
@NgModule({
  declarations: [
    AppComponent,
    ContadorComponent,
    ActionButtonComponent,
    InputComponent,
    TextComponent,
    Input2Component,
    UserCardComponent,
    UserListComponent,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
