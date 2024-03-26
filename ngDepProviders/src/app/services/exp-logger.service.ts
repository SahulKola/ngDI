import { Inject, Injectable } from '@angular/core';
import { Logger } from '../logger';
import { APP_CONFIG, AppConfig } from './config.token';

@Injectable({
  providedIn: 'root'
})
export class ExpLoggerService implements Logger {
  _prefix= 'root';
  constructor(@Inject(APP_CONFIG) private appConfig:AppConfig) { 
    console.log(this.appConfig)
  }
  log(msg: string) {
    console.log(`${this._prefix} (Experimental): ${msg}`);
  }
}
