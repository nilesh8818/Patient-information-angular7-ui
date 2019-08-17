import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PatientRequest } from '../_models/PatientRequest';
import { PatientCreateService } from '../services/patientcreate.service';
import { Toaster } from 'ngx-toast-notifications';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-patient-register',
  templateUrl: './patient-register.component.html',
  styleUrls: ['./patient-register.component.css']
})
export class PatientRegisterComponent implements OnInit {
  angForm: FormGroup;
  firstName:string='';
  lastName: '';
  state: '';
  city: '';
  public patientResponse: any;
  // public error: boolean;


  constructor(
    private formBuilder: FormBuilder, private patientRequest: PatientRequest, private patientCreateService: PatientCreateService, private toaster: Toaster
  ) {

  }

  ngOnInit() {
    this.angForm = this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.pattern('^[a-zA-Z \-\']+')]],
      lastName: ['', [Validators.required, Validators.pattern('^[a-zA-Z \-\']+')]],
      state: ['', [Validators.required, Validators.pattern('^[a-zA-Z \-\']+')]],
      city: ['', [Validators.required, Validators.pattern('^[a-zA-Z \-\']+')]]
      // password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  registerUser() {
    console.log('first name is:' + this.firstName);
    console.log('last name is:' + this.lastName);
    console.log('state name is:' + this.state);
    console.log('city name is:' + this.city);
    this.patientRequest.firstName = this.firstName;
    this.patientRequest.lastName = this.lastName;
    this.patientRequest.state = this.state;
    this.patientRequest.city = this.city;
    let response: any;
    this.patientCreateService.createPatient(this.patientRequest).
      subscribe((data: any) => {
        response = data
        this.angForm.reset();
        console.log("ok ok");
        console.log(response);
        if (response.patientId != null) {
          this.toaster.open({
            caption: "patient save successfully",
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
