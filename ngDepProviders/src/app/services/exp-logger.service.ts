import { Injectable } from '@angular/core';
import { Logger } from '../logger';

@Injectable({
  providedIn: 'root'
})
export class ExpLoggerService implements Logger {
  _prefix= 'root';
  constructor() { }
  log(msg: string) {
    console.log(`${this._prefix} (Experimental): ${msg}`);
  }
}
