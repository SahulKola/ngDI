import { Injectable } from '@angular/core';
import { Reporter } from '../reporter';

@Injectable({
  providedIn: 'root'
})
export class EngagingReporterService implements Reporter {

  constructor() { }
  report() {
    console.log(`Engaging Report: User has been using app ... seconds`)
  }
}
