import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from './student';

import {catchError, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(
    private http: HttpClient
  ) { }

  private studentUrl = 'api/students';

  getStudents(): Observable<Student[]>{
    return this.http.get<Student[]>(this.studentUrl);
  }
}
