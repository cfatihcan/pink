
import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { asyncScheduler, AsyncSubject, BehaviorSubject, bindCallback, defer, empty, from, fromEvent, generate, iif, interval, observable, Observable, of, range, ReplaySubject, Subject, timer } from 'rxjs';
import { FormBuilder } from '@angular/forms';
import { Patient } from './models/patient';
import { PatientService } from './services/patient.service';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {

  horizontalPosition: MatSnackBarHorizontalPosition = 'start';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';
  patient : Patient = new Patient();
  patList :Patient[] = [];
  name: string = "";
  title = 'mybach';
  displayedColumns: string[] = [ 'policliniC_CODE', 'doctoR_REC_ID', 'doctoR_NAME_SURNAME', 'patienT_NAME', 'patienT_SURNAME', 'patienT_BIRTHDAY' 
    , 'patienT_REC_ID', 'patienT_PHONE', 'visiT_DATETIME', 'nexT_VISIT_DATETIME', 'doctoR_NOTE'];
  secimcinsiyet = [{"id" :1 ,"label":"Kadın"},{"id" :2 ,"label":"Erkek"},{"id" :3 ,"label":"Belirtilmemiş"}]
 
  totalData: any;


  constructor(
  
    private patientservice: PatientService,
    private formBuilder: FormBuilder,
    private _snackBar: MatSnackBar,) {

  }

  ngOnInit(): void {
  
  }

  ngAfterViewInit(): void {

  }

  ara() {
    console.log(this.patient);
   this.patientservice.getContacts().subscribe((res) => {
      this.patList = res;

    }); 
  }
  ara2(){
  
  }

  kaydet()
  {
    console.log(this.patient);
    this.patientservice.save(this.patient).subscribe(msg=>{
      this.mesajBas('Kayıt işlemi tamamlandı','Tamam')
      this.ara();}, 
      err  =>{ 
        this.mesajBas('Zorunlu Alanları Doldurunuz.. ' + err.message,"HATA")
      console.error(err); });;

     

  }

  mesajBas(message  :string ,durum :string) {
    this._snackBar.open(message, durum, {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });
  }
  
    
}

  









