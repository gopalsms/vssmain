import { Injectable } from '@angular/core';
import { Iblooddonors } from '../models/iblooddonors';  
//import { IbloodDonorsInfo } from '../interfaces/iblooddonorsinfo';
import { HttpClient } from '@angular/common/http';  
import { Observable } from 'rxjs'; 
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';
@Injectable({
  providedIn: 'root'
})
export class RestApiBlooddonationService {
  //url = "http://localhost:50468/";  
  url = "http://localhost:50001/";
  //Root_API="https://localhost:5001/api/BloodDonorsInfo/1,10"
  Root_API="https://localhost:5001/api/BloodDonorsInfo/"
  constructor(private httpservice: HttpClient) { }

  AllBloodDonorDetails(): Observable<Iblooddonors[]> {  
    return this.httpservice.get<Iblooddonors[]>(this.url + 'Api/UserAPI/AllUser') 
  }
  //getblood_donors_info_by_pagination(pagenumber: number,rowsofpage:number):Observable<IbloodDonorsInfo[]>
  //{
    //return this.httpservice.get<IbloodDonorsInfo[]>(this.Root_API + pagenumber + "," + rowsofpage);
  //}
}
