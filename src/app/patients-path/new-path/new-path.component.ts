import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { PatientsPath } from 'src/app/Classes/patientsPath';
import { Patient } from 'src/app/Classes/patient';
import { HttpContextService } from 'src/app/http-context/http-context.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-path',
  templateUrl: './new-path.component.html',
  styleUrls: ['./new-path.component.css']
})
export class NewPathComponent implements OnInit {
  path: PatientsPath;
  patient: Patient;
  urlPath = "https://localhost:44381/patient";
  constructor(private httpContext: HttpContextService, private router:Router){}

  deleteInputItems() {
          this.path.city = '';
          this.path.endDate = null;
          this.path.locationC = '';
          this.path.startDate=null;
  };
      
  addANewObjectToPatientPathArray() {
    let url=this.urlPath  + "/" + this.patient.cookie.substring(6);
    this.httpContext.addPath(url, this.path, this.patient.cookie).subscribe((data: void)=>{
            this.patient.paths.push(this.path);
            this.httpContext.patient=this.patient;
            this.deleteInputItems();
          });
  };
  switchPatient() {
    this.router.navigate(['./newPatient']);
}

  ngOnInit(): void {
    this.patient=this.httpContext.patient;
  }

}
