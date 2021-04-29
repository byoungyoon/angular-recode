import { Component, OnInit } from '@angular/core';
import {FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';
import { Student } from '../student';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student-add',
  templateUrl: './student-add.component.html',
  styleUrls: ['./student-add.component.css']
})
export class StudentAddComponent implements OnInit {
  students : Student[] = [];

  addForm = this.formBuilder.group({
    name: '',
    gender: '',
    score: 0
  });
  constructor(
    private formBuilder : FormBuilder,
    private studentService: StudentService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onSubmit() : void {
    let name = this.addForm.controls['name'].value;
    let gender = this.addForm.controls['gender'].value;
    let score = this.addForm.controls['score'].value;

    this.studentService.addStduent({name, gender, score} as Student)
      .subscribe(student=> this.students.push(student));
    
    this.router.navigate(['/students']);
  }

}
