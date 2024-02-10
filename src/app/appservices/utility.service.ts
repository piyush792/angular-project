import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Search } from '../appInterface/search.interface';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {


  url="https://my-json-server.typicode.com/Uxtrendz/apis/VideoList";


  constructor(private _http:HttpClient) { }

  print(val:any, containerId:any){
    let el = document.createElement('li');
    el.innerText = val;
    document.getElementById(containerId)?.appendChild(el)
  }

  getSearches(searchTerm:any):Observable<Search>{
    return this._http.get<Search>(this.url+'?q='+searchTerm);
  }
}
