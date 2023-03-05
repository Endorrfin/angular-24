import { Routes } from '@angular/router';
import { PATHS } from '../../paths.constants';
import { NgrxComponent } from './ngrx.component';
import { TabBeginnerComponent } from './components/tab-beginner/tab-beginner.component';


export const NgrxRoutes: Routes = [
  {path: '', redirectTo: PATHS.onchanges, pathMatch: 'full'},

  {
    path: '',
    component: NgrxComponent,
    children: [
      {
        path: PATHS.beginner,
        component: TabBeginnerComponent,
      },
    ]
  }
]
