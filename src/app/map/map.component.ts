import { Component, OnInit } from '@angular/core';
import { Subscription, from, interval, map } from 'rxjs';
import { UtilityService } from '../appservices/utility.service';

@Component({
  selector: 'app-map',
  standalone: true,
  imports: [],
  templateUrl: './map.component.html',
  styleUrl: './map.component.scss'
})
export class MapComponent implements OnInit {

  constructor(private _utilityService: UtilityService) { }

  sub1: Subscription | undefined
  sub2: Subscription | undefined

  //message
  msg1: any;
  msg2: any;

  ngOnInit(): void {
    // throw new Error('Method not implemented.');

    //ex- 1
    const broadCastVideo = interval(1000);

    this.sub1 = broadCastVideo
      .pipe(
        map(data =>
          "Video: " + data

        )
      )
      .subscribe(res => {
        // console.log(res);
        this.msg1 = res;

      }
      );


    setTimeout(() => {
      this.sub1?.unsubscribe();
    }, 4000);



    //ex.2
    this.sub2 = broadCastVideo
      .pipe(
        map(data =>
          "Video: " + (data * 10) 

        )
      )
      .subscribe(res => {
        // console.log(res);
        this.msg2 = res;

      }
      );


    setTimeout(() => {
      this.sub2?.unsubscribe();
    }, 4000);




    //ex.3
    const members = [
      { id:1, name:'piyush'},
      { id:2, name:'piyush1'},
      { id:3, name:'piyush2'},
      { id:4, name:'piyush3'},
      { id:5, name:'piyush4'},
      { id:6, name:'piyush5'},
      { id:7, name:'piyush6'},
    ]

    let memObj = from(members) // to create observable stream of data

    memObj.pipe(map((data:any)=>data.name)).
    subscribe(res=>{
      // console.log(res);
      this._utilityService.print(res, 'elContainer2')

    })

  }

}
