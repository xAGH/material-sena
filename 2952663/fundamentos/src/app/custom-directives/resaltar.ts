import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appResaltar]',
  standalone: false,
})
export class Resaltar {
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('mouseenter')
  onMouseEnter() {
    this.renderer.setStyle(this.el.nativeElement, 'color', 'yellow');
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.renderer.setStyle(this.el.nativeElement, 'color', 'green');
  }

  @HostListener('click')
  onClick() {
    this.renderer.setStyle(this.el.nativeElement, 'color', 'black');
  }
}
