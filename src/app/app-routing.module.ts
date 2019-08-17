import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PatientRegisterComponent } from './patient-register/patient-register.component';
import { PatientInformationComponent } from './patient-information/patient-information.component';
import { PatientUpdateComponent } from './patient-update/patient-update.component';
import { PatientDeleteComponent } from './patient-delete/patient-delete.component';
import { AppComponent } from './app.component';
import { PatientInformation } from './_models/PatientInformation';

const routes: Routes = [
  {path:'home',component:AppComponent},
  {path:'createpatient',component:PatientRegisterComponent},
  {path:'getpatient',component:PatientInformationComponent},
  // {path:'updatepatient/:patientId',component:PatientUpdateComponent},
  {path:'updatepatient/:patientId/:firstName/:lastName/:city/:state',component:PatientUpdateComponent},
  {path:'deletepatient',component:PatientDeleteComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
