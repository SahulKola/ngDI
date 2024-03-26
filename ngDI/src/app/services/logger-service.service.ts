import { Injectable } from '@angular/core';

@Injectable()
export class LoggerServiceService {
  _prefix: string = "Logger Service";
  constructor() { }
  logger(str: string) {
    console.log(`${this._prefix} ${str}` );
  }
}
