import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { WebcamImage } from 'ngx-webcam';
import { TesseractService } from 'src/app/services/tesseract.service';
import * as Tesseract from 'tesseract.js';
import { recognize, createWorker } from 'tesseract.js';

@Component({
  selector: 'app-tesseract',
  templateUrl: './tesseract.component.html',
  styleUrls: ['./tesseract.component.scss']
})
export class TesseractComponent implements OnInit {

  @Input('image') base64Data: string = '';

  public worker!: Tesseract.Worker;
  public workerProgress = 0;
  public workResult: Array<string> = [];
  public workReady = false;

  constructor(private _tesseractService: TesseractService) { }

  ngOnChanges(changes: SimpleChanges): void {

    if (changes['base64Data']) {
      console.log('changes => ', changes)
      const { base64Data: { currentValue } } = changes;
      this.base64Data = currentValue;
      if (this.base64Data) {
        const blob = this._tesseractService.base64toBlob(this.base64Data);
        this.loadWorker(blob);
      }
    }

  }

  async ngOnInit() { }

  loadWorker = async (blob: Blob) => {

    const worker = await recognize(blob, 'spa', {
      logger: progress => {
        console.log('progress => ', progress)
        this.workerProgress = parseInt('' + progress.progress * 100);
      }
    });

    this.workResult = [...this.workResult, worker.data.text]
    this.workReady = true;
  }

  removeResponse = () => {
    this.workResult = [];
    this.workerProgress = 0;
  }

}
