import { Component, OnInit, Output } from '@angular/core';
import { Patient } from 'src/app/Classes/patient';
import { HttpContextService } from 'src/app/http-context/http-context.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-paths',
  templateUrl: './paths.component.html',
  styleUrls: ['./paths.component.css']
})
export class PathsComponent implements OnInit {
  patient={} as Patient;
  parentSubject:Subject<any> = new Subject();
  constructor(private httpContext: HttpContextService) { }

  ngOnInit(): void {
    this.patient=this.httpContext.patient;
  }
  onPathAdded(event){
    this.parentSubject.next(event);
  }
}
