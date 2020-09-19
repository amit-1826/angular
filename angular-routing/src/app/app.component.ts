import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  selectedNav: any = 'home';
  constructor() {
  }

  onNavSelected(tabName) {
    this.selectedNav = tabName;
  }
}
