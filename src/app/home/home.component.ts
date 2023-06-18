import { UserService } from './../user.service';
import { ActivatedRoute, Data } from '@angular/router';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Observer, Subscription, interval } from 'rxjs';
import { UserResorverService } from '../user-resorver.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, OnDestroy {
  intervalSubscription: Subscription = new Subscription();
  userList: Data;
  constructor(
    private routes: ActivatedRoute,
    private userResorverService: UserResorverService,
    private element: Element
  ) {
    this.userList = routes.snapshot.data;
  }

  ngOnInit(): void {
    this.routes.data.subscribe((data: Data) => {
      console.log(data);
    });
    this.intervalSubscription = interval(100).subscribe((count) => {
      console.log(count);
    });
    let customerObservable = Observable.create((observer: Observer<any>) => {
      let count = 0;
      setInterval(() => {
        observer.next(count);
        if (count > 3) {
          observer.error('count is greater than 3');
        }
        count++;
      }, 1000);
    });
    this.intervalSubscription = customerObservable.Subscribe((data: any) => {
      console.log(data);
    });
  }
  ngOnDestroy(): void {
    this.intervalSubscription.unsubscribe();
  }
}
