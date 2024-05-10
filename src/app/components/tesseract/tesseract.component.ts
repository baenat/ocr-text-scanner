import { Component, Input, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Icons } from '@icons/icons';
import { ClipboardService } from 'ngx-clipboard';
import { WebcamImage } from 'ngx-webcam';
import { Subject, Subscription, takeUntil } from 'rxjs';
import { TesseractService } from 'src/app/services/tesseract.service';
import * as Tesseract from 'tesseract.js';
import { recognize, createWorker, Worker } from 'tesseract.js';

@Component({
  selector: 'app-tesseract',
  templateUrl: './tesseract.component.html',
  styleUrls: ['./tesseract.component.scss']
})
export class TesseractComponent implements OnInit, OnDestroy {

  private destroy$ = new Subject<void>();

  public worker!: Worker;
  public workerProgress = 0;
  public workResult: Array<string> = [];
  public workReady = false;

  constructor(
    private _tesseractService: TesseractService,
    private _clipboardService: ClipboardService,
    public _icons: Icons,
  ) {
    this._tesseractService.imageCapture.pipe(takeUntil(this.destroy$)).subscribe({
      next: (result) => {
        const blob = this._tesseractService.base64toBlob(result);
        // this.loadWorker(blob);
        this.recognizeText(blob);
      },
    });
  }

  ngOnInit() { }

  loadWorker = async (blob: Blob) => {

    const worker = await recognize(blob, 'spa', {
      logger: progress => {
        this.workerProgress = parseInt('' + progress.progress * 100);
      }
    });

    this.workResult = [...this.workResult, worker.data.text]
    this.workReady = true;
  }

  removeResponse = () => {
    this.workResult = [];
    this.workerProgress = 0;
    // this._tesseractService.showRecognitionView = false;
  }

  recognizeText = async (path: any) => {
    const worker = await createWorker('spa', 1, {
      logger: log => {
        if (log.status == 'recognizing text') {
          this.workerProgress = parseInt('' + log.progress * 100)
        }
      }
    });

    const { data: { text } } = await worker.recognize(path/* 'https://tesseract.projectnaptha.com/img/eng_bw.png' */);
    this.workResult = [text, ...this.workResult];
    if (this.workResult.length > 3) {
      this.workResult.pop();
    }

    this.workReady = true;
    await worker.terminate();
  }

  copyText = (item: string) => {
    this._clipboardService.copy(item);
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

}
