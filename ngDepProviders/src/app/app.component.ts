import { Component } from '@angular/core';
import { LoggerService } from './services/logger.service';
import { ExpLoggerService } from './services/exp-logger.service';
import { legacyLogger } from './services/logger.legacy';
import { APP_CONFIG, AppConfig } from './services/config.token';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [{
    provide: LoggerService,
    useFactory: (appConfig: AppConfig) => {
      return appConfig.experimentalEnabled ? new ExpLoggerService() : new LoggerService()
    },
    deps: [APP_CONFIG]
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
