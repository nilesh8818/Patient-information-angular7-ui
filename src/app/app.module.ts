import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PatientRegisterComponent } from './patient-register/patient-register.component';
import { PatientUpdateComponent } from './patient-update/patient-update.component';
import { PatientDeleteComponent } from './patient-delete/patient-delete.component';
import { PatientInformationComponent } from './patient-information/patient-information.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PatientRequest } from './_models/PatientRequest';
import { PatientCreateService } from './services/patientcreate.service';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { ToastNotificationsModule } from "ngx-toast-notifications";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OnePatientComponent } from './one-patient/one-patient.component';
import { PatientgetService } from './services/patientget.service';
import{PatientupdateService} from './services/patientupdate.service';;
import { NgxSpinnerModule } from "ngx-spinner";
import { PatientInformation } from './_models/PatientInformation';
import { PatientdeleteService } from './services/patientdelete.service';

@NgModule({
  declarations: [
    AppComponent,
    PatientRegisterComponent,
    PatientUpdateComponent,
    PatientDeleteComponent,
    PatientInformationComponent,
    OnePatientComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    ToastNotificationsModule.forRoot(),
    BrowserAnimationsModule,
    NgxSpinnerModule
  ],
  providers: [PatientRequest,PatientInformation,PatientCreateService,PatientgetService,PatientupdateService,PatientdeleteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
