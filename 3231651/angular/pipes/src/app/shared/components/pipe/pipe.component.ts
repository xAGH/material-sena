import { Component } from '@angular/core';

@Component({
  selector: 'app-pipe',
  standalone: false,
  templateUrl: './pipe.component.html',
  styleUrl: './pipe.component.scss',
})
export class PipeComponent {
  name = 'alejo';
  lastname = 'GIRALDO';
  colombianOwe = 200000000.587;
  womens = 0.1;
  colombianHabitants = '53900000.6547';
  brithDate = '2003-03-23';
}
