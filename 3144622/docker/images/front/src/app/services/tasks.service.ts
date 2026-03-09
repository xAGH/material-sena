import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  private api = 'express_backend:3000';

  constructor(private http: HttpClient) {}

  getTasks(): Observable<any> {
    return this.http.get(`${this.api}/tasks`);
  }

  createTask(title: string): Observable<any> {
    return this.http.post(`${this.api}/tasks`, { title });
  }

  deleteTask(id: number): Observable<any> {
    return this.http.delete(`${this.api}/tasks/${id}`);
  }
}
