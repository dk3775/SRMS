import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent {
  username: string = '';
  password: string = '';

  constructor(private router: Router) { }

  onSubmit() {
    if (this.username == 'admin' && this.password == 'admin') {
      alert('Login successful');
      this.router.navigate(['/admin/manage']);
    } else {
      alert('Invalid username or password');
    }
  }
}
