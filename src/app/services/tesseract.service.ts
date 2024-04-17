import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TesseractService {

  constructor() { }

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
