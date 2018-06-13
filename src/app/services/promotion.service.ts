import { Injectable } from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database';
import {Promotion} from '../models/promotion';
import {map} from 'rxjs/operators';
import {MatSnackBar} from '@angular/material';
import { storage } from 'firebase/app';

@Injectable()
export class PromotionService {
  imgURL: string;

  constructor(private db: AngularFireDatabase, public snackBar: MatSnackBar) { }

  getPromotions() {
    return this.db.list('promotions').snapshotChanges().pipe(map(action => {
      return action.map(item => {
        const $key = item.payload.key;
        const data = { $key, ...item.payload.val() };
        return data;
      });
    }));
  }

  pushPromotionImage(event: FileList, promotion, progress: { percentage: number }) {
    const file = event.item(0);

    if (file.type.split('/')[0] !== 'image') {
      console.error("El tipo de archivo no es una imagen");
      return;
    }

    const storageRef = storage().ref();
    const fileName = `${new Date().getTime()}_${file.name}`;
    const uploadTask = storageRef.child(`promotions/${fileName}`).put(file);

    uploadTask.on(storage.TaskEvent.STATE_CHANGED,
      (snapshot) => {
        // En progreso
        const snap = snapshot as storage.UploadTaskSnapshot;
        progress.percentage = Math.round((snap.bytesTransferred / snap.totalBytes) * 100);
      },
      (error) => {
      console.log(error);
      },
      () => {
        uploadTask.snapshot.ref.getDownloadURL().then(res => {
          this.imgURL = res;
          this.savePromotion(fileName, res, promotion);
        });
      });

  }

  savePromotion(fileName: string, url: string, promotion: Promotion) {
    const newPromotion = {...promotion, imgURL: url, name: fileName};
    this.db.list('/promotions').push(newPromotion)
      .then(() => {
        this.snackBar.open('La promoción se ha creado exitosamente!', 'Cerrar', {
          duration: 2000
        });
      });
  }

  deleteFromDatabase (id) {
    return this.db.object(`/promotions/${id}`).remove();
  }

  deletePromotion(promotion) {
    this.deleteFromDatabase(promotion.id)
      .then(() => {
        this.deleteFileFromStorage(promotion.name);
      })
      .catch(error => console.log(error));
  }

  deleteFileFromStorage (name: string) {
    const storageRef = storage().ref();
    return storageRef.child(`promotions/${name}`).delete()
      .then(() => {
        this.snackBar.open("Promoción eliminada", "Cerrar", {
          duration: 2000
        });
      });
  }

}
