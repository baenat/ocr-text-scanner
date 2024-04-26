import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { TesseractService } from 'src/app/services/tesseract.service';

@Component({
  selector: 'app-capture',
  templateUrl: './capture.component.html',
  styleUrls: ['./capture.component.scss']
})
export class CaptureComponent {

  bShowCameraCapture = true;
  bShowImageCapture = false;
  showRecognition: Observable<boolean> = new Observable<boolean>();

  constructor(private _tesseractService: TesseractService) {
    this.showRecognition = _tesseractService.showRecognitionView;
  }

  showComponentCapture(): void {
    this.bShowCameraCapture = !this.bShowCameraCapture;
    this.bShowImageCapture = !this.bShowImageCapture;
    this._tesseractService.showRecognitionView = false;
  }

}
