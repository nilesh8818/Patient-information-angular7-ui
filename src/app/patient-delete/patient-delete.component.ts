import { Component, OnInit } from '@angular/core';
import { PatientdeleteService } from '../services/patientdelete.service';
import { Toaster } from 'ngx-toast-notifications';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-patient-delete',
  templateUrl: './patient-delete.component.html',
  styleUrls: ['./patient-delete.component.css']
})
export class PatientDeleteComponent implements OnInit {
  angForm: FormGroup;
  patientId: string = '';


  constructor(private deletePatientService: PatientdeleteService, private toaster: Toaster, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.angForm = this.formBuilder.group({
      patientId: ['', Validators.required]
    });
  }

  deletePatient() {

    alert("Are you sure.you want to delete this record for id=" + this.patientId);
    this.deletePatientService.deletePatient(this.patientId).
      subscribe(
        (res: any) => {

        }, error => {
          console.log(error.status);
          if (error.status == ("404")) {
            this.toaster.open({
              text: "Patient not found",
              type: "danger",
            });
          }
          else {
            this.toaster.open({
              text: "Patient Deletd Successfully",
              type: "success",
            });
          }
        });
    this.angForm.reset();
  }
}
