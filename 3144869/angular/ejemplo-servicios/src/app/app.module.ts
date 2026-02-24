import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TextFormComponent } from './components/text-form/text-form.component';
import { TextListComponent } from './components/text-list/text-list.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, TextFormComponent, TextListComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
