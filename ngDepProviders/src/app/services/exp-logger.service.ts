import { Inject, Injectable } from '@angular/core';
import { Logger } from '../logger';
import { REPORTERS } from './reporter.token';
import { Reporter } from '../reporter';
@Injectable({
  providedIn: 'root'
})
export class ExpLoggerService implements Logger {
  _prefix= 'root';
  constructor(@Inject(REPORTERS) private reporters: ReadonlyArray<Reporter>){}
  log(msg: string) {
    this.reporters.forEach(r => r.report())
    console.log(`${this._prefix} (Experimental): ${msg}`);
  }
}
