import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public activeBar = '';
  menu = {
    home: 'Home',
    history: 'History',
  };

  constructor() {}
}
