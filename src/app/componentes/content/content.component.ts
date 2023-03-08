import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit{
  dept: string;
  courses: string[];

  constructor() {
    this.dept="Informatics"
    this.courses = [
      'Java',
      'OOP',
      'Webdevelopment'
    ];
  }

  ngOnInit(){
  }

}
