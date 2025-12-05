import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Product } from '../../../../shared/models/product';
import { Album } from 'src/app/shared/models/album';
import { AlbumService } from 'src/app/core/services/album.service';

@Component({
    selector: 'app-product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
    albums: Album[] = [];

    constructor(private albumService: AlbumService) {}

    ngOnInit(): void {
        this.albumService.getAlbums().subscribe((res) => {
            this.albums = res;
        });
    }

    onRemove(album: Album) {}
}
