import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebcamModule } from 'ngx-webcam';
import { CameraComponent } from './camera/camera.component';
import { HeaderComponent } from './header/header.component';
import { TesseractComponent } from './tesseract/tesseract.component';
import { ImageFileComponent } from './image-file/image-file.component';

@NgModule({
  declarations: [
    CameraComponent,
    HeaderComponent,
    TesseractComponent,
    ImageFileComponent,
  ],
  imports: [
    CommonModule,
    WebcamModule,
  ],
  exports: [
    CameraComponent,
    HeaderComponent,
    TesseractComponent,
    ImageFileComponent
  ]
})
export class ComponentsModule { }
