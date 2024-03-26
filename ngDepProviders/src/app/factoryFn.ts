import { Injector } from '@angular/core';
import { APP_CONFIG } from './services/config.token';
import { ExpLoggerService } from './services/exp-logger.service';
import { LoggerService } from './services/logger.service';

export function factoryFn(injector: Injector) {
  return injector.get(APP_CONFIG).experimentalEnabled
    ? new ExpLoggerService()
    : new LoggerService();
}
