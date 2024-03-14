import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NameComponent } from './name/name.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NameComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angular-project';
}
