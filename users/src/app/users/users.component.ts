import { Component, inject } from '@angular/core';
import { UsersService } from './users.service';
 import { Iusers } from './user';
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
 /*  users: Iusers[] = [];
userService = Inject  (UsersService);
  getUsers: any;

ngOninit(){
this.ongetUsers();
}

ongetUsers(){
  this.getUsers().subscribe((data: Iusers[])=>{

    this.users = data;
})

} */

