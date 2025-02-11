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

