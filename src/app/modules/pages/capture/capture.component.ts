import { Component } from '@angular/core';
import { WebcamImage } from 'ngx-webcam';

@Component({
  selector: 'app-capture',
  templateUrl: './capture.component.html',
  styleUrls: ['./capture.component.scss']
})
export class CaptureComponent {

  public webcamImage!: WebcamImage;

  initProcess = (event: WebcamImage) => {
    console.log('event => ', event)
    this.webcamImage = event;
  }

}
