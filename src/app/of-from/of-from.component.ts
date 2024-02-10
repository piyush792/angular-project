import { Component, OnInit } from '@angular/core';
import { from, of } from 'rxjs';
import { UtilityService } from '../appservices/utility.service';

@Component({
  selector: 'app-of-from',
  standalone: true,
  imports: [],
  templateUrl: './of-from.component.html',
  styleUrl: './of-from.component.scss'
})
export class OfFromComponent implements OnInit {

  constructor(private _utilityService:UtilityService) {

  }

  ngOnInit(): void {
    // throw new Error('Method not implemented.');

    const obs1 = from(['piyush', 'srivastava', 'angular']);

    //1. from and of operator
    obs1.subscribe(res => {
      console.log(res);
      this._utilityService.print(res, 'elContainer')
    })

    //2. promise user
    const promise = new Promise((resolve)=>{
      setTimeout(() => {
        resolve("promise resolved");
      }, 2000);
    });

    // promise.then(res=>{
    //   console.log(res);
    // })

    const obs2 = from(promise);
    obs2.subscribe(res => {
      console.log("from propmise: ", res);
      this._utilityService.print(res, 'elContainer2')
    })

    //End 2.
    

    


  }

}
