import { HttpClient, HttpHeaders } from '@angular/common/http';
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
  httpOptions = {
    headers : new HttpHeaders({'Context-Type' : 'application/json'})
  }

  addStduent(student: Student): Observable<Student>{
    return this.http.post<Student>(this.studentUrl, student, this.httpOptions);
  }

  deleteStudent(id: number): Observable<Student>{
    const url = `${this.studentUrl}/${id}`;

    return this.http.delete<Student>(url, this.httpOptions);
  }

  getStudents(): Observable<Student[]>{
    return this.http.get<Student[]>(this.studentUrl);
  }

  getStudent(id: number): Observable<Student>{
    const url = `${this.studentUrl}/${id}`;
    return this.http.get<Student>(url);
  }
}
