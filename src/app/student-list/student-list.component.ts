import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student-service.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  students: any[] = []; // array to store student data

  constructor(private studentService: StudentService) { }

  ngOnInit(): void {
    this.students = this.studentService.getResultList(); // get list of all students and their results
    console.log(this.students);
  }
}
