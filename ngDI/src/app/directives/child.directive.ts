import { Directive, Host } from '@angular/core';
import { LoggerServiceService } from '../services/logger-service.service';

@Directive({
  selector: '[appChild]',
  // providers: [LoggerServiceService]
})
export class ChildDirective {

  constructor(private logger: LoggerServiceService) {
    this.logger.log('directive constructor init');
   }

}
