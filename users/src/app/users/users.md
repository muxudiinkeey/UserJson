# user component

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
----

# user template
```s


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
      </tr>

      }
    </tbody>
  </table> 
```
------

```s
import { Component, inject } from '@angular/core';
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


``
