import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student-service.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {

  addname: string = "";
  addroll: number = 0;
  addres: string = "";

  delroll: number = 0;
  constructor(private studentService: StudentService) { }

  students = this.studentService.getResultList();
  onAdd() {
    this.studentService.addStudent(this.addname, this.addroll, this.addres);
    this.addname = "";
    this.addroll = 0;
    this.addres = "";
  }
  onDelete() {
    this.studentService.deleteStudent(this.delroll);
    this.delroll = 0;
    this.students = this.studentService.getResultList();
  }
  clearLocalStorage() {
    this.studentService.clearLocalStorage();
    this.students = this.studentService.getResultList();
  }

}
