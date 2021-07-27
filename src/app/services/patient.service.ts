import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Operator, throwError } from 'rxjs';
import { map } from 'rxjs/operators';

import { catchError, retry } from 'rxjs/operators';

import { Patient } from '../models/patient';


@Injectable({
  providedIn: 'root'
})

export class PatientService {


  configUrl = 'http://localhost:5000/patient/get/0/100';

  constructor(private http: HttpClient) { }


  public getContacts(): Observable<Patient[]> {
    return this.http.get<Patient[]>(this.configUrl);
  }


  save(patient: Patient): Observable<any> {

    return this.http.post("http://localhost:5000/patient/save", patient);
  }



  error(error: HttpErrorResponse) {

    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }


}
