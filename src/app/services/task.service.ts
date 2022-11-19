import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Task } from 'src/app/models/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  URL = 'http://localhost:3000/tasks';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private httpClient: HttpClient) { }

  save(task: Task): Promise<Task> {
    return this.httpClient
      .post(this.URL, JSON.stringify(task), this.httpOptions)
      .toPromise() as Promise<Task>;
  }

  getTasks(): Promise<Task[]> {
    return this.httpClient
      .get<Task[]>(this.URL, this.httpOptions)
      .toPromise() as Promise<Task[]>;
  }

  delete(taskId: number): Promise<Task> {
    return this.httpClient
      .delete<Task>( `${this.URL}/${taskId}`, this.httpOptions)
      .toPromise() as Promise<Task>;
  }
}
