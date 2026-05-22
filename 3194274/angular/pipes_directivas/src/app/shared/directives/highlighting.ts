import { Directive } from '@angular/core';

@Directive({
  selector: '[appHighlighting]',
  standalone: false,
})
export class Highlighting {
  constructor() {}
}
