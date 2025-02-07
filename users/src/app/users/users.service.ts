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
/* 
  users: Iusers[] = [];

  http = inject(HttpClient);


  private apUrl = 'https://jsonplaceholder.typicode.com/users';
  constructor(){
    this.getUsers().subscribe((data: Iusers[])=>{

this.users = data;
    });
  }
  getUsers(): any {
    return this.http.get(`https://jsonplaceholder.typicode.com/users`);
  } */
 getUsers(){
  return this.http.get<Iusers[]>(this.Url);
 }
}

