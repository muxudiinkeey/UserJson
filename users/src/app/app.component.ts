import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users/users.component';
import { UserRegisterComponent } from './user-register/user-register.component';

@Component({
  selector: 'app-root',
  imports: [ CommonModule, UsersComponent, UserRegisterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'users';
}
