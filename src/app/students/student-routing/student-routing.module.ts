import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { StudentsComponent } from '../students.component';
import { StudentAddComponent } from '../student-add/student-add.component';
import { StudentDetailComponent } from '../student-detail/student-detail.component';

const routes: Routes = [
  {path: 'students', component: StudentsComponent},
  {path: 'studentAdd', component: StudentAddComponent},
  {path: 'student/:id', component: StudentDetailComponent}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, {enableTracing: true})
  ]
})
export class StudentRoutingModule { }
