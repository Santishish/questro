import { Component, OnInit } from '@angular/core';
import { AngularFireStorage, AngularFireUploadTask } from 'angularfire2/storage';
import { Observable } from 'rxjs';
import {PromotionService} from '../../../services/promotion.service';
import {finalize} from 'rxjs/operators';

@Component({
  selector: 'file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent implements OnInit {

  task: AngularFireUploadTask;
  percentage: Observable<number>;
  snapshot: Observable<any>;
  downloadURL: Observable<string>;
  isHovering: boolean;

  constructor(private storage: AngularFireStorage, private promotionService: PromotionService) { }

  ngOnInit() {
  }

  toggleHover(event: boolean) {
    this.isHovering = event;
  }

  startUpload(event: FileList) {
    const file = event.item(0);
    // const fileRef = this.storage.ref(path);

    if (file.type.split('/')[0] !== 'image') {
      console.error('Unsupported file type :(');
      return;
    }

    const path = `promotions/${new Date().getTime()}_${file.name}`;
    this.task = this.storage.upload(path, file);

    this.percentage = this.task.percentageChanges();
    this.snapshot = this.task.snapshotChanges();

    this.task.snapshotChanges().pipe(
      finalize(() => this.downloadURL = (this.storage.ref(path)).getDownloadURL())
    ).subscribe();
  }

}
