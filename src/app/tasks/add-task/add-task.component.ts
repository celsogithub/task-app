import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Task } from 'src/app/models/task';
import { TaskStorageService } from 'src/app/util/task-storage-service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  @ViewChild('form') form!: NgForm;

  task = new Task('', '');

  isSubmitted!: boolean;
  isShowMessage: boolean = false;
  isSuccess!: boolean;
  message!: string;

  constructor(private taskService: TaskStorageService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.isSubmitted = true;

    this.taskService.save(this.task);

    this.isShowMessage = true;
    this.isSuccess = true;
    this.message = 'Cadastro realizado com sucesso!';

    this.form.reset();
    this.task = new Task('', '');
  }
}
