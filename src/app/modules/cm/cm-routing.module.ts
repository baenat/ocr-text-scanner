import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CaptureComponent } from '../pages/capture/capture.component';

const routes: Routes = [
  { path: 'capture', component: CaptureComponent },
  {
    path: '**',
    redirectTo: 'capture',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CmRoutingModule { }
