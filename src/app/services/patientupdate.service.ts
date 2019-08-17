import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { PatientInformation } from '../_models/PatientInformation';

@Injectable({
  providedIn: 'root'
})
export class PatientupdateService {

  constructor(private http: HttpClient) { }

  updatePatient(patientInformation: PatientInformation) {
    return this.http.put(`http://localhost:8083/updatepatient/${patientInformation.patientId}`, patientInformation);
  }



}

