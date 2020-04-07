import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactModule } from './contact/contact.module';


const routes: Routes = [
  {
    path: '', redirectTo: 'home', pathMatch: 'full'
  },
  {
    path: 'home', loadChildren: () => import('./home/home.module')
    .then(m => m.HomeModule)
  },
  {
    path: 'contact', loadChildren: () => import('./contact/contact.module')
    .then(m => ContactModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
