import { Component } from '@angular/core';
import { ThrowStmt } from '@angular/compiler';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // tslint:disable-next-line: no-inferrable-types
  name: string  = 'John Carter';
  // tslint:disable-next-line: no-inferrable-types
  age: number  = 28;

  users: string[] = ['ryan', 'joe', 'cameron'];
   // tslint:disable-next-line: member-ordering
   posts = [];

  constructor(private dataService: DataService) {
    this.dataService.getData().subscribe(data => {
      this.posts = data;
    });
  }

  sayHello() {
    alert('Hello');
  }

  addUser(newUser) {
    this.users.push(newUser.value);
    newUser.value = '';
    newUser.focus();
    return false;
  }

  deleteUser(user) {
    for (let i = 0; i < this.users.length; i++) {
      if (user === this.users[i]) {
        this.users.splice(i, 1);
      }
    }
  }



}
