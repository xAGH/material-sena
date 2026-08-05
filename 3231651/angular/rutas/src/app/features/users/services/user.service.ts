import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { UserApiResponse } from '../models/user-api-response.model';
import { UserInfo } from '../models/user-info.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  http = inject(HttpClient);

  loadUsers(): Observable<UserInfo[]> {
    return this.http
      .get<UserApiResponse[]>('https://jsonplaceholder.typicode.com/users')
      .pipe(
        map((users) =>
          users.map((user) => {
            return {
              id: user.id,
              name: user.name,
              username: user.username,
              email: user.email,
              phone: user.phone,
            };
          }),
        ),
      );
  }
}
