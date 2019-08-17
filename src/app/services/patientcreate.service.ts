import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PatientRequest } from '../_models/PatientRequest';
import { HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PatientCreateService {

  // private url:string="";

  constructor(private http:HttpClient) { }

  createPatient(patientRequest:PatientRequest){
          return  this.http.post('http://localhost:8083/make',patientRequest);
      }
 
}
