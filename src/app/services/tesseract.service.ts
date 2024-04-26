import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TesseractService {

  private imageCapture$ = new Subject<string>();
  private showRecognition$ = new BehaviorSubject<boolean>(false);

  constructor() { }

  get imageCapture(): Observable<string> {
    return this.imageCapture$.asObservable();
  }

  set imageCaptureData(image: string) {
    this.imageCapture$.next(image);
  }

  get showRecognitionView(): Observable<boolean> {
    return this.showRecognition$.asObservable();
  }

  set showRecognitionView(bool: boolean) {
    this.showRecognition$.next(bool);
  }

  base64toBlob = (base64Data: string): Blob => {
    const [imageType, base64Raw] = base64Data.split(';base64,');
    const contentType = imageType.split(':')[1];
    const byteCharacters = atob(base64Raw);
    const byteNumbers = new Array(byteCharacters.length);
    for (let i = 0; i < byteCharacters.length; i++) {
      byteNumbers[i] = byteCharacters.charCodeAt(i);
    }
    const byteArray = new Uint8Array(byteNumbers);
    return new Blob([byteArray], { type: contentType });
  }

}
