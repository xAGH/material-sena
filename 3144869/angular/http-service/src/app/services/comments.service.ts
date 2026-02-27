import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Comment } from '../interfaces/comment.interface';

@Injectable({
  providedIn: 'root',
})
export class CommentsService {
  url: string;

  constructor(private http: HttpClient) {
    this.url = 'https://jsonplaceholder.typicode.com/comments';
  }

  getComments() {
    return this.http.get<Comment[]>(this.url);
  }
}
