import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-login',
  templateUrl: './student-login.component.html',
  styleUrls: ['./student-login.component.css']
})
export class StudentLoginComponent {
  username: string = '';
  password: string = '';

  constructor(private router: Router) { }
  onSubmit() {
    if (this.username == 'student' && this.password == 'student') {
      this.router.navigate(['/student/list']);
    } else {
      alert('Invalid username or password');
    }
  }
}
