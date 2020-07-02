import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { PatientsPath } from 'src/app/Classes/patientsPath';
import { Patient } from 'src/app/Classes/patient';
import { HttpContextService } from 'src/app/http-context/http-context.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, NgForm, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-new-path',
  templateUrl: './new-path.component.html',
  styleUrls: ['./new-path.component.css']
})
export class NewPathComponent implements OnInit {
  formGroup: FormGroup;
  path={} as PatientsPath;
  patient={}as Patient;
  urlPath="http://localhost:52459/patient";
  range = new FormGroup({
    start: new FormControl(),
    end: new FormControl()
  });
  @Output() pathAdded: EventEmitter<number>=new EventEmitter<number>();
  createForm() {
    this.formGroup = this.formBuilder.group({
      'city': [null, Validators.required],
      'location': [null, Validators.required],
      'date': [Validators.required],
      'validate': ''
    });
  }

  get city() {
    return this.formGroup.get('city') as FormControl
  }

  onSubmit(location, city) {
    this.addANewObjectToPatientPathArray(city, location);
  }

  
  
  constructor(private formBuilder: FormBuilder, private httpContext: HttpContextService, private router: Router) { }

  deleteInputItems() {
    this.ngOnInit();
  };

  addANewObjectToPatientPathArray(city, location) {
    this.path.startDate = this.range.controls.start.value;
    this.path.endDate = this.range.controls.end.value;
    this.path.city = city;
    this.path.locationC = location;
    let url = this.urlPath + "/" + this.patient.id;
    this.httpContext.addPath(url, this.path, this.patient.token).subscribe({
      next: path => {
        console.log(path)
        this.patient.path.push(path);
        this.httpContext._patient = this.patient;
        this.deleteInputItems();
        this.pathAdded.emit(path.id);
      },
      error: err => {
        console.log(err);
      }

    });
  };

  ngOnInit(): void {
    this.patient = this.httpContext._patient;
    this.createForm();
  }

}
