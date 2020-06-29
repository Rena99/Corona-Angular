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
  patient: Patient=new Patient(0, '', 0, []);
  constructor(private httpContext: HttpContextService, private router: Router) { }

  ngOnInit(): void {
  }
  urlPath = "https://localhost:44381/patient";

htmlChanges() {
  this.patient.password = 0;
  this.patient.pName = '';
  this.patient.id = 0;
}

addAPatient(patientID, patientPassword, patientName) {
  this.htmlChanges();
 this.router.navigate(['./patientsPaths']);
    // let url = this.urlPath + "/" + this.patient.id + "/" + this.patient.password + "/" + this.patient.pName;
    // this.httpContext.getPatient(url).subscribe((data: Patient) => {
    //     if (data.id !== 0) {
    //       this.patient=data;
    //       this.httpContext.patient=this.patient;
    //       this.router.navigate(['./newPath']);
    //     }
    //     else{
    //       this.AddNewPatientToDB(this.patient);
    //     }
    //   })
}

AddNewPatientToDB(patient) {
  let url = this.urlPath;
  this.httpContext.addPatient(url, patient).subscribe();
  this.addAPatient (patient.id, patient.password, patient.name);
}



}

