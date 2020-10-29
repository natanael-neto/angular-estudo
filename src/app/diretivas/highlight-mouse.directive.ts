import { Directive, HostListener, ElementRef, Renderer2, HostBinding, Host } from '@angular/core';

@Directive({
  selector: '[highlight]'
})
export class HighlightMouseDirective {

  @HostListener('mouseenter') onMouseOver() {
    // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', '#abcdef');
    this.backgroundColor = '#abcdef';
  }
  @HostListener('mouseleave') onMouseLeave() {
    // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', '#fedcba');
    this.backgroundColor = '#fedcba';
  }
  @HostBinding('style.backgroundColor') backgroundColor: string;

  constructor(
    // private elementRef: ElementRef, private renderer: Renderer2
  ) { }

}
