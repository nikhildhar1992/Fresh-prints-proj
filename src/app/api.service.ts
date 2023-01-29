import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  searchHistory: any = [];
  selectedProfile: any;
  constructor() {}

  public get(name: string = '') {
    // Considering below api will return an array of objects with data
    // return this.http.get(API_URL + '/api/' + url).pipe(map(res => res));
    const data = [
      {
        name: 'Fresh Prints',
        img: 'assets/images/user.PNG',
      },
      {
        name: 'Nikhil',
        img: 'assets/images/user.PNG',
      },
      {
        name: 'User',
        img: 'assets/images/user.PNG',
      },
      {
        name: 'Max',
        img: 'assets/images/user.PNG',
      },
      {
        name: 'Ethan',
        img: 'assets/images/user.PNG',
      },
      {
        name: 'User2',
        img: 'assets/images/user.PNG',
      },
    ];
    if (name) {
      const findData = data.filter((item) => item.name.includes(name));
      return findData;
    } else {
      return [];
    }
  }
}
// /api/users
