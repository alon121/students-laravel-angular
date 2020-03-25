import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentsComponent } from './components/students/students.component';

import { LoginComponent } from './components/Forms/login/login.component';
import { EditComponent } from './components/Forms/edit/edit.component';
import { DeleteComponent } from './components/Forms/delete/delete.component';
import { AddComponent } from './components/Forms/add/add.component';
import { AuthGuard } from 'src/app/core/guards/auth.guard';

const routes: Routes = [
  
  {
    path: '',
    redirectTo: '/students',
    pathMatch: 'full',
    canActivate:[AuthGuard]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'students',
    component: StudentsComponent,
    canActivate:[AuthGuard]
  },
  {
    path: 'add-student',
    component: AddComponent,
    canActivate:[AuthGuard]
  },
  {
    path: 'edit-student',
    component: EditComponent,
    canActivate:[AuthGuard]
  },
  {
    path: 'delete-student',
    component: DeleteComponent,
    canActivate:[AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
