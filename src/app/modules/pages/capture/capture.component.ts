import { Component } from '@angular/core';

@Component({
  selector: 'app-capture',
  templateUrl: './capture.component.html',
  styleUrls: ['./capture.component.scss']
})
export class CaptureComponent {

  bShowCameraCapture = true;
  bShowImageCapture = false;

  showVideoCapture(): void {
    this.bShowCameraCapture = true;
    this.bShowImageCapture = false;
  }

  showImageCapture(): void {
    this.bShowCameraCapture = false;
    this.bShowImageCapture = true;
  }

}
