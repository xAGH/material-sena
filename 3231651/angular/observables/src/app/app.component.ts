import { ChangeDetectorRef, Component } from '@angular/core';
import { Post } from './features/posts/model/post.model';
import { PostService } from './features/posts/services/post.service';

@Component({
  standalone: false,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  posts: Post[] = [];

  constructor(
    private postService: PostService,
    private cdr: ChangeDetectorRef,
  ) {}

  onClick() {
    this.postService.getPosts().subscribe({
      next: (data) => {
        this.posts = data;
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.error('FALLÓ, REVISE:', err);
      },
      complete: () => {
        alert('OK');
      },
    });
  }
}
