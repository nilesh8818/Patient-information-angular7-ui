import { Component, OnInit, ɵɵqueryRefresh } from '@angular/core';
import { PatientgetService } from '../services/patientget.service';
import { PatientInformation } from '../_models/PatientInformation';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from "ngx-spinner";
import { PatientdeleteService } from '../services/patientdelete.service';
import { Toaster } from 'ngx-toast-notifications';

@Component({
  selector: 'app-patient-information',
  templateUrl: './patient-information.component.html',
  styleUrls: ['./patient-information.component.css']
})
export class PatientInformationComponent implements OnInit {

  allPatient: PatientInformation[] = [];
  onePatient: PatientInformation;
  showDisplay = false;
  showDisplayOne = false;
  showOnePatient = false;
  showSpinner=false;
  showAll=false;
  angForm: FormGroup;
  firstName: '';
  patientArray: PatientInformation[] = [];


  constructor(private patientGetService: PatientgetService, private formBuilder: FormBuilder, private router: Router, private spinner: NgxSpinnerService,private deletePatientService:PatientdeleteService,private toaster: Toaster) { }

  ngOnInit() {
    this.angForm = this.formBuilder.group({
      firstName: ['', Validators.required]
    });
  }

  

  getAllPatient() {
    this.showDisplayOne=false;
    this.showSpinner=true;
    this.spinner.show();
    this.showOnePatient = false;
    this.patientGetService.getAllPatient()
      .subscribe(
        (res: any) => {
          setTimeout(() => {
            this.spinner.hide();
          }, 2000);
          this.allPatient = res;
          this.showDisplay = true;
          this.showOnePatient = false;
          console.log(this.allPatient);
        },
        error => {
          this.showDisplay = true;
          this.showOnePatient = false;
          setTimeout(() => {
            this.spinner.hide();
          }, 2000);
        });
        this.showOnePatient=false;
  }


  getOnePatient() {
    this.showSpinner=true;
    this.showDisplayOne = true;
    this.showDisplay = false;
    console.log('first name is:' + this.firstName);
    this.patientGetService.getPatientByName(this.firstName).
      subscribe(
        (res: any) => {
          this.spinner.show();
          setTimeout(() => {
            this.spinner.hide();
          }, 1000);
          this.onePatient = res;
          console.log(this.onePatient);
          this.showOnePatient = true;

          if (!this.showDisplayOne) {
            this.showOnePatient = true;
          }

        },error => {
          if (error.status == ("404")) {
            this.toaster.open({
              text: "Patient not found",
              type: "danger",
            });
          }
        });
        this.angForm.reset();
  }

  getPatientByName()
  {
    this.showSpinner=true;
    this.showDisplay = false;
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
    }, 1000);
    this.showDisplayOne=true;
  }

  onSelectPatient(pat: any) {
    this.router.navigate(['/updatepatient', pat.patientId,pat.firstName,pat.lastName,pat.city,pat.state]);
  }

  deletePatient(pat:any)
  {
    
    alert("Are you sure.you want to delete this record for id="+pat.patientId);
      this.deletePatientService.deletePatient(pat.patientId).
      subscribe(
        (res: any) => {
         console.log('record delted successfully');
          });
          this.showSpinner=true;
          this.spinner.show();
          setTimeout(() => {
            this.spinner.hide();
          }, 1000);
        this.showOnePatient=false;
       this.patientArray=this.allPatient.filter(patients=>patients.patientId!==pat.patientId);
       console.log(this.patientArray);
       this.allPatient=this.patientArray;
      }

      
}

