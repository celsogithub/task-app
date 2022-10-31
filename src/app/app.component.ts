import * as M from 'materialize-css';

import { AfterViewInit, Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {

  aboutDeveloper = 'Developed by Celso Kazuhiro Fujii';
  aboutDiscipline = 'CETEJ5 - Frameworks Web - Java XXIII';

  ngAfterViewInit(): void {
    console.log('Method not implemented.');
  }
}
