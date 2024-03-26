import { Component, Self } from '@angular/core';
import { LoggerServiceService } from './services/logger-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  // providers: [LoggerServiceService]
})
export class AppComponent {
  title = 'ngDI - Resolution Modifiers';
  constructor(@Self() private logger :LoggerServiceService){  
    if(this.logger) {
      this.logger._prefix = 'App Component';
      this.logger.log('constructor init');
    }
  }
}
