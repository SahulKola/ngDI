import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerServiceService {
  _prefix: string = "root";
  constructor() { }
  log(message: string) {
    console.log(`${this._prefix}: ${message}`);
  }
}
