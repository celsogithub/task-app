import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Task } from 'src/app/models/task';
import { WebStorageUtil } from 'src/app/util/web-storage-util';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.css']
})
export class TasksListComponent implements OnInit {
  tasks!: Task[];

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.tasks = WebStorageUtil.get() as Task[];
  }

  onClickItem(task: Task) {
    this.router.navigate(['/task/detalhes', task?.id]);
  }

  deleteTask(task: Task) {
    let index = this.tasks.findIndex(t => t.id == task.id);
    this.tasks.splice(index, 1);
  }
}
