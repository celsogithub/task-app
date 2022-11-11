import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Task } from 'src/app/models/task';
import { WebStorageUtil } from 'src/app/util/web-storage-util';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.css']
})
export class TaskDetailsComponent implements OnInit {
  task!: Task;

  constructor(private route: ActivatedRoute) {
    console.log('TaskDetailsComponent');
  }

  ngOnInit(): void {
    let idParam: number = +this.route.snapshot.paramMap.get('id')!;
    let tasks = WebStorageUtil.get() as Task[];

    tasks = tasks.filter((t) => {
      return t.id = idParam;
    });

    if (tasks.length == 0) {
      alert('Oppsss! A task não foi encontrada!');
    }

    this.task = tasks[0];
  }
}
