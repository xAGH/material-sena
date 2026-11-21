import { Component } from '@angular/core';
import { ConditionComponent } from './components/condition/condition.component';
import { CounterComponent } from './components/counter/counter.component';
import { InputComponent } from './components/input/input.component';
import { LoopsComponent } from './components/loops/loops.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [
    CounterComponent,
    InputComponent,
    ConditionComponent,
    LoopsComponent,
  ],
})
export class AppComponent {}
