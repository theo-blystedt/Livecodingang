import { Component,OnInit } from '@angular/core';
import {Courses} from "../../Courses";
import {CourseListService} from "../../services/course-list.service";

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit{
  dept: string = "Informatics";
  courses: Courses[] = [];



  constructor(private courseService: CourseListService) {


  }

  ngOnInit(){
    this.courses = this.courseService.getCourses();
  }

}
