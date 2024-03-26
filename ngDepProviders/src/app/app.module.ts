import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserReporterService } from './services/browser-reporter.service';
import { EngagingReporterService } from './services/engaging-reporter.service';
import { REPORTERS } from './services/reporter.token';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [
    {
      provide: REPORTERS,
      useExisting: BrowserReporterService,
      multi: true
    },
    {
      provide: REPORTERS,
      useExisting: EngagingReporterService,
      multi: true
    },

  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
