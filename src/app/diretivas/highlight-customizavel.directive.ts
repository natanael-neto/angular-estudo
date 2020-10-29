import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[highlightCustomizavel]'
})
export class HighlightCustomizavelDirective {

  @HostListener('mouseenter') ouMouseOver() {
    this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave') ouMouseLeave() {
    this.backgroundColor = this.defaultColor;
  }

  @HostBinding('style.backgroundColor') backgroundColor: string;

  @Input() defaultColor: string = 'white';
  @Input('highlightCustomizavel') highlightColor: string = '#FF9713';

  constructor() { }

  ngOnInit(): void {
    this.backgroundColor = this.defaultColor;
  }

}
