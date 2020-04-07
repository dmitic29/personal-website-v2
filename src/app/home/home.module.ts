import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './homepage/homepage.component';
import { Routes, RouterModule } from '@angular/router';

import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

const homepageRoutes: Routes = [
  {path: '', component: HomepageComponent }
];

@NgModule({
  declarations: [HomepageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(homepageRoutes),
    MatCardModule,
    MatIconModule
  ]
})
export class HomeModule { }
