import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { UserReq } from '../models/user-req.model';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class JsonPlaceholder {
  private API_URL = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.http.get<UserReq[]>(this.API_URL).pipe(
      map((users) => {
        return users.map((user) => {
          return {
            id: user.id,
            name: user.name,
            username: user.username,
            email: user.email,
            address: {
              street: user.address.street,
              suite: user.address.suite,
              city: user.address.city,
            },
            phone: user.phone,
            companyName: user.company.name,
          };
        });
      }),
    );
  }
}
