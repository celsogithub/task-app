import { OnInit, Component, ViewChild } from '@angular/core';

import { Task } from 'src/app/models/task';
import { WebStorageUtil } from 'src/app/util/web-storage-util';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  ngOnInit(): void {
    let tasks: Task[] = [
      {
        id: 1,
        title: 'Lista de compras',
        description: 'arroz 5kg'
      },
      {
        id: 2,
        title: 'Prova de inglês',
        description: 'phrasal verbs'
      },
    ];

    WebStorageUtil.set(tasks);
  }
}
