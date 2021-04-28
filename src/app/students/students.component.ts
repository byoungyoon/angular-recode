import { Component, OnInit } from '@angular/core';
import { Student } from './student';
import { StudentService } from './student.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  students !: Student[];
  constructor(
    private studentService : StudentService
  ) { }

  ngOnInit(): void {
    this.getStudents();
  }

  delete(student: Student): void{
    this.students = this.students.filter(data=> data !== student);
    this.studentService.deleteStudent(student.id).subscribe();
  }

  getStudents(): void{
    this.studentService.getStudents().subscribe(students=> this.students = students)
  }
}
