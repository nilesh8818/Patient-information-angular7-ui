import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PatientdeleteService {

  constructor(private http:HttpClient) { }

  deletePatient(patientId)
  {
      return this.http.delete(`http://localhost:8083/deletepatient/${patientId}`);   
  }
}
