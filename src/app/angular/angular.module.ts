import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularRoutingModule } from './angular-routing.module';

import { AngularComponent } from './angular/angular.component';
import { ParentComponent } from './angular/hooks/tab-introduction/components/parent/parent.component';
import { ChildComponent } from './angular/hooks/tab-introduction/components/child/child.component';
import { ChildInputDecoratorComponent } from './angular/decorators/tab-input/components/child-decorator/child-input-decorator.component';
import { ParentInputDecoratorComponent } from './angular/decorators/tab-input/components/parent-decorator/parent-input-decorator.component';
import { SharedModule } from '../@shared/shared.module';
import { BaseFormComponent } from './angular/form/tab-reactive-forms/base-form/base-form.component';
import { GeneralComponent } from './angular/form/tab-reactive-forms/base-form/components/general/general.component';
import { PerformanceComponent } from './angular/form/tab-reactive-forms/base-form/components/performance/performance.component';
import { CustomizationComponent } from './angular/form/tab-reactive-forms/base-form/components/customipztion/customization.component';
import { EnergySavingComponent } from './angular/form/tab-reactive-forms/base-form/components/energy-saving/energy-saving.component';
import { RainbowComponent } from './angular/decorators/tab-hostbinding/components/rainbow/rainbow.component';
import { ColorAttributeDirectivesComponent } from './angular/built-in-directives/components/tab-attribute-directives/components/color-attribute-directives/color-attribute-directives.component';
import { HighlightCustomDirectiveComponent } from './angular/custom-directives/components/tab-color-custom-directives/components/highlight-custom-directive/highlight-custom-directive.component';
import { TrackByComponent } from './angular/tables/components/tab-track-by/components/track-by/track-by.component';
import { BirdsComponent } from './angular/decorators/tab-contentchildren/components/birds/birds.component';
import { BatsComponent } from './angular/decorators/tab-contentchildren/components/bats/bats.component';
import { CrowsComponent } from './angular/decorators/tab-contentchildren/components/crows/crows.component';
import { DucksComponent } from './angular/decorators/tab-contentchildren/components/ducks/ducks.component';
import { ParrotsComponent } from './angular/decorators/tab-contentchildren/components/parrots/parrots.component';
import { OwlsComponent } from './angular/decorators/tab-contentchildren/components/owls/owls.component';
import { BuffaloComponent } from './angular/decorators/tab-contentchildren/components/buffallo/buffalo.component';
import { FrogComponent } from './angular/decorators/tab-contentchildren/components/frog/frog.component';

@NgModule({
  declarations: [
    AngularComponent,
    ParentComponent,
    ChildComponent,
    ChildInputDecoratorComponent,
    ParentInputDecoratorComponent,
    BaseFormComponent,
    GeneralComponent,
    PerformanceComponent,
    CustomizationComponent,
    EnergySavingComponent,
    RainbowComponent,
    ColorAttributeDirectivesComponent,
    HighlightCustomDirectiveComponent,
    TrackByComponent,
    BirdsComponent,
    BatsComponent,
    CrowsComponent,
    DucksComponent,
    ParrotsComponent,
    OwlsComponent,
    BuffaloComponent,
    FrogComponent,
  ],
  exports: [
    ParentComponent,
    ParentInputDecoratorComponent,
    BaseFormComponent,
    RainbowComponent,
    ColorAttributeDirectivesComponent,
    HighlightCustomDirectiveComponent,
    TrackByComponent,
    BirdsComponent,
    BatsComponent,
    BuffaloComponent,
    CrowsComponent,
    DucksComponent,
    FrogComponent,
    OwlsComponent,
    ParrotsComponent
  ],
  imports: [
    CommonModule,
    AngularRoutingModule,
    SharedModule,
  ]
})
export class AngularModule {}
