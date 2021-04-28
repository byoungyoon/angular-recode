import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {HttpClientModule} from '@angular/common/http';
import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';

import { AppComponent } from './app.component';
import { StudentsComponent } from './students/students.component';
import { InMemoryDataService } from './in-memory-data.service';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import { StudentAddComponent } from './students/student-add/student-add.component';
import { StudentRoutingModule } from './students/student-routing/student-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    StudentsComponent,
    StudentAddComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    StudentRoutingModule,
    AppRoutingModule,

    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, {dataEncapsulation: false}
    ),

    BrowserAnimationsModule,

    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
