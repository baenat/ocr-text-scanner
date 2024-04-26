import { Component } from '@angular/core';
import { TesseractService } from 'src/app/services/tesseract.service';

@Component({
  selector: 'app-image-file',
  templateUrl: './image-file.component.html',
  styleUrls: ['./image-file.component.scss']
})
export class ImageFileComponent {

  public title: string = '';
  public imageLoad: boolean = false;
  public fileSelected: string | ArrayBuffer | null = '';
  public messsage = '';

  constructor(private _tesseractService: TesseractService) {
    this.title = 'Select the image you want to upload';
  }

  onFileSelected = (event: any) => {
    try {
      const file: File = event.target.files[0];
      if (file) {
        this.readImage(file);
      }
    } catch (error) {
      console.error(error);
      this.messsage = 'Error loading image';
    }
  }

  readImage(file: File) {
    const reader = new FileReader();

    reader.onload = (e) => {
      this.fileSelected = reader.result;
      this.imageLoad = true;
      this.recognizeText(this.fileSelected)
    };

    reader.onerror = (e) => {
      console.warn(e);
      this.messsage = "Error loading image";
    };

    reader.readAsDataURL(file);
  }

  recognizeText = (path: any) => {
    this._tesseractService.showRecognitionView = true;
    setTimeout(() => {
      this._tesseractService.imageCaptureData = path;
    }, 500);
  }

}
