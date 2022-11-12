import { Injectable } from '@angular/core';

import { Task } from 'src/app/models/task';
import { WebStorageUtil } from './web-storage-util';

@Injectable({ providedIn: 'root' })
export class TaskStorageService {
  tasks!: Task[];

  constructor() {
    this.tasks = WebStorageUtil.get();
  }

  save(task: Task) {
    this.tasks = WebStorageUtil.get();
    this.tasks.push(task);
    WebStorageUtil.set(this.tasks);
  }

  delete(id: number): boolean {
    this.tasks = WebStorageUtil.get();
    this.tasks = this.tasks.filter((t) => {
      return t.id == id;
    });

    WebStorageUtil.set(this.tasks);
    return true;
  }

  isExist(title: string): boolean {
    this.tasks = WebStorageUtil.get();
    for (let t of this.tasks) {
      if (t.title?.valueOf() == title?.valueOf()) {
        return true;
      }
    }
    return false;
  }

  getTasks(): Task[] {
    this.tasks = WebStorageUtil.get();
    return this.tasks;
  }

}
