import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { delay, retry, retryWhen, scan } from 'rxjs';

@Component({
  selector: 'app-retry',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './retry.component.html',
  styleUrl: './retry.component.scss'
})
export class RetryComponent implements OnInit {

  constructor(private _http: HttpClient) { }

  data:any;

  users = {
    'name': 'piyush',
    'email': 'piyush@gmail.com',
    'phone': '83838333838',
    'skill': 'Angular',
    'gender': 'male'
  };

  ngOnInit(): void {
    // throw new Error('Method not implemented.');
    // this.fetchDetails();
  }

  fetchDetails() {
    this._http.get('https://dummyjson.com/products/1')
    .pipe(
      // retry(2)
      retryWhen(err=>err.pipe(
        delay(1000),
        scan((retryCount)=>{
          if(retryCount >=5){
            throw err
          }else{
            retryCount = retryCount+1;
            console.log("retryCount: ", retryCount);
            return retryCount;
          }
        }, 0)
      ))

    )
    .subscribe(res => {
      console.log(res);
      this.data = res;
    });


  }

}
