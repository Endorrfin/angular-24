import {NgModule} from '@angular/core';
import {ValidationMessageComponent} from './validation-message.component';
import {FormatErrorMessagePipe} from './format-error-message.pipe';
import {CommonModule} from '@angular/common';

const VALIDATION_COMPONENTS = [ValidationMessageComponent];
const VALIDATION_PIPES = [FormatErrorMessagePipe];

@NgModule({
  declarations: [...VALIDATION_COMPONENTS, VALIDATION_PIPES],
  imports: [CommonModule],
  exports: [...VALIDATION_COMPONENTS, VALIDATION_PIPES],
  providers: [],
})
export class ValidationMessageModule {}
