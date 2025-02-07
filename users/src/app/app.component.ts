import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
// import { UsersComponent } from './users/users.component';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users/users.component';

@Component({
  selector: 'app-root',
  imports: [ CommonModule, UsersComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'users';
}
