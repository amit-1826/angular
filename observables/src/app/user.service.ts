import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

// this is same as adding UserService in providers array of app module
@Injectable({providedIn: 'root'})
export class UserService {
  onActivate = new Subject<boolean>();

  activated(data: boolean) {
    this.onActivate.next(data);
  }

}
