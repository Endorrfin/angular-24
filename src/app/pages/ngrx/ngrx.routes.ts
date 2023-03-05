import { Routes } from '@angular/router';
import { PATHS } from '../../paths.constants';
import { NgrxComponent } from './ngrx.component';
import { TabBeginnerComponent } from './components/tab-beginner/tab-beginner.component';
import { TabAdvancedComponent } from './components/tab-advanced/tab-advanced.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


export const NgrxRoutes: Routes = [
  {path: '', redirectTo: PATHS.beginner, pathMatch: 'full'},

  {
    path: '',
    component: NgrxComponent,
    children: [
      {
        path: PATHS.beginner,
        component: TabBeginnerComponent,
        // loadChildren: [
        //   {path: "", component: HomeComponent},
        //   {
        //     path: "customers",
        //     loadChildren: "../../../app/pages/ngrx/customers.module#CustomersModule"
        //   }
        // ]
      },
      {
        path: PATHS.advanced,
        component: TabAdvancedComponent},
    ],
  },
];

