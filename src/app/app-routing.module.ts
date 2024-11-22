import { NgModule } from '@angular/core';
import {  RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'apiview',
    pathMatch: 'full',
  },
  {
    path: 'apiview',
    loadChildren: () => import('./pages/apiview/apiview.module').then(m => m.ApiviewPageModule),
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
