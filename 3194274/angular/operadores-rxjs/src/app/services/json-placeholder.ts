import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin, map, Observable, switchMap } from 'rxjs';
import { UserReq } from '../models/user-req.model';
import { Post, User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class JsonPlaceholder {
  private API_URL = 'https://jsonplaceholder.typicode.com/';

  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.http.get<UserReq[]>(`${this.API_URL}/users`).pipe(
      map((users) => this.mapUsers(users)),
      switchMap((users) => {
        const usersWithPosts$ = users.map((user) => this.getUserPosts(user));
        return forkJoin(usersWithPosts$);
      }),
    );
  }

  getUserPosts(user: User): Observable<User> {
    return this.http.get<Post[]>(`${this.API_URL}/posts?userId=${user.id}`).pipe(
      map((posts) => {
        return {
          ...user,
          posts,
        };
      }),
    );
  }

  mapUsers(users: any[]) {
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
        posts: [],
      };
    });
  }
}
