import {NgModule, Type} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {NumberDirective} from './numeric.directive';
import {UppercaseDirective} from './uppercase.directive';
import {AlphabetOnlyDirective} from './alphabet-only.directive';

export const SHARED_DIRECTIVES: Array<Type<any>> = [NumberDirective, UppercaseDirective, AlphabetOnlyDirective];

@NgModule({
  imports: [CommonModule, ReactiveFormsModule],
  declarations: [...SHARED_DIRECTIVES],
  exports: [...SHARED_DIRECTIVES],
})
export class SharedDirectivesModule {}
