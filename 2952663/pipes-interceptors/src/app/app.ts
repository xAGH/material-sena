import { Component, OnInit, signal } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpService } from './services/http-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.scss',
})
export class App implements OnInit {
  nombre: string = "alejo giraldo"
  date: Date = new Date()
  price: number = 315800.6787676
  purchases: string = "53947.2323"
  object = {
    name: "Alejo",
    edad: 22,
    phone: 3013258495
  }
  observer$: BehaviorSubject<number> = new BehaviorSubject<number>(0)
  todo$: any

  constructor(private httpService: HttpService) {}

  ngOnInit(): void {
      setTimeout(() => this.observer$.next(1000), 4000)
      this.todo$ = this.httpService.get()
  }

}
