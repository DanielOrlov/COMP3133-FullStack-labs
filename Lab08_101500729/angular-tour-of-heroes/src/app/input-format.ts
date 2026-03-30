import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[customInputFormat]',
  standalone: true
})
export class InputFormat {
  constructor(private el: ElementRef) {}

  @HostListener('blur')
  onBlur(): void {
    const value = this.el.nativeElement.value;
    this.el.nativeElement.value = value.toUpperCase();
  }
}