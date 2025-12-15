import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss'],
})
export class SearchInputComponent {
  @Output() write: EventEmitter<string> = new EventEmitter();

  onInput(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.write.emit(value);
  }
}
