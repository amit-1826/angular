import { Directive, ElementRef } from "@angular/core";

@Directive({
  selector: '[autofocus]'
})
export class AutoFocusDirective {
  constructor(private elementRef: ElementRef) {
    this.setFocus();
  }

  setFocus() {
    this.elementRef.nativeElement.focus();
  }
}
