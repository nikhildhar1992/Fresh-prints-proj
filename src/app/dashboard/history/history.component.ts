import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {
  constructor(public api: ApiService, private route: Router) {
    localStorage.setItem('selected_profile', '{}');
  }

  ngOnInit() {
    if (localStorage.getItem('profile_data')) {
      this.api.searchHistory = JSON.parse(localStorage.getItem('profile_data') || '[]');
    }
  }

  clearData() {
    this.api.searchHistory = [];
    localStorage.clear();
  }
  goToProfile(item: any) {
    localStorage.setItem('selected_profile', JSON.stringify(item));
    this.route.navigate(['profile']);
  }
}
