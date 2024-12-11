import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AttendancePageComponent } from './attendance-page/attendance-page.component';
import { WatchComponent } from './watch/watch.component';

@Component({
  selector: 'app-root',
  imports: [AttendancePageComponent , WatchComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-angular-app';
}
