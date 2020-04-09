import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkpageComponent } from './workpage/workpage.component';
import { Routes, RouterModule } from '@angular/router';
import { PdfViewerModule } from 'ng2-pdf-viewer';

import { MatCardModule } from '@angular/material/card';

const workRoutes: Routes = [
  { path: '', component: WorkpageComponent }
];

@NgModule({
  declarations: [WorkpageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(workRoutes),
    PdfViewerModule,
    MatCardModule
  ]
})
export class WorkModule { }
