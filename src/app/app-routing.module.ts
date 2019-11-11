import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddTaskComponent } from './addTask';
import { TableComponent } from './table';

const routes: Routes = [
  { path: 'AddTask', component: AddTaskComponent },
  { path: 'Table', component: TableComponent },
  { path: '', component:TableComponent },

  //Otherwise redirect to home
  { path: '**', redirectTo: '' }
]; 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
