import { Component, Inject, Injector } from '@angular/core';
import { LoggerService } from './services/logger.service';
import { ExpLoggerService } from './services/exp-logger.service';
import { APP_CONFIG } from './services/config.token';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [{
    provide: LoggerService,
    useFactory: (injector:Injector) => {
      return injector.get(APP_CONFIG).experimentalEnabled ? new ExpLoggerService() : new LoggerService()
    },
    deps: [Injector]
  }] 
})
export class AppComponent {
  title = 'ngDepProviders';

  constructor(private logger: LoggerService, private expLogger: ExpLoggerService){}
  ngOnInit(): void {
    this.logger._prefix = 'App Component',
    this.logger.log('App Component Init')
    console.log(this.logger === this.expLogger);
  }
}
