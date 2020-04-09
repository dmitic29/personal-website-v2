import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactModule } from './contact/contact.module';
import { WorkModule } from './work/work.module';


const routes: Routes = [
  {
    path: '', redirectTo: 'home', pathMatch: 'full'
  },
  {
    path: 'home', loadChildren: () => import('./home/home.module')
    .then(m => m.HomeModule)
  },
  {
    path: 'work', loadChildren: () => import('./work/work.module')
    .then(m => WorkModule)
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
