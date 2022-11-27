import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Task } from 'src/app/models/task';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.css']
})
export class TasksListComponent implements OnInit {
  tasks!: Task[];

  constructor(private router: Router, private taskService: TaskService) { }

  ngOnInit(): void {
    this.taskService
      .getTasks()
      .subscribe((tasks: Task[]) => {
        this.tasks = tasks;
        tasks.forEach(t => {
          console.log(t.id);
          console.log(t.title);
          console.log(t.description);
        });
      });
  }

  onClickItem(task: Task) {
    this.router.navigate(['/task/detalhes', task?.id]);
  }

  deleteTask(task: Task) {
    let index = this.tasks.findIndex(t => t.id == task.id);
    this.tasks.splice(index, 1);
    this.taskService.delete(task.id).subscribe();
  }
}
