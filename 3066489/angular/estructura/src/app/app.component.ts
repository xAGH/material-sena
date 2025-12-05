import { Component } from '@angular/core';
import { AuthService } from './core/services/auth.service';
import { AlbumService } from './core/services/album.service';
import { Album } from './shared/models/album';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    albums: Album[] = [];

    constructor(
        private authService: AuthService,
        private albumService: AlbumService
    ) {}

    get authenticated() {
        return this.authService.authenticated;
    }
}
