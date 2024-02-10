import { Component, OnInit } from '@angular/core';
import { Subscriber, Subscription, from, interval, of, take, toArray } from 'rxjs';

@Component({
  selector: 'app-to-array',
  standalone: true,
  imports: [],
  templateUrl: './to-array.component.html',
  styleUrl: './to-array.component.scss'
})
export class ToArrayComponent implements OnInit {

  constructor() { }

  sourceSub: Subscription | undefined;

  users = [{
    'name': 'piyush',
    'skill': 'Angular'
  },
  {
    'name': 'puneet',
    'skill': 'java'
  },
  {
    'name': 'ravi',
    'skill': 'java2'
  },
  {
    'name': 'manish',
    'skill': 'java3'
  }
  ]
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
    const source = interval(1000);


    //used the toArray operator trandform the data into array with the help of pipe and take() operator
    //1.
    this.sourceSub = source.pipe(take(6), toArray()
    ).subscribe(res => {
        // console.log(res);
        // if(res> 5){
        //   this.sourceSub?.unsubscribe();
        // }
      });

    //2.
    const source2 = from(this.users)
    
    source2.pipe(toArray()).subscribe(res=> {
      // console.log(res);
    });

    //3.
    const source3 = of('abc','cde','efg','ghi');
    
    source3.pipe(toArray()).subscribe(res=> {
      console.log(res);
    });


  }


}
