import { Routes } from '@angular/router';
import { PATHS } from '../../../paths.constants';
import { CustomDirectivesComponent } from './custom-directives.component';
import { TabIntroCustomDirectivesComponent } from './components/tab-intro-custom-directives/tab-intro-custom-directives.component';
import { TabColorCustomDirectivesComponent } from './components/tab-color-custom-directives/tab-color-custom-directives.component';


export const CustomDirectivesRoutes: Routes = [
  { path: '', redirectTo: PATHS.introductionCustomDirectives, pathMatch: 'full' },
  {
    path: '',
    component: CustomDirectivesComponent,
    children: [
      {
        path: PATHS.introductionCustomDirectives,
        component: TabIntroCustomDirectivesComponent
      },
      {
        path: PATHS.colorCustomDirectives,
        component: TabColorCustomDirectivesComponent
      },
    ]
  },
]
