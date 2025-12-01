import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent {

    @Input() label: string = "";
    @Input() type: string = "text";
    @Output() inputChange: EventEmitter<string> = new EventEmitter()

    onChange(event: Event) {
        const element = (event.target as HTMLInputElement);
        const text = element.value;
        this.inputChange.emit(text)
    }

}
