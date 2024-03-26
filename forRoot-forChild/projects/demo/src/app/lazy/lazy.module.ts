import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PollingModule } from 'polling';
import { LazyRoutingModule } from './lazy-routing.module';
import { LazyComponent } from './lazy.component';

@NgModule({
  imports: [
    CommonModule,
    PollingModule.forChild({ interval: 500 }),
    LazyRoutingModule,
  ],
  declarations: [LazyComponent],
})
export class LazyModule {}
