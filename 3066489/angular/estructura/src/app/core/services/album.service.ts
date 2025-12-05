import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Album } from 'src/app/shared/models/album';

@Injectable({
    providedIn: 'root',
})
export class AlbumService {
    constructor(private http: HttpClient) {}

    getAlbums(): Observable<Album[]> {
        return this.http.get<Album[]>(
            'https://jsonplaceholder.typicode.com/photos'
        );
    }

    getAlbumById() {}

    creaetAlbum() {}
}
