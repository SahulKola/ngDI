import { Component } from '@angular/core';
import { PollingService } from 'polling';

@Component({
  selector: 'app-lazy',
  template: `<p>Polling count times (lazy): {{ polling.polling$ | async}} !!</p>`,
})
export class LazyComponent {
  constructor(public polling: PollingService){}
}
