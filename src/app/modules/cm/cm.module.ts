import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CmRoutingModule } from './cm-routing.module';
import { CmComponent } from './cm.component';
import { ComponentsModule } from 'src/app/components/components.module';
import { CaptureComponent } from '../pages/capture/capture.component';

@NgModule({
  declarations: [
    CmComponent,
    CaptureComponent
  ],
  imports: [
    CommonModule,
    CmRoutingModule,
    ComponentsModule,
  ]
})
export class CmModule { }
