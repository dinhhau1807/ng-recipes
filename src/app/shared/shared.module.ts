import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoggingService } from '../logging.service';

import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { AlertComponent } from './alert/alert.component';
import { PlaceholderDirective } from './placeholder/placeholder.directive';
import { DropdownDirective } from './dropdown.directive';

@NgModule({
  declarations: [
    AlertComponent,
    LoadingSpinnerComponent,
    PlaceholderDirective,
    DropdownDirective,
  ],
  imports: [CommonModule],
  exports: [
    AlertComponent,
    LoadingSpinnerComponent,
    PlaceholderDirective,
    DropdownDirective,
    CommonModule,
  ],
  // providers: [LoggingService], // Should not provide service in eager loaded module
  // entryComponents: [AlertComponent], // For Angular version lower than 9+
})
export class SharedModule {}
