import { Injectable } from '@angular/core';
import { Logger } from '../logger';
import { ExpLoggerService } from './exp-logger.service';

@Injectable({
  providedIn: 'root'
})
export class LoggerService implements Logger {
  _prefix = 'root';
  log(msg:string) {
    console.log(`${this._prefix}: ${msg}`)
  }
}
