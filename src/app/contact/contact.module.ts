import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactpageComponent } from './contactpage/contactpage.component';
import { Routes, RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatButtonModule } from '@angular/material/button';

const contactRoutes: Routes = [
  { path: '', component: ContactpageComponent }
];

@NgModule({
  declarations: [ContactpageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(contactRoutes),
    MatCardModule,
    ReactiveFormsModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatButtonModule
  ]
})
export class ContactModule { }
