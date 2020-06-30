import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Patient } from "src/app/Classes/patient";
import {HttpContextService} from 'src/app/http-context/http-context.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-patient',
  templateUrl: './new-patient.component.html',
  styleUrls: ['./new-patient.component.css']
})
export class NewPatientComponent implements OnInit {
  patient: Patient=new Patient();
  errorMessage: any;
  constructor(private httpContext: HttpContextService, private router: Router) { }

  ngOnInit(): void {
    this.htmlChanges();
  }
  //urlPath = "https://localhost:44381/patient";
  urlPath="http://localhost:52459/patient";

htmlChanges() {
  this.patient.passwordPatient = 0;
  this.patient.patientName = '';
  this.patient.id = 0;
}

addAPatient(patientID, patientPassword, patientName) {
    let url = this.urlPath + "/" + patientID + "/" + patientPassword + "/" + patientName;
    this.httpContext.getPatient(url).subscribe({
      next: patient=>{
        if(patient===null){
          this.AddNewPatientToDB(this.patient);
        }
        else{
        this.patient=patient;
        this.router.navigate(['./patientsPaths']);
        this.httpContext._patient=this.patient;
        }
      },
      error: err=>{
        this.errorMessage=err;
        console.log(this.errorMessage);
      }
    })
  }

AddNewPatientToDB(patient:Patient) {
  let url = this.urlPath;
  this.httpContext.addPatient(url, patient).subscribe({
    next: empty=>{
      this.addAPatient(patient.id, patient.passwordPatient, patient.patientName);
    },
    error: err=>{
      this.errorMessage=err;
      console.log(this.errorMessage);
    }
  });
}



}

