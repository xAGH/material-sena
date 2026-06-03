import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Photo } from './features/photo/models/photo.model';
import { PhotoService } from './features/photo/services/photo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
  standalone: false,
})
export class App implements OnInit {
  constructor(
    private photoService: PhotoService,
    private cdr: ChangeDetectorRef,
  ) {}

  ngOnInit(): void {
    this.photoService.getAllPhotos().subscribe({
      next: (photos: Photo[]) => {
        this.photos = photos;
        this.cdr.detectChanges();
      },
      error: () => {},
      complete: () => {},
    });
  }

  photos: Photo[] = [];
}
