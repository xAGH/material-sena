import { Component } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrl: './pipe.component.scss',
})
export class PipeComponent {
  name = 'alejo';
  lastname = 'GIRALDO';
  experiment = 678634.23443834;
  money = 0.1;
  owe = 20000000; // Debo
  brithDate = '2003-03-23';
}
