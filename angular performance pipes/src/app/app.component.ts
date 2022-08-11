import { Component } from '@angular/core';
import { TheoryService } from './theories.service';
import { UsersService } from './users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app-initializer';
  constructor(
    public usrService: UsersService,
    public theoryService: TheoryService
  ){}

  getTheory(userId: number) {
    console.log('get theory called', userId);
    return this.theoryService.getTheory(userId)?.title;
  }
}
