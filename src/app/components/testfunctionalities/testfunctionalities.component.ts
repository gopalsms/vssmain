import { Component, OnInit, ViewChild } from '@angular/core'; 
import { FormBuilder, Validators } from '@angular/forms';
import { Observable, from, take } from 'rxjs'; 
import { Iblooddonors } from '../../models/iblooddonors'; 
//import { IbloodDonorsInfo } from '../../interfaces/iblooddonorsinfo';
import { MatTableDataSource, } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
/*import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';*/
/*import {MatSort, MatTableDataSource, MatPaginator} from '@angular/material'*/
import { BlooddonationService } from './../../services/blooddonation.service';  
import { RestApiBlooddonationService } from 'src/app/shared/rest-api-blooddonation.service';


@Component({
  selector: 'app-testfunctionalities',
  templateUrl: './testfunctionalities.component.html',
  styleUrls: ['./testfunctionalities.component.css']
})
export class TestfunctionalitiesComponent implements OnInit {
  allBloodDonors!: Observable<Iblooddonors[]>;
  searchedKeyword!: string;
  /*dataSource: MatTableDataSource<IUser>; */
  dataSource!: MatTableDataSource<Iblooddonors>;
  //dataSource!: MatTableDataSource<IbloodDonorsInfo>;
  displayedColumns: string[] = ['slno', 'name', 'age', 'contactno','bloodgroup','address','donationdate','venue'];  
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort!: MatSort;

  //blood_donors_info: IbloodDonorsInfo[] = [];
    // columns we will show on the table
    //public displayedColumns = ['BloodDonorID', 'BloodDonorName', 'BloodDonorAge', 'BloodDonorContactNo', 'BloodGroupID', 'BloodGroupName', 'BloodDonorAddress', 'BloodDonateTo',  'BloodDonationDate', 'Remarks', 'IsActive' ];
    //the source where we will get the data
    //public ds = new MatTableDataSource<IbloodDonorsInfo>();
  //dependency injection
  constructor(private service: BlooddonationService) {
   
//debugger;
    //this.blooddonorsinfoService.getblood_donors_info_by_pagination(1,10)
    //.subscribe(data =>{  
      //console.log(data);
      //this.dataSource = new MatTableDataSource(data);  
      //this.dataSource.paginator = this.paginator;  
      //this.dataSource.sort = this.sort;  
      //}); 

   }

  ngOnInit() {
   
    //call this method on component load
    this.service.AllBloodDonorDetails().pipe(take(1)).subscribe(data =>{  
      this.dataSource = new MatTableDataSource(data);
      console.log(this.dataSource);  
      this.dataSource.paginator = this.paginator;  
      this.dataSource.sort = this.sort;  
    }); 
    //this.getblood_donors_info_by_pagination();
    //this.dataSource.paginator = this.paginator;  
    //this.dataSource.sort = this.sort;  
  }

  applyFilter(filterValue: string) {  
    //this.dataSource.filter = filterValue.trim().toLowerCase();  
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator)
    {
      this.dataSource.paginator.firstPage();

    }
    //if (this.dataSource.paginator) {  
      //this.dataSource.paginator.firstPage();  
    //}  
  }
  getblood_donors_info_by_pagination()
  {
    //this.blooddonorsinfoService.getblood_donors_info_by_pagination(1,10)
    //.subscribe((res)=>{
      //console.log(res);
      //this.dataSource = new MatTableDataSource(res);
      //this.dataSource.paginator = this.paginator;  
      //this.dataSource.sort = this.sort;  
    //})

  }  

}
