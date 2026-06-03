import { Component, Input } from '@angular/core';
import { Photo } from '../../models/photo.model';

@Component({
  selector: 'app-photo-list',
  standalone: false,
  templateUrl: './photo-list.html',
  styleUrl: './photo-list.scss',
})
export class PhotoList {
  @Input() photos: Photo[];
}
