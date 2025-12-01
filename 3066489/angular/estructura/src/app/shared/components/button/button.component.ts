import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ButtonColor } from '../../enums/button-color';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
    @Input() text: string = ""
    @Input() color: ButtonColor = ButtonColor.SUCCESS;
    @Input() disabled: boolean = false;
    @Output() buttonClick: EventEmitter<void> =  new EventEmitter();

    onClick() {
        this.buttonClick.emit()
    }
}
