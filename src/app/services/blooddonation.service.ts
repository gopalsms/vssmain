import { Injectable } from '@angular/core';
import { Iblooddonors } from '../models/iblooddonors';  
import { HttpClient,HttpHeaders  } from '@angular/common/http';  
import { Observable } from 'rxjs'; 
import  BloodDonorsData  from '../../assets/bloods/blood_2021.json';
@Injectable({
  providedIn: 'root'
})
export class BlooddonationService {
  //APIurl = "http://localhost:50468/";  
  APIurl = "http://localhost:50001/"; 

  constructor(private http: HttpClient) {
     
   }
   httpOptions = {  
    headers: new HttpHeaders({  
      'Content-Type': 'application/json'  
    })  
  }    
 
  AllBloodDonorDetails(): Observable<Iblooddonors[]> {  
    /*return this.http.get<IBloodDonors[]>(this.APIurl + 'Api/UserAPI/AllUser') */
    return this.http.get<Iblooddonors[]>("../../assets/bloods/blood_donor-list.json")
    /*return this.http.get<Iblooddonors[]>("../../assets/bloods/blood_donon_list.json")*/
  }
  getData(): Observable<Iblooddonors[]> {  
       
    return this.http.get<Iblooddonors[]>(this.APIurl + 'api/BloodGroupinfo');  //https://localhost:44352/ webapi host url  
  }  
  
  //postData(formData){  
   // return this.http.post('/api/Employee',formData);  
  //}  
  
  //putData(id,formData){  
    //return this.http.put('/api/Employee/'+id,formData);  
  //}  
  //deleteData(id){  
    //return this.http.delete('/api/Employee/'+id);  
  //}  
}
