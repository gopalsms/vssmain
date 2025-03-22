import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';  
import { Observable } from 'rxjs';
//import { Donorsinfo } from 'src/app/models/donorsinfo.model';
import { environment } from 'src/environments/environment';
import { BloodDonorsInfo } from '../models/blood-donors-info.model';

//import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class BlooddonorsinfoService {
  base_api_url:string=environment.BaseURL;
  root_node="api/BloodDonorsInfo/"
  pagination_node="GetBloodDonorsInfoByPagination"
  search_node="GetSearchData/"
  private apiurl = "";  
//apiURL = environment.production;
  constructor(private httpservice: HttpClient) { }

  getblood_donors_info_by_pagination(pageno: number,rowsperpage:number):Observable<BloodDonorsInfo[]>
  {
    //this.url = 'this.base_api_url+ this.root_node + this.pagination_node?PageNumber=' + pageno + '&RowsOfPage=' + rowsperpage
    console.log(this.base_api_url+ this.root_node + this.pagination_node+"?"+"PageNumber=" + pageno + "&RowsOfPage=" + rowsperpage);
    console.log("http://localhost:8085/api/BloodDonorsInfo/GetBloodDonorsInfoByPagination/1,10");
    this.apiurl=this.base_api_url+ this.root_node + this.pagination_node+"," + pageno + "/" + rowsperpage
    //return this.httpservice.get<BloodDonorsInfo[]>("http://localhost:8085/api/BloodDonorsInfo/GetBloodDonorsInfoByPagination/1/10");
    
    return this.httpservice.get<BloodDonorsInfo[]>(this.apiurl);
    
    //return this.httpservice.get<BloodDonorsInfo[]>(this.base_api_url+ this.root_node + this.pagination_node+"/" + pageno + "," + rowsperpage);
    
  }
  getsearchdata(searchfield:string,searchvalue:string):Observable<BloodDonorsInfo[]>
  {
    return this.httpservice.get<BloodDonorsInfo[]>(this.base_api_url+ this.root_node + this.search_node + searchfield + "," + searchvalue);

  }
}
