import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from '../../models/user.model';
import { JsonPlaceholder } from '../../services/json-placeholder';

@Component({
  selector: 'app-map',
  standalone: false,
  templateUrl: './map.html',
  styleUrl: './map.scss',
})
export class Map implements OnInit {
  users$: Observable<User[]> = of([]);

  constructor(private jsonPlaceholderService: JsonPlaceholder) {}

  ngOnInit(): void {
    this.jsonPlaceholderService.getUsers().subscribe({ next: (data) => console.log(data) });
  }
}
