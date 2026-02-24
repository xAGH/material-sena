import { Component } from '@angular/core';
import { TextService } from '../../services/text.service';

@Component({
  selector: 'app-text-form',
  templateUrl: './text-form.component.html',
  styleUrl: './text-form.component.scss',
})
export class TextFormComponent {
  text: string = '';

  constructor(private textService: TextService) {}

  addText() {
    this.textService.add(this.text);
    this.text = '';
  }
}
