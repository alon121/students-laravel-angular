import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentsComponent } from './components/students/students.component';
import { AddComponent } from './components/Forms/add/add.component';
import { LoginComponent } from './components/Forms/login/login.component';
import { EditComponent } from './components/Forms/edit/edit.component';
import { DeleteComponent } from './components/Forms/delete/delete.component';

const routes: Routes = [
  
  {
    path: '',
    redirectTo: '/students',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'students',
    component: StudentsComponent
  },
  {
    path: 'add-student',
    component: AddComponent
  },
  {
    path: 'edit-student',
    component: EditComponent
  },
  {
    path: 'delete-student',
    component: DeleteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
