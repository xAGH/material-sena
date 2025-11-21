import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-action-button',
  templateUrl: './action-button.component.html',
  styleUrls: ['./action-button.component.scss']
})
export class ActionButtonComponent {

    @Input() content: string = ""
    @Input() color: string = ""

    @Output() buttonClick: EventEmitter<string> = new EventEmitter<string>();

    onClick() {
        this.buttonClick.emit("Evento de pulsar el botón accionado")
    }

}
