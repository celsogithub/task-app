import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AddTaskComponent } from './add-task/add-task.component';
import { TaskDetailsComponent } from './task-details/task-details.component';
import { TaskListItemComponent } from './task-list-item/task-list-item.component';
import { TasksListComponent } from './tasks-list/tasks-list.component';

@NgModule({
  declarations: [
    AddTaskComponent,
    TaskDetailsComponent,
    TaskListItemComponent,
    TasksListComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class TasksModule { }
