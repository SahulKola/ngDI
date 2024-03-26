import { NgModule } from '@angular/core';
import { PollingComponent } from './polling.component';
import { PollingService } from './polling.service';

@NgModule({
  declarations: [
    PollingComponent
  ],
  imports: [
  ],
  exports: [
    PollingComponent
  ],
  providers: [PollingService]
})
export class PollingModule { }
