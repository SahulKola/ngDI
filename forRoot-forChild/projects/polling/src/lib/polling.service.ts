import { Inject, Injectable, InjectionToken, Optional } from '@angular/core';
import {timer} from 'rxjs'
import {shareReplay} from 'rxjs/operators'

export interface PollingConfig{
  interval: number;
}

export const INTERVAL = new InjectionToken<number>('INTERVAL')
@Injectable({
  providedIn: 'root'
})
export class PollingService {
  constructor(@Optional() @Inject(INTERVAL) private interval: number) { }
  public polling$ = timer(0, this.interval || 1000).pipe(shareReplay())
}
