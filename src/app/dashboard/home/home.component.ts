import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  profileData: any = [];
  profileName = '';
  search = false;
  constructor(private api: ApiService, private route: Router) {
    localStorage.setItem('selected_profile', '{}');
  }
  searchData() {
    if (this.profileName && this.profileName.trim().length) {
      this.profileData = this.api.get(this.profileName);
      const obj = {
        search_term: this.profileName,
        data: this.profileData
      }
      this.api.searchHistory.push(obj);
      localStorage.setItem('profile_data', JSON.stringify(this.api.searchHistory));
      this.search = true;
    }
  }
  goToProfile(item: any) {
    localStorage.setItem('selected_profile', JSON.stringify(item));
    this.route.navigate(['profile']);
  }
}
