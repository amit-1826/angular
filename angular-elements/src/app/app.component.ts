import {Component, Injector} from '@angular/core';
import {AlertComponent} from "./alert/alert.component";
import {createCustomElement} from "@angular/elements";
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  content: any = null;
  title = 'angular-elements';
  constructor(injector: Injector, domSanitizer: DomSanitizer) {
    const alertElement = createCustomElement(AlertComponent, {injector});
    customElements.define('my-alert', alertElement);
    setTimeout(() => {
      this.content = domSanitizer.bypassSecurityTrustHtml("<my-alert message='message'></my-alert>");
    }, 1000);
  }
}
