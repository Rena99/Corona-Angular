import { Injectable } from '@angular/core';
import { Patient } from '../Classes/patient';
import { HttpParams, HttpClient, HttpHeaders, HttpHandler } from '@angular/common/http';
import { Observable } from 'rxjs';


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
getPatient(url) {
  return this.http.get<Patient>(url);
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
addPath(url, path, cookie): Observable<void> {
  const httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
      "Authorization": "Bearer " + cookie.substring(6)
    })
  }
  const requestBody = JSON.stringify(path);
  return this.http.put<void>(url, requestBody, httpOptions);
}
  deletePath(url, cookie)
  {
    const httpOptions = {
      headers: new HttpHeaders({
        "Authorization": "Bearer " + cookie.substring(6)
      })
    }
    return this.http.delete(url, httpOptions); 
  }
}
