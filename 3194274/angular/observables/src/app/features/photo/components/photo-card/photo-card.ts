import { Component, Input } from '@angular/core';
import { Photo } from '../../models/photo.model';

@Component({
  selector: 'app-photo-card',
  standalone: false,
  templateUrl: './photo-card.html',
  styleUrl: './photo-card.scss',
})
export class PhotoCard {
  @Input() photo: Photo;
}
