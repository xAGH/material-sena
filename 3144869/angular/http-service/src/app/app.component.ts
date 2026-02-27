import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommentsService } from './services/comments.service';
import { Comment } from './interfaces/comment.interface';
import { map, Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit, OnDestroy {
  comments: Comment[] = [];
  showComments = true;
  private subscription: Subscription;

  constructor(private commentsService: CommentsService) {}

  ngOnInit(): void {
    this.subscription = this.commentsService
      .getComments()
      .pipe(
        map((comments) => {
          return comments.map((comment) => {
            return {
              id: comment.id,
              postId: comment.postId,
              body: comment.body,
            };
          });
        }),
      )
      .subscribe({
        next: (data) => {
          this.comments = data;
          console.log('Si cargó');
        },
        error: (error) => {
          console.log(error);
        },
        complete: () => {
          console.log('Proceso completado');
        },
      });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  hideComments() {
    this.showComments = false;
  }
}
