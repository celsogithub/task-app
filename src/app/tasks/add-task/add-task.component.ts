import { Component, EventEmitter, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

import { Task } from 'src/app/models/task';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  @Output() addTaskEvent = new EventEmitter<Task>();

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    let task = new Task('titulo', 'descrição');
    this.addTaskEvent.emit(task);
  }
}
