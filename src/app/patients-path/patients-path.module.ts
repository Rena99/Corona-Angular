import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewPatientComponent } from './new-patient/new-patient.component';
import {TitleComponent} from './title/title.component';
import {PatientsPathRoutingModule} from './patients-path-routing.module';
import {HttpContextModule} from 'src/app/http-context/http-context.module';
import {NewPathComponent} from './new-path/new-path.component';
import { PatientsPathsComponent } from './patients-paths/patients-paths.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {MatDatepickerModule} from '@angular/material/datepicker';


@NgModule({
  declarations: [
    NewPatientComponent,
    TitleComponent,
    NewPathComponent,
    PatientsPathsComponent
  ],
  imports: [
    CommonModule,
    PatientsPathRoutingModule,
    HttpContextModule,
    FormsModule,
    HttpClientModule,
    MatDatepickerModule
  ]
})
export class PatientsPathModule { }
