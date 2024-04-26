import { Component, EventEmitter, Output } from '@angular/core';
import { WebcamImage, WebcamInitError } from 'ngx-webcam';
import { Observable, Subject } from 'rxjs';
import { TesseractService } from 'src/app/services/tesseract.service';

@Component({
  selector: 'app-camera',
  templateUrl: './camera.component.html',
  styleUrls: ['./camera.component.scss']
})
export class CameraComponent {

  private trigger: Subject<any> = new Subject();
  private nextWebcam: Subject<any> = new Subject();

  @Output() pictureTaken = new EventEmitter<WebcamImage>();

  public image!: WebcamImage;
  public allowCameraSwitch = true;
  public title: string = '';
  public btnCapture: string = '';
  public btnRecognize: string = '';
  public previewImage: string = '';
  public imageLoad: boolean = false;
  public checkPermission: boolean = false;

  stream!: MediaStream;

  constructor(private _tesseractService: TesseractService) {
    this.title = 'Bring the identification document closer to the camera';
    this.btnCapture = 'Take a picture';
    this.btnRecognize = 'Recognize';
  }

  ngOnInit() {
    this.checkPermissions();
  }

  public getSnapshot = () => {
    this.imageLoad = false;
    this.trigger.next(void 0);
  }

  public captureImg = (event: WebcamImage) => {
    this.imageLoad = true;
    this.previewImage = event!.imageAsDataUrl;
    this.image = event;
  }

  public get $trigger(): Observable<any> {
    return this.trigger.asObservable();
  }

  public get nextWebcamObservable(): Observable<any> {
    return this.nextWebcam.asObservable();
  }

  public emitImage = () => {
    this._tesseractService.imageCaptureData = this.image.imageAsDataUrl;
  }

  checkPermissions = () => {
    navigator.mediaDevices.getUserMedia({ video: true })
      .then(() => {
        this.checkPermission = true;
      }).catch((error) => {
        this.checkPermission = false;
        console.warn(error);
      });
  }

}
