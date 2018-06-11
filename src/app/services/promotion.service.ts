import { Injectable } from '@angular/core';
import {AngularFireDatabase, AngularFireList} from 'angularfire2/database';
import {Promotion} from '../models/promotion';
import {AngularFireStorage, AngularFireUploadTask} from 'angularfire2/storage';
import {Observable} from 'rxjs';
import {finalize, map, tap} from 'rxjs/operators';
import {MatSnackBar} from '@angular/material';

@Injectable()
export class PromotionService {
  task: AngularFireUploadTask;
  percentage: Observable<number>;
  snapshot: Observable<any>;
  downloadURL: Observable<string>;
  imgURL: string;

  constructor(private db: AngularFireDatabase, private storage: AngularFireStorage, public snackBar: MatSnackBar) { }

  getPromotions() {
    return this.db.list('promotions').snapshotChanges().pipe(map(action => {
      return action.map(item => {
        const $key = item.payload.key;
        const data = { $key, ...item.payload.val() };
        return data;
      });
    }));
  }

  createPromotion(event: FileList, promotion: Promotion) {
    const file = event.item(0);

    if (file.type.split('/')[0] !== 'image') {
      console.error("El tipo de archivo no es una imagen");
      return;
    }

    const path = `promotions/${new Date().getTime()}_${file.name}`;
    const fileRef = this.storage.ref(path);
    this.task = this.storage.upload(path, file);
    this.percentage = this.task.percentageChanges();
    this.snapshot = this.task.snapshotChanges();

    this.snapshot.pipe(
      finalize(() => this.downloadURL = fileRef.getDownloadURL())
    ).subscribe();

    this.snapshot = this.task.snapshotChanges().pipe(
      tap(snap => {
        if (snap.bytesTransferred === snap.totalBytes) {
            this.db.list('/promotions').push({...promotion, imgURL: path}).then(() => {
              this.snackBar.open('La promoción se ha creado exitosamente!', 'Cerrar', {
                duration: 2000
              });
            });
        }
      })
    );

  }

  deletePromotion(id) {
    return this.db.object(`/promotions/${id}`).remove();
  }




}
