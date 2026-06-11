import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { PostCardComponent } from './components/post-card/post-card.component';
import { PostListComponent } from './pages/post-list/post-list.component';

@NgModule({
  declarations: [PostCardComponent, PostListComponent],
  imports: [CommonModule, HttpClientModule],
  exports: [PostListComponent],
})
export class PostsModule {}
