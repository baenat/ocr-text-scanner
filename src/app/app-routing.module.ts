import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CmComponent } from './modules/cm/cm.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'cm',
    pathMatch: 'full'
  },
  {
    path: 'cm', component: CmComponent,
    children: [
      { path: '', loadChildren: () => import('./modules/cm/cm.module').then((m) => m.CmModule) }
    ],
  },
  {
    path: '**',
    redirectTo: 'cm',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
