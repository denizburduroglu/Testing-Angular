import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddTaskComponent } from './addTask';
import { TableComponent } from './table';
import { LoginComponent } from './login';

const routes: Routes = [
  { path: 'Login', component:LoginComponent},
  { path: 'AddTask', component: AddTaskComponent },
  { path: 'Table', component: TableComponent },


  //Default component
  { path: '', component:LoginComponent },
  

  //Otherwise redirect to home
  { path: '**', redirectTo: '' }
]; 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
