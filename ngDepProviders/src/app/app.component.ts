import { Component } from '@angular/core';
import { LoggerService } from './services/logger.service';
import { ExpLoggerService } from './services/exp-logger.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [{
    provide: LoggerService,
    useClass: ExpLoggerService
  }] 
})
export class AppComponent {
  title = 'ngDepProviders';

  constructor(private logger: LoggerService){}
  ngOnInit(): void {
    this.logger._prefix = 'App Component',
    this.logger.log('App Component Init')
  }
}
