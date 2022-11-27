import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, OperatorFunction, throwError } from 'rxjs';

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

  save(task: Task): Observable<Task> {
    return this.httpClient
      .post(this.URL, JSON.stringify(task), this.httpOptions)
      .pipe(
        catchError(this.handleError) as OperatorFunction<Object, Task>
      );
  }

  getTasks(): Observable<Task[]> {
    return this.httpClient
      .get<Task[]>(this.URL, this.httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  delete(taskId: number): Observable<Task> {
    return this.httpClient
      .delete<Task>( `${this.URL}/${taskId}`, this.httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }
}
