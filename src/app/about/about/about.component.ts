import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  developer = 'Developed by Celso Kazuhiro Fujii';
  discipline = 'CETEJ5 - Frameworks Web - Java XXIII';

  constructor() { }

  ngOnInit(): void {
  }
}
