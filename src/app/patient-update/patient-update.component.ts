import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PatientRequest } from '../_models/PatientRequest';
import { PatientCreateService } from '../services/patientcreate.service';
import { Toaster } from 'ngx-toast-notifications';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute } from '@angular/router';
import { PatientInformation } from '../_models/PatientInformation';
import { PatientupdateService } from '../services/patientupdate.service';

@Component({
  selector: 'app-patient-update',
  templateUrl: './patient-update.component.html',
  styleUrls: ['./patient-update.component.css']
})
export class PatientUpdateComponent implements OnInit {
  patId: string = '';
  angForm: FormGroup;
  firstName: string='';
  lastName:string='';
  state:string='';
  city:string='';
  public patientResponse: any;

  constructor(
    private route: ActivatedRoute, private formBuilder: FormBuilder, private patientInformation: PatientInformation, private patientUpdateService: PatientupdateService, private toaster: Toaster) {

  }

  ngOnInit() {
    this.angForm = this.formBuilder.group({
      patId: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      state: ['', Validators.required],
      city: ['', Validators.required]
    });

    this.patId = this.route.snapshot.paramMap.get('patientId');
    this.firstName = this.route.snapshot.paramMap.get('firstName');
    this.lastName = this.route.snapshot.paramMap.get('lastName');
    this.state = this.route.snapshot.paramMap.get('state');
    this.city = this.route.snapshot.paramMap.get('city');
    console.log(this.patId);   
  }


  patientUpdate()
  {
      console.log('firstId name is:'+this.patId);
      console.log('first name is:' + this.firstName);
      console.log('last name is:' + this.lastName);
      console.log('state name is:' + this.state);
      console.log('city name is:' + this.city);
      this.patientInformation.patientId=this.patId;
      this.patientInformation.firstName = this.firstName;
      this.patientInformation.lastName = this.lastName;
      this.patientInformation.state = this.state;
      this.patientInformation.city = this.city;
      let response: any;
      this.patientUpdateService.updatePatient(this.patientInformation).
        subscribe((data: any) => {
          response = data
          console.log("ok ok");
          console.log(response);
          if (response.patientId != null) {
            this.toaster.open({
              caption: "patient updated successfully",
              type: "success",
            });
          }
        },
          //error just for understanding error handling  in angular which is come from java services *****
          error => {
            // this.error=true;
            if (error.status == "404") {
              this.toaster.open({
                text: "User already exist with this username",
                type: "danger",
              });
            }
          }
        );
    }
  
}
