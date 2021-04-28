import { Component, OnInit } from '@angular/core';
import {FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-student-add',
  templateUrl: './student-add.component.html',
  styleUrls: ['./student-add.component.css']
})
export class StudentAddComponent implements OnInit {
  addForm = this.formBuilder.group({
    name: '',
    gender: '',
    score: 0
  });
  constructor(
    private formBuilder : FormBuilder
  ) { }

  ngOnInit(): void {
  }

  onSubmit() : void {
    console.log(this.addForm);
  }

}
