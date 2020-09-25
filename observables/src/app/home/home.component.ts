import { Component, OnDestroy, OnInit } from '@angular/core';

import { interval, Observable, Observer, Subscription } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  private subscriber: Subscription;

  constructor() { }

  ngOnInit() {

    // interval is an build-in observable which emit number in ascending order after specified
    // specified interval of time

    /* this.subscriber = interval(2000).subscribe((count) => {
      console.log(count);
    }) */

    const firstCustomObservable = Observable.create((observer: Observer<any>) => {
      let count = 0;
      setInterval(() => {

        /* if (count == 2) {
          observer.complete();
        } */
        if (count > 5) {
          observer.error('This is any error, bro.!!');
        }
        observer.closed.valueOf();
        observer.next(count);
        count++;
      }, 1000)
    })



    this.subscriber = firstCustomObservable.pipe(filter((data) => {
      return data > 0;
    }),map((data) => {
      return 'Round' + data;
    })).subscribe((count) => {
      console.log(count);
    }, (error: any) => {
      // when an error is thrown it does not mean the observable is completed, its just cancelled

      console.log('error:', error);
      alert('Greater than 3');
    }, () => {
      console.log('Completed');

    })
  }

  ngOnDestroy() {
    this.subscriber.unsubscribe();
  }

}
