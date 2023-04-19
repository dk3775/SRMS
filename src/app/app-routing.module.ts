import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AppComponent } from './app.component';
import { StudentLoginComponent } from './student-login/student-login.component';
import { StudentListComponent } from './student-list/student-list.component';
import { MainLoginComponent } from './main-login/main-login.component';
import { AdminComponent } from './admin/admin.component';


const routes: Routes = [
  { path: '', component: MainLoginComponent },
  { path: 'admin/login', component: AdminLoginComponent },
  { path: 'admin/manage', component: AdminComponent },
  { path: 'student/login', component: StudentLoginComponent },
  { path: 'student/list', component: StudentListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
