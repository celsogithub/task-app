import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Task } from 'src/app/models/task';

@Component({
  selector: 'app-task-list-item',
  templateUrl: './task-list-item.component.html',
  styleUrls: ['./task-list-item.component.css']
})
export class TaskListItemComponent implements OnInit {
  @Input() task!: Task;
  @Output() itemDeleteEvent = new EventEmitter<Task>();

  constructor() { }

  ngOnInit(): void {
  }

  onDeleteClick() {
    this.itemDeleteEvent.emit(this.task);
  }
}
