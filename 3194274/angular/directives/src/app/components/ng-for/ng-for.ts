import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  standalone: false,
  templateUrl: './ng-for.html',
  styleUrl: './ng-for.scss',
})
export class NgFor {
  users: { name: string }[] = [
    { name: 'Alejo' },
    { name: 'Pepe' },
    { name: 'Maik' },
    { name: 'Alejo' },
    { name: 'Pepe' },
    { name: 'Maik' },
  ];
}
