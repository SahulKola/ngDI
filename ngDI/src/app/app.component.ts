import { Component, Optional } from '@angular/core';
import { LoggerServiceService } from './services/logger-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ngDI';
}
