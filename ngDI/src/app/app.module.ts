import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoggerServiceService } from './services/logger-service.service';
import { ParentDirective } from './directives/parent.directive';
import { ChildDirective } from './directives/child.directive';
import { SubDirective } from './directives/sub.directive';

@NgModule({
  declarations: [
    AppComponent,
    ParentDirective,
    ChildDirective,
    SubDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
}
