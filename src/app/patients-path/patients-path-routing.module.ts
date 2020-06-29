import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NewPatientComponent } from './new-patient/new-patient.component';
import {NewPathComponent} from './new-path/new-path.component';
import { PatientsPathsComponent } from './patients-paths/patients-paths.component';



@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild([
      {path:'newPatient', component: NewPatientComponent},
      {path: '', redirectTo: 'newPatient', pathMatch: 'full'},
      {path: 'newPth', component: NewPathComponent},
      {path: 'patientsPaths', component:PatientsPathsComponent}
    ]),
    CommonModule
  ]
})
export class PatientsPathRoutingModule { }
