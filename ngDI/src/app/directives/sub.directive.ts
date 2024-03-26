import { Directive, Host } from '@angular/core';
import { LoggerServiceService } from '../services/logger-service.service';

@Directive({
  selector: '[appSub]'
})
export class SubDirective {

  constructor(@Host() private logger: LoggerServiceService) {
    this.logger.log('Sub Constructor init')
   }

}
