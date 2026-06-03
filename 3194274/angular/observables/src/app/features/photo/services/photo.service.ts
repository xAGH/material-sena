import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Photo } from '../models/photo.model';

@Injectable({
  providedIn: 'root',
})
export class PhotoService {
  private API_URL = 'https://jsonplaceholder.typicode.com/photos?_start=0&_limit=10';

  constructor(private http: HttpClient) {}

  getAllPhotos() {
    return this.http.get<Photo[]>(this.API_URL);
  }
}
