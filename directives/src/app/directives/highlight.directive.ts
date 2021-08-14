import { Directive, ElementRef, HostListener, Input, OnInit } from "@angular/core";

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective implements OnInit {

  @Input('defaultColor') defaultColor: string;

  @HostListener('mouseenter') onMouseEnter() {
    this.setColor('yellow')
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.setColor(this.defaultColor)
  }

  constructor(private elementRef: ElementRef) {
    this.setColor(this.defaultColor);
  }

  ngOnInit() {
    if (this.defaultColor) {
      this.setColor(this.defaultColor)
    }
  }

  setColor(color?) {
    this.elementRef.nativeElement.style.backgroundColor = color || this.defaultColor;
  }
}
