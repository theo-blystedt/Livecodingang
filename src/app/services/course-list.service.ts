import { Injectable } from '@angular/core';
import {Courses} from "../Courses";


@Injectable({
  providedIn: 'root'
})
export class CourseListService {
  courses: Courses[];

  constructor() {
    this.courses = [
      new Courses("1ik161", "Java", 7.5),
      new Courses("1ik162", "OOP", 7.5),
      new Courses("1ik163", "Web", 7.5)
    ];
  }
  getCourses(): Courses[] {
    return this.courses;
  }
}
