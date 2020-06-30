import { Component, OnInit } from '@angular/core';
import { Patient } from 'src/app/Classes/patient';
import { HttpContextService } from 'src/app/http-context/http-context.service';

@Component({
  selector: 'app-patients-paths',
  templateUrl: './patients-paths.component.html',
  styleUrls: ['./patients-paths.component.css']
})
export class PatientsPathsComponent implements OnInit {
  patient:Patient=new Patient();
  urlPath = "https://localhost:44381/patient";
  constructor(private httpContext: HttpContextService) { }
deletePath(id:number){
  let url=this.urlPath  + "/" + this.patient.token.substring(6);
  this.httpContext.deletePath(url, this.patient.token).subscribe(()=>{
  let path=this.patient.path.findIndex(p=>p.id==id);
  this.patient.path.splice(path, 1);
  this.httpContext.patient=this.patient;
  });
}
  ngOnInit(): void {
    console.log(this.httpContext._patient);
    console.log(this.httpContext.patient);
    this.patient=this.httpContext._patient;
    console.log(this.patient.path)
  }

}
