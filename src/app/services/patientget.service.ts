import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse,HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PatientgetService {

  constructor(private http:HttpClient) {}

  getAllPatient() {
    return  this.http.get('http://localhost:8083/getallpatient');
  }

  getPatientByName(patientFirstName)
  {
    let params = new HttpParams().set('firstName', patientFirstName);
    return this.http.get<any>('http://localhost:8083/getpatientbyname',{params:params});
  }
}
