import { Component, inject } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
// import { UsersComponent } from './users/users.component';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users/users.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  imports: [ CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'users';
  data: any;
 private    http = inject(HttpClient);
//  private Url = 'https://jsonplaceholder.typicode.com/users';

fetchData() {
this.http.get( 'https://jsonplaceholder.typicode.com/users')
.subscribe((response)=>{this.data = response});
}
}
