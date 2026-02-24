import { Component } from '@angular/core';
import { TextService } from '../../services/text.service';

@Component({
  selector: 'app-text-list',
  templateUrl: './text-list.component.html',
  styleUrl: './text-list.component.scss',
})
export class TextListComponent {
  constructor(private textService: TextService) {}

  get texts() {
    return this.textService.texts;
  }

  deleteText(index: number) {
    this.textService.delete(index);
  }
}
