import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Student } from '../student';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css']
})
export class StudentDetailComponent implements OnInit {
  student !: Student;
  modifyForm : boolean = false;
  formGroup !: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private StudentService: StudentService
  ) { }
    
  ngOnInit(): void {
    this.formGroup = new FormGroup({
      name: new FormControl("",[
        Validators.required,
        Validators.minLength(2)
      ]),
      gender: new FormControl("",[
        Validators.required
      ])
    });
    this.getStudent();
    
  }

  ngAfterContentInit(): void{
    this.formGroup.patchValue({
      name: this.student.name,
      gender: this.student.gender
    });
  }

  handleModifyForm(): void{
    this.modifyForm = !this.modifyForm;
    
  }

  getStudent(): void{
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.StudentService.getStudent(id).subscribe(student=> this.student = student);
  }
}
