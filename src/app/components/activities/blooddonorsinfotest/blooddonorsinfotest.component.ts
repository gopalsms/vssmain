import { Component, OnInit } from '@angular/core';
import { Observable, from, take } from 'rxjs'; 
import { Iblooddonorsinfo } from 'src/app/models/iblooddonorsinfo';
//import { Donorsinfo } from 'src/app/models/donorsinfo.model';
import { BlooddonorsinfoService } from 'src/app/services/blooddonorsinfo.service';
import { searchdropdown } from 'src/app/models/search-dropdown.model';
import { BloodDonorsInfo } from 'src/app/models/blood-donors-info.model';
@Component({
  selector: 'app-blooddonorsinfotest',
  templateUrl: './blooddonorsinfotest.component.html',
  styleUrls: ['./blooddonorsinfotest.component.css']
})
export class BlooddonorsinfotestComponent implements OnInit {
  blood_donors_detail!:BloodDonorsInfo[];
  total_record_count: number = 0;
  pagination: number = 1;

  //blood_donors_detail:any;
  pageno: number = 1;
  rowsperpage: number = 10;
  total: number = 0;
  selectedddl:any;
  searchText: any;
  public errorMsg:any;

  constructor(private apidbservice: BlooddonorsinfoService) { }
  searchdropdownlist: searchdropdown[] = [
    //{value: 'NA', viewtext: '--Select--'},
    //{value: 'BloodDonorID', viewtext: 'ID'},
    {value: 'BloodDonorName', viewtext: 'Name'},
    {value: 'BloodGroupName', viewtext: 'Blood Group'},
  ];
  ngOnInit() {
    
    this.getblood_donors_info_by_pagination();
    console.log(this.pageno,this.rowsperpage);
   
    console.log(this.getblood_donors_info_by_pagination());
  }

  // loadData(): void {
  //   this.apiservice.get<any[]>(`/api/data?PageNumber=${this.currentPage}&RowsOfPage=10`).subscribe(data => {
  //     this.data = data;
  //     this.totalPages = Math.ceil(data.length / 10);
  //   });
  // }

  getblood_donors_info_by_pagination()
  {
    this.apidbservice.getblood_donors_info_by_pagination(this.pageno,this.rowsperpage).subscribe((response:any)=>{      
      this.blood_donors_detail =response;      
      this.total = this.blood_donors_detail[0].recordCount;
      console.log(response);
    }
    ,
    (error) => {
      // Handle error
    }
    )

  }
  pageindex(pageindex: any, pagedatacount: number) {
    throw new Error('Method not implemented.');
  }
  //onSelected(value:string): void {
		//this.selectedddl = value;
	//}

  searchdata()
  {
    if(this.selectedddl==null)
    {
      alert("Please choose search criteria.");
      return;
    }
    if(this.searchText==null || this.searchText =="")
    {
      alert("Please enter value for search.");
      return;

    }
    this.apidbservice.getsearchdata(this.selectedddl,this.searchText)
    .subscribe((response: any)=>{      
      this.blood_donors_detail =response;      
      this.total = response.total;
      console.log(this.selectedddl);
      console.log(this.searchText);
      console.log(response);
    })

  }
  resetdata()
  {
    //this.selectedddl.value='NA';
    this.searchText='';
    //this.getblood_donors_info_by_pagination();
    this.apidbservice.getblood_donors_info_by_pagination(1,10)
    .subscribe((response: any)=>{      
      this.blood_donors_detail =response;      
      this.total = this.blood_donors_detail[0].recordCount;
      console.log(response);
    })

  }
  pageChangeEvent(event: number) {
    this.pageno = event;
    console.log(this.pageno,this.rowsperpage);
    this.getblood_donors_info_by_pagination();
  }  
}
