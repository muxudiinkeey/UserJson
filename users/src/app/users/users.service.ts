 import {  Injectable , inject } from '@angular/core';
 import { Iusers } from './user';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  http = inject (HttpClient);

  private Url = 'https://jsonplaceholder.typicode.com/users';
  users: Iusers[] = [];
  user : [] = [];
 getUsers(): Observable<Iusers[]>{
  return this.http.get<Iusers[]>(this.Url);
 }


 getUser(id: string): Observable<any> {
 return this.http.get(`${this.Url}/$(id)`);
 }

 addUser(user: string){
return this.http.get(this.Url)
 }
deleteUser(id: number){
  return this.http.delete(`${this.Url}/$(id)`);
}

}

