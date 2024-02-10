import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormsModule, NgForm } from '@angular/forms';
import { concatMap, debounceTime, distinctUntilChanged, filter, map, pluck, switchMap } from 'rxjs';
import { UtilityService } from '../appservices/utility.service';
import { Search } from '../appInterface/search.interface';

@Component({
  selector: 'app-subject',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './subject.component.html',
  styleUrl: './subject.component.scss'
})
export class SubjectComponent implements AfterViewInit{

  // exclusive: boolean = false;
  @ViewChild('searchForm') searchForm:NgForm | undefined;
  searchResults:any;

  constructor(private _utilityService: UtilityService){
  }

  ngAfterViewInit(): void {
    // throw new Error('Method not implemented.');

    const formValue = this.searchForm?.valueChanges;
    formValue?.pipe(
      filter(():any=>this.searchForm?.valid),
      map((data:any)=>
        // console.log("searchTerm: ", data.searchTerm)
        data.searchTerm
      ),
      // pluck('searchTerm'),
      debounceTime(500),
      distinctUntilChanged(),
      switchMap(res=> 
        this._utilityService.getSearches(res))
    )
    ?.subscribe(res2=>{
      console.log("res2: ", res2);
      this.searchResults = res2;
    })

  }

  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }

}
