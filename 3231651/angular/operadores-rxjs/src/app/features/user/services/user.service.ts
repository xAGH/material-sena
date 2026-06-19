import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin, map, Observable, switchMap } from 'rxjs';
import { Post } from '../models/post-req.mode';
import { UserReq } from '../models/user-req.model';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private API_URL = 'https://jsonplaceholder.typicode.com';

  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.http.get<UserReq[]>(`${this.API_URL}/users`).pipe(
      map((usersReq: UserReq[]) => this.mapUsers(usersReq)),
      switchMap((users: User[]) => {
        const usersWithPosts = users.map((user) => this.getPostByUserId(user));
        return forkJoin(usersWithPosts);
      }),
    );
  }

  getPostByUserId(user: User): Observable<User> {
    return this.http
      .get<Post[]>(`${this.API_URL}/posts?userId=${user.id}`)
      .pipe(
        map((posts: Post[]) => {
          return {
            ...user,
            postsQuantity: posts.length,
          };
        }),
      );
  }

  private mapUsers(usersReq: UserReq[]): User[] {
    return usersReq.map((user: UserReq) => {
      return {
        id: user.id,
        name: user.name,
        username: user.username,
        email: user.email,
        address: {
          street: user.address.street,
          city: user.address.city,
        },
        phone: user.phone,
        companyName: user.company.name,
        postsQuantity: 0,
      };
    });
  }
}
