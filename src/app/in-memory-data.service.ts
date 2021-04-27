import { Injectable } from '@angular/core';

import {InMemoryDbService} from 'angular-in-memory-web-api';
import { Student } from './students/student';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDataService{
  constructor() { }
  createDb(){
    const students = [
      {id: 1, name: "a", gender: "man", score: 5},
      {id: 2, name: "b", gender: "woman", score: 10},
      {id: 3, name: "c", gender: "man", score: 15},
      {id: 4, name: "d", gender: "woman", score: 20},
      {id: 5, name: "e", gender: "man", score: 25},
      {id: 6, name: "f", gender: "woman", score: 30},
      {id: 7, name: "g", gender: "man", score: 35},
      {id: 8, name: "h", gender: "woman", score: 40},
      {id: 9, name: "i", gender: "man", score: 45},
      {id: 10, name: "j", gender: "woman", score: 50},
      {id: 11, name: "k", gender: "man", score: 55},
      {id: 12, name: "l", gender: "woman", score: 60},
      {id: 13, name: "m", gender: "man", score: 65},
      {id: 14, name: "n", gender: "woman", score: 70},
      {id: 15, name: "o", gender: "man", score: 75},
      {id: 16, name: "p", gender: "woman", score: 80},
      {id: 17, name: "q", gender: "man", score: 85},
      {id: 18, name: "r", gender: "woman", score: 90},
      {id: 19, name: "s", gender: "man", score: 95},
      {id: 20, name: "t", gender: "woman", score: 100},
    ];
    return {students};
  }

  getId(students: Student[]):number{
    return students.length>0? Math.max(...students.map(student=> student.id))+1 : 1;
  }
}
