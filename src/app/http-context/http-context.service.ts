import { Injectable } from '@angular/core';
import { Patient } from '../Classes/patient';
import { HttpParams, HttpClient, HttpHeaders, HttpHandler } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PatientsPath } from '../Classes/patientsPath';


@Injectable({
  providedIn: 'root'
})
export class HttpContextService {
constructor(private http:HttpClient) { }
_patient:Patient;
public get patient(): Patient {
  return this._patient;
}

public set patient(patient: Patient) {
  this._patient = patient;
}
getPatient(url) :Observable<Patient>{
  return this.http.get<Patient>(url).pipe();
}
addPatient(url,patient): Observable<void> {
  const httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json"
    })
  };
  const requestBody = JSON.stringify(patient);
  return this.http.post<void>(url, requestBody, httpOptions);
}
addPath(url, path, cookie): Observable<PatientsPath> {
  const httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
      "Authorization": "Bearer " + cookie
    })
  }
  const requestBody = JSON.stringify(path);
  return this.http.put<PatientsPath>(url, requestBody, httpOptions).pipe();
}
  deletePath(url, cookie)
  {
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        "Authorization": "Bearer " + cookie
      })
    }
    return this.http.delete(url, httpOptions); 
  }
  getLocations(url) :Observable<PatientsPath[]>{
    return this.http.get<PatientsPath[]>(url).pipe();
  }
}
