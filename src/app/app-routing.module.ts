import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from 'src/app/about/about/about.component';
import { NotFoundComponent } from 'src/app/errors/not-found/not-found.component';
import { AddTaskComponent } from 'src/app/tasks/add-task/add-task.component';
import { TaskDetailsComponent } from 'src/app/tasks/task-details/task-details.component';
import { TasksListComponent } from 'src/app/tasks/tasks-list/tasks-list.component';

const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'task/add', component: AddTaskComponent },
  { path: 'task/detalhes/:id', component: TaskDetailsComponent },
  { path: 'task/list', component: TasksListComponent },
  { path: '', redirectTo: 'task/list', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
