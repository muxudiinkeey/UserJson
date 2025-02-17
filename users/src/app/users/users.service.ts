 import {  Injectable , inject } from '@angular/core';
 import { Iusers } from './user';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  //http
  http = inject (HttpClient);
  // url
  private Url = 'https://jsonplaceholder.typicode.com/users';
  //interface
  users: Iusers[] = [];
  // get all users

 getUsers(){
  return this.http.get<Iusers[]>(this.Url);
 }
}

