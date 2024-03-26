import { Directive, Optional, Self } from '@angular/core';
import { LoggerServiceService } from '../services/logger-service.service';

@Directive({
  selector: '[appParent]',
  providers: [LoggerServiceService]
})
export class ParentDirective {

  constructor(@Optional() @Self() private logger: LoggerServiceService) {
    if(this.logger){
      this.logger._prefix = 'Parent Directive';
      this.logger.log('Parent Directive Constructor init')
    }
   }

}
