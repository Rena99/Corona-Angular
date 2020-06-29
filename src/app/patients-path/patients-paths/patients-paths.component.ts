import { Component, OnInit } from '@angular/core';
import { Patient } from 'src/app/Classes/patient';
import { HttpContextService } from 'src/app/http-context/http-context.service';

@Component({
  selector: 'app-patients-paths',
  templateUrl: './patients-paths.component.html',
  styleUrls: ['./patients-paths.component.css']
})
export class PatientsPathsComponent implements OnInit {
  patient:Patient;
  urlPath = "https://localhost:44381/patient";
  constructor(private httpContext: HttpContextService) { }
deletePath(id:number){
  let url=this.urlPath  + "/" + this.patient.cookie.substring(6);
  this.httpContext.deletePath(url, this.patient.cookie).subscribe(()=>{
  let path=this.patient.paths.findIndex(p=>p.id==id);
  this.patient.paths.splice(path, 1);
  this.httpContext.patient=this.patient;
  });
}
  ngOnInit(): void {
    this.patient=this.httpContext.patient;
  }

}
