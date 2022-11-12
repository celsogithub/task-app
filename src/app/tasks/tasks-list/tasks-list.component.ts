import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Task } from 'src/app/models/task';
import { TaskStorageService } from 'src/app/util/task-storage-service';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.css']
})
export class TasksListComponent implements OnInit {
  tasks!: Task[];

  constructor(private router: Router, private taskService: TaskStorageService) { }

  ngOnInit(): void {
    this.tasks = this.taskService.getTasks();
  }

  onClickItem(task: Task) {
    this.router.navigate(['/task/detalhes', task?.id]);
  }

  deleteTask(task: Task) {
    let index = this.tasks.findIndex(t => t.id == task.id);
    this.tasks.splice(index, 1);
    this.taskService.delete(task.id);
  }
}
