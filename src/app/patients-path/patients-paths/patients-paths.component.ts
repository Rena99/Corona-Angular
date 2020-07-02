import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { Patient } from 'src/app/Classes/patient';
import { HttpContextService } from 'src/app/http-context/http-context.service';
import { PatientsPath } from 'src/app/Classes/patientsPath';
import { MatTableDataSource } from '@angular/material/table';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-patients-paths',
  templateUrl: './patients-paths.component.html',
  styleUrls: ['./patients-paths.component.css']
})
export class PatientsPathsComponent implements OnInit {
  patient = {} as Patient;
  @Input() parentSubject:Subject<any>;
  urlPath = "http://localhost:52459/patient";
  displayedColumns: string[] = ['startDate', 'endDate', 'city', 'location', 'delete'];
  ELEMENT_DATA = [] as Array<PatientsPath>;
  dataSource = new MatTableDataSource<PatientsPath>(this.ELEMENT_DATA);
  constructor(private httpContext: HttpContextService) { }
    deletePath(id: number){
      let url = this.urlPath + "/" + id + "/" + this.patient.id;
      this.httpContext.deletePath(url, this.patient.token).subscribe({
        next: empty => {
          this.httpContext.getPatient(this.urlPath+"/"+this.patient.id+"/"+this.patient.passwordPatient+"/"+this.patient.patientName).subscribe({
            next: patient=>{
              this.patient=patient;
              this.httpContext.patient=patient;
              this.ELEMENT_DATA = this.patient.path;
              this.dataSource = new MatTableDataSource<PatientsPath>(this.ELEMENT_DATA);
            },
            error: err=>{
              console.log(err);
            }
          });
        },
        error: err => {
          console.log(err);
        }

      });
    }
    ngOnInit(): void {
     this.patient=this.httpContext.patient;
     this.ELEMENT_DATA=this.patient.path;
     this.dataSource = new MatTableDataSource<PatientsPath>(this.ELEMENT_DATA);
     this.parentSubject.subscribe(event => {
      this.httpContext.getPatient(this.urlPath+"/"+this.patient.id+"/"+this.patient.passwordPatient+"/"+this.patient.patientName).subscribe({
        next: patient=>{
          this.patient=patient;
          this.httpContext.patient=patient;
          this.ELEMENT_DATA = this.patient.path;
          this.dataSource = new MatTableDataSource<PatientsPath>(this.ELEMENT_DATA);
        },
        error: err=>{
          console.log(err);
        }
      });
    });
  }
    ngOnDestroy() {
     
      this.parentSubject.unsubscribe();
    }
}

