import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private students: any[] = []; // array to store student data

  constructor() { }

  // function to add a new student
  addStudent(name: string, rollNumber: number, result: string): void {
    const newStudent = { name, rollNumber, result };
    this.students.push(newStudent);
    localStorage.setItem('students', JSON.stringify(this.students)); // save the updated students array to local storage
  }

  deleteStudent(rollNumber: number): void {
    this.students = this.students.filter((student) => student.rollNumber !== rollNumber);
    localStorage.setItem('students', JSON.stringify(this.students)); // save the updated students array to local storage
  }

  // function to get a list of all students and their results
  getResultList(): any[] {
    const studentsFromLocalStorage = localStorage.getItem('students');
    if (studentsFromLocalStorage) {
      this.students = JSON.parse(studentsFromLocalStorage); // get the students array from local storage
    }
    return this.students;
  }

  clearLocalStorage(): void {
    localStorage.clear();
  }
}
