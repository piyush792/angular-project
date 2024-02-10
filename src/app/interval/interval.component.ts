import { Component, OnInit } from '@angular/core';
import { Subscription, interval, timer } from 'rxjs';

@Component({
  selector: 'app-interval',
  standalone: true,
  imports: [],
  templateUrl: './interval.component.html',
  styleUrl: './interval.component.scss'
})
export class IntervalComponent implements OnInit {

  obsMsg: any;
  videoSub: Subscription | undefined;

  constructor() { }


  ngOnInit(): void {
    // const broadCast = interval(2000);
    const broadCast = timer(5000, 1000); //(delay, interval)

    this.videoSub = broadCast.subscribe(res => {
      console.log(res);
      this.obsMsg = 'video ' + res;

      if (res >= 5) {
        this.videoSub?.unsubscribe()
      }
    })
  }

}
