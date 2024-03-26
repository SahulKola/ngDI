import { Component, Injector } from '@angular/core';
import { APP_CONFIG } from './services/config.token';
import { ExpLoggerService } from './services/exp-logger.service';
import { legacyLogger } from './services/logger.legacy';
import { LoggerService } from './services/logger.service';
import { REPORTERS } from './services/reporter.token';
import { EngagingReporterService } from './services/engaging-reporter.service';

function factoryFn(injector: Injector) {
  return injector.get(APP_CONFIG).experimentalEnabled ? injector.get(ExpLoggerService) : injector.get(LoggerService);
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [
    {
      provide: LoggerService,
      useClass: ExpLoggerService
     },
     {
      provide: REPORTERS,
      useExisting: EngagingReporterService,
      multi: true
     }
  ],
})
export class AppComponent {
  title = 'ngDepProviders';

  constructor(private logger: LoggerService) {}
  ngOnInit(): void {
    console.log('What is logger', this.logger);
    this.logger._prefix = 'App Component',
    this.logger.log('App Component Init');
  }
}
