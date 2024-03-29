import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SharedModule } from '../../../../../@shared/shared.module';
import { AngularModule } from '../../../../angular.module';

@Component({
  selector: 'kvn-tab-attribute-directives',
  templateUrl: './tab-attribute-directives.component.html',
  styleUrls: ['./tab-attribute-directives.component.scss'],
  standalone: true,
  imports: [
    RouterOutlet,
    SharedModule,
    AngularModule
  ]
})
export class TabAttributeDirectivesComponent {

}
