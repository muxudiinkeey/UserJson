
user component html
```html


 <table class="table table-hover">
    <thead>
      <th>id</th>
      <th>name</th>
      <th>UserName</th>
      <th>email</th>
    </thead>
    <tbody>
      @for (user of users$ | async; track user.id){
      <tr>
        <td>{{ user.id }}</td>
        <td>{{ user.name }}</td>
        <td>{{ user.username }}</td>
        <td>{{user.email}}</td>
       }
    </tbody>
  </table> 


```
user component ts
---------------------------------
```s
import { Component, inject } from '@angular/core';
import { UsersService } from './users.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-users',
  imports: [CommonModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {
  
private uerService = inject (UsersService);

users$ = this.uerService.getUsers();
}
```
user service
```s
 import {  Injectable , inject } from '@angular/core';
 import { Iusers } from './user';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  http = inject (HttpClient);
  private Url = 'https://jsonplaceholder.typicode.com/users';
  users: Iusers[] = [];

 getUsers(){
  return this.http.get<Iusers[]>(this.Url);
 }
}
```


