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
  patient={} as Patient;
  errorMessage: any;
  
username: string;
password: string;
id: string;
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

login() {
  this.patient.id=parseInt(this.id);
  this.patient.patientName=this.username;
  this.patient.passwordPatient=parseInt(this.password);
    let url = this.urlPath + "/" + this.patient.id + "/" + this.patient.passwordPatient + "/" + this.patient.patientName;
    this.httpContext.getPatient(url).subscribe({
      next: patient=>{
        if(patient===null){
          this.AddNewPatientToDB(this.patient);
        }
        else{
        this.patient=patient;
        this.router.navigate(['./paths']);
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
      this.login();
    },
    error: err=>{
      this.errorMessage=err;
      console.log(this.errorMessage);
    }
  });
}



}

