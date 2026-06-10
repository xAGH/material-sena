import { Component } from '@angular/core';
import { of } from 'rxjs';

@Component({
  selector: 'app-of',
  standalone: false,
  templateUrl: './of.html',
  styleUrl: './of.scss',
})
export class Of {
  name$ = of('Alejo', 1, 2, 3);
}
